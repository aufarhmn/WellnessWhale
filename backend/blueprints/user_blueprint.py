from flask import Blueprint, jsonify, request
from main import db
from models.user import User

user_bp = Blueprint("user", __name__, url_prefix="/user")

# NOTHING TESTED
@user_bp.route("/", methods=["GET"])
def get_users():
    users = db.users.find()
    return jsonify([user for user in users])

@user_bp.route("/", methods=["POST"])
def create_user():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    if not (username and email and password):
        return jsonify({"error": "Username, email, and password are required"}), 400

    user = User(username, email, password)
    db.users.insert_one(user.to_dict())
    return jsonify(user.to_dict()), 201

@user_bp.route("/<user_id>", methods=["GET"])
def get_user(user_id):
    user = db.users.find_one({"_id": user_id})
    if user:
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404

@user_bp.route("/<user_id>", methods=["PUT"])
def update_user(user_id):
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    if not (username or email or password):
        return jsonify({"error": "At least one field must be provided for update"}), 400

    update_data = {}
    if username:
        update_data["username"] = username
    if email:
        update_data["email"] = email
    if password:
        update_data["password"] = password

    result = db.users.update_one({"_id": user_id}, {"$set": update_data})
    if result.modified_count > 0:
        return jsonify({"message": "User updated successfully"}), 200
    else:
        return jsonify({"error": "User not found or no changes applied"}), 404

@user_bp.route("/<user_id>", methods=["DELETE"])
def delete_user(user_id):
    result = db.users.delete_one({"_id": user_id})
    if result.deleted_count > 0:
        return jsonify({"message": "User deleted successfully"}), 200
    else:
        return jsonify({"error": "User not found"}), 404
