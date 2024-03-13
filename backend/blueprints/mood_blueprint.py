from flask import Blueprint, jsonify, request
from main import db
from bson import ObjectId
from models.mood import Mood
from datetime import datetime

mood_bp = Blueprint("mood", __name__, url_prefix="/mood")

# INSERT MOOD CORRESPONDING TO USER
@mood_bp.route("/", methods=["POST"])
def insert_mood():
    data = request.json
    mood_value = data.get("mood")
    user_id = data.get("user_id")

    if not (mood_value and user_id):
        return jsonify({"error": "Mood and user_id are required"}), 400

    user = db.users.find_one({"_id": ObjectId(user_id)})
    if not user:
        return jsonify({"error": "User not found"}), 400

    if "mood_ids" not in user:
        user["mood_ids"] = []

    mood = Mood(mood_value, datetime.utcnow())
    mood_dict = mood.MoodToDict()
    result = db.moods.insert_one(mood_dict)

    if result.inserted_id:
        user["mood_ids"].append(result.inserted_id)
        db.users.update_one({"_id": ObjectId(user_id)}, {"$set": user})
        return jsonify({"message": "Success adding mood!", "mood_id": str(result.inserted_id)}), 201
    else:
        return jsonify({"error": "Failed to save mood"}), 500
