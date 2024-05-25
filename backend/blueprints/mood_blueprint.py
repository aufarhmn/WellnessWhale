from flask import Blueprint, jsonify, request
from main import db
from bson import ObjectId
from models.mood import Mood
from datetime import datetime, timedelta
from middleware.auth import ensure_authenticated

mood_bp = Blueprint("mood", __name__, url_prefix="/mood")

# GET MOOD BASED AND USER
@mood_bp.route("/", methods=["GET"])
@ensure_authenticated
def get_mood():
    user = db.users.find_one({"_id": ObjectId(request.userId)})
    if not user:
        return jsonify({"error": "User not found"}), 400

    mood_ids = user.get("mood_ids")
    if not mood_ids:
        return jsonify({"error": "No moods found for user"}), 400

    moods = db.moods.find({"_id": {"$in": mood_ids}})
    mood_list = [mood for mood in moods]

    for mood in mood_list:
        mood["_id"] = str(mood["_id"])

    return jsonify(mood_list), 200

# GET MOOD BASED ON USER AND DATE
@mood_bp.route("/today/<user_id>", methods=["GET"])
@ensure_authenticated
def get_mood_today(user_id):
    user = db.users.find_one({"_id": ObjectId(user_id)})
    if not user:
        return jsonify({"error": "User not found"}), 400

    mood_ids = user.get("mood_ids")
    if not mood_ids:
        return jsonify({"error": "No moods found for user"}), 400

    current_date = datetime.utcnow().date()

    start_of_day = datetime.combine(current_date, datetime.min.time())
    end_of_day = datetime.combine(current_date + timedelta(days=1), datetime.min.time())

    moods = db.moods.find({
        "_id": {"$in": mood_ids},
        "date": {"$gte": start_of_day, "$lt": end_of_day}
    })

    mood_list = [mood for mood in moods]

    for mood in mood_list:
        mood["_id"] = str(mood["_id"])

    return jsonify(mood_list), 200