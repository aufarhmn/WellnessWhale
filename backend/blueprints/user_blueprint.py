import bcrypt
import json
import jwt
import os

from flask import Blueprint, jsonify, request, make_response
from bson import ObjectId
from main import db
from models.user import User
from middleware.auth import ensure_authenticated

user_bp = Blueprint("user", __name__, url_prefix="/user")

# GET ALL USERS
@user_bp.route("/", methods=["GET"])
@ensure_authenticated
def get_users():
    users = db.users.find()
    user_list = [user for user in users] 

    def custom_serialize(obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return obj

    serialized_users = json.dumps(user_list, default=custom_serialize)
    return jsonify(json.loads(serialized_users))

# CREATE USER
@user_bp.route("/", methods=["POST"])
def create_user():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not (username and email and password):
        return jsonify({"error": "Username, email, and password are required"}), 400

    existing_user = db.users.find_one({"email": email})
    if existing_user:
        return jsonify({"error": "Email already exists"}), 400
    
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(12)).decode('utf-8')
    
    user = User(username, email, hashed_password)
    
    db.users.insert_one(user.UserToDict())

    return jsonify({"message": "Success adding user!"}), 201

# LOGIN USER
@user_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not (email and password):
        return jsonify({"error": "Email and password are required!"}), 400

    user = db.users.find_one({"email": email})
    if not user:
        return jsonify({"error": "Invalid credentials!"}), 404

    if bcrypt.checkpw(password.encode('utf-8'), user["password"].encode('utf-8')):
        token = jwt.encode({"userId": str(user["_id"])}, os.getenv('JWT_SECRET'), algorithm="HS256")

        response = make_response(jsonify({"message": "Login successful!", "token": token}), 200)

        response.set_cookie("Auth", token)
        response.headers["Auth"] = token

        return response
    else:
        return jsonify({"error": "Invalid credentials!"}), 401

# EDIT USER
@user_bp.route("/<user_id>", methods=["PUT"])
@ensure_authenticated
def update_user(user_id):
    data = request.json
    username = data.get("username")
    email = data.get("email")
    if not (username or email):
        return jsonify({"error": "At least one field must be provided for update"}), 400

    update_data = {}
    if username:
        update_data["username"] = username
    if email:
        update_data["email"] = email

    result = db.users.update_one({"_id": ObjectId(user_id)}, {"$set": update_data})
    if result.modified_count > 0:
        return jsonify({"message": "User updated successfully"}), 200
    else:
        return jsonify({"error": "User not found or no changes applied"}), 404

# DELETE USER
@user_bp.route("/<user_id>", methods=["DELETE"])
@ensure_authenticated
def delete_user(user_id):
    result = db.users.delete_one({"_id": ObjectId(user_id)})
    if result.deleted_count > 0:
        return jsonify({"message": "User deleted successfully"}), 200
    else:
        return jsonify({"error": "User not found"}), 404
