import bcrypt
import jwt
import os

from flask import Blueprint, jsonify, request, make_response
from main import db
from models.counselor import Counselor

counselor_bp = Blueprint("counselor", __name__, url_prefix="/counselor")

# CREATE COUNSELOR
@counselor_bp.route("/", methods=["POST"])
def create_counselor():
    data = request.json
    username = data.get("counselor_username")
    email = data.get("counselor_email")
    password = data.get("counselor_password")

    if not (username and email and password):
        return jsonify({"error": "Username, email, and password are required"}), 400

    existing_counselor = db.counselors.find_one({"counselor_email": email})
    if existing_counselor:
        return jsonify({"error": "Email already exists"}), 400
    
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(12)).decode('utf-8')
    
    counselor = Counselor(username, email, hashed_password)
    
    db.counselors.insert_one(counselor.CounselorToDict())

    return jsonify({"message": "Success adding user!"}), 201

# LOGIN COUNSELOR
@counselor_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("counselor_email")
    password = data.get("counselor_password")

    if not (email and password):
        return jsonify({"error": "Email and password are required!"}), 400

    counselor = db.counselors.find_one({"counselor_email": email})
    if not counselor:
        return jsonify({"error": "Invalid credentials!"}), 404

    if bcrypt.checkpw(password.encode('utf-8'), counselor["counselor_password"].encode('utf-8')):
        token = jwt.encode({"counselor_email": email}, os.getenv('JWT_SECRET') , algorithm="HS256")

        response = make_response(jsonify({"message": "Login successful!"}), 200)

        response.set_cookie("Auth", token)

        return response
    else:
        return jsonify({"error": "Invalid credentials!"}), 401