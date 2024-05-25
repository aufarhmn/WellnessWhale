from flask import Blueprint, jsonify, request
from main import db
from models.mood import Mood
from bson import ObjectId
from middleware.auth import ensure_authenticated
from datetime import datetime, timedelta

expert_systems_bp = Blueprint('expert_systems', __name__, url_prefix='/expert-systems')

anxiety_questions = [
    ("Bagaimana perasaan Anda hari ini? (Skala 1-10)", 0.10),
    ("Apakah Anda memiliki kesulitan tidur atau merasa terlalu lelah?", 0.15),
    ("Apakah Anda merasa sulit untuk menemukan minat atau kesenangan dalam kegiatan sehari-hari?", 0.12),
    ("Apakah Anda merasa kesulitan berkonsentrasi atau memutuskan hal-hal?", 0.12),
    ("Apakah Anda merasa kehilangan nafsu makan atau makan terlalu banyak?", 0.10),
    ("Apakah Anda mengalami perubahan berat badan yang signifikan baru-baru ini?", 0.08),
    ("Apakah Anda merasa terisolasi atau tidak terhubung dengan orang lain?", 0.10),
    ("Apakah Anda mengalami perasaan putus asa, sedih, atau kosong secara berlebihan?", 0.15),
    ("Apakah Anda merasa kurang berharga atau bersalah tanpa alasan yang jelas?", 0.08),
    ("Apakah Anda memiliki pikiran atau dorongan untuk menyakiti diri sendiri atau berpikir tentang kematian?", 0.15),
    ("Apakah ada hal-hal yang membawa sedikit kelegaan atau sukacita dalam hari Anda?", 0.05)
]

bipolar_questions = [
    ("Bagaimana perasaan Anda hari ini? (Skala 1-10)", 0.10),
    ("Apakah Anda mengalami perubahan suasana hati yang tajam atau cepat?", 0.15),
    ("Apakah Anda merasa sangat bersemangat atau hiperaktif (mania)?", 0.15),
    ("Apakah Anda merasa sedih atau kehilangan minat (depresi)?", 0.15),
    ("Apakah Anda mengalami kesulitan tidur atau tidur terlalu banyak?", 0.08),
    ("Apakah Anda memiliki energi yang berlebihan atau merasa kelelahan secara berlebihan?", 0.08),
    ("Apakah Anda mengalami peningkatan dalam aktivitas atau perilaku impulsif?", 0.10),
    ("Apakah Anda mengalami perubahan drastis dalam berpikir atau berbicara?", 0.08),
    ("Apakah Anda merasa sulit untuk berkonsentrasi atau membuat keputusan?", 0.05),
    ("Apakah Anda mengalami perubahan dalam berat badan atau pola makan?", 0.05),
    ("Apakah Anda merasa kehilangan minat atau kesenangan dalam aktivitas yang biasanya Anda nikmati?", 0.05),
    ("Apakah Anda merasa sulit untuk menjaga hubungan interpersonal yang stabil?", 0.06)
]

depression_questions = [
    ("Bagaimana perasaan Anda hari ini? (Skala 1-10)", 0.10),
    ("Apakah Anda memiliki kesulitan tidur atau merasa terlalu lelah?", 0.15),
    ("Apakah Anda merasa sulit untuk menemukan minat atau kesenangan dalam kegiatan sehari-hari?", 0.12),
    ("Apakah Anda merasa kesulitan berkonsentrasi atau memutuskan hal-hal?", 0.12),
    ("Apakah Anda merasa kehilangan nafsu makan atau makan terlalu banyak?", 0.10),
    ("Apakah Anda mengalami perubahan berat badan yang signifikan baru-baru ini?", 0.08),
    ("Apakah Anda merasa terisolasi atau tidak terhubung dengan orang lain?", 0.10),
    ("Apakah Anda mengalami perasaan putus asa, sedih, atau kosong secara berlebihan?", 0.15),
    ("Apakah Anda merasa kurang berharga atau bersalah tanpa alasan yang jelas?", 0.08),
    ("Apakah Anda memiliki pikiran atau dorongan untuk menyakiti diri sendiri atau berpikir tentang kematian?", 0.15),
    ("Apakah ada hal-hal yang membawa sedikit kelegaan atau sukacita dalam hari Anda?", 0.05)
]

threshold = 0.5

@expert_systems_bp.route('/anxiety', methods=['POST'])
@ensure_authenticated
def anxiety():
    data = request.json
    user_id = request.userId
    anxiety_score = 0

    for question, weight in anxiety_questions:
        response = data.get(question, "")
        
        if question == "Bagaimana perasaan Anda hari ini? (Skala 1-10)":
            try:
                score = int(response) / 10.0
            except ValueError:
                score = 0
        else:
            if isinstance(response, str):
                response = response.lower()
            score = 1 if response in ["ya", "yes", "y"] else 0
        
        anxiety_score += score * weight

    user = db.users.find_one({"_id": ObjectId(user_id)})
    if not user:
        return jsonify({"error": "User not found"}), 400
    
    mood_data = {
        "mood": "",
        "date": datetime.now()
    }

    if anxiety_score >= threshold:
       mood_data["mood"] = "Anxiety"
       result_message = "Dari jawaban Anda, sepertinya Anda mungkin mengalami gejala kecemasan. Disarankan untuk menghubungi profesional kesehatan mental."
    else:
       mood_data["mood"] = "Normal"
       result_message = "Sepertinya Anda tidak menunjukkan banyak gejala kecemasan, tapi tetap jaga kesehatan mental Anda!"

    result = db.moods.insert_one(mood_data)

    if result.inserted_id:
        db.users.update_one({"_id": ObjectId(user_id)}, {"$push": {"mood_ids": result.inserted_id}})
        return jsonify({"status": 1 if anxiety_score >= threshold else 0, "response": result_message}), 201
    else:
        return jsonify({"error": "Failed to save mood"}), 500


@expert_systems_bp.route('/bipolar', methods=['POST'])
@ensure_authenticated
def bipolar():
    data = request.json
    user_id = request.userId
    bipolar_score = 0

    for question, weight in bipolar_questions:
        response = data.get(question, "")
        
        if question == "Bagaimana perasaan Anda hari ini? (Skala 1-10)":
            try:
                score = int(response) / 10.0
            except ValueError:
                score = 0
        else:
            if isinstance(response, str):
                response = response.lower()
            score = 1 if response in ["ya", "yes", "y"] else 0
        
        bipolar_score += score * weight

    user = db.users.find_one({"_id": ObjectId(user_id)})
    if not user:
        return jsonify({"error": "User not found"}), 400
    
    mood_data = {
        "mood": "",
        "date": datetime.now()
    }

    if bipolar_score >= threshold:
        mood_data["mood"] = "Bipolar"
        result_message = "Dari jawaban Anda, sepertinya Anda mungkin mengalami gejala bipolar. Disarankan untuk menghubungi profesional kesehatan mental."
    else:
        mood_data["mood"] = "Normal"
        result_message = "Sepertinya Anda tidak menunjukkan banyak gejala bipolar, tapi tetap jaga kesehatan mental Anda!"

    result = db.moods.insert_one(mood_data)

    if result.inserted_id:
        db.users.update_one({"_id": ObjectId(user_id)}, {"$push": {"mood_ids": result.inserted_id}})
        return jsonify({"status": 1 if bipolar_score >= threshold else 0, "response": result_message}), 201
    else:
        return jsonify({"error": "Failed to save mood"}), 500
    

@expert_systems_bp.route('/depresi', methods=['POST'])
@ensure_authenticated
def depression():
    data = request.json
    user_id = request.userId
    depression_score = 0

    for question, weight in depression_questions:
        response = data.get(question, "")
        
        if question == "Bagaimana perasaan Anda hari ini? (Skala 1-10)":
            try:
                score = int(response) / 10.0
            except ValueError:
                score = 0
        else:
            if isinstance(response, str):
                response = response.lower()
            score = 1 if response in ["ya", "yes", "y"] else 0
        
        depression_score += score * weight
    
    user = db.users.find_one({"_id": ObjectId(user_id)})
    if not user:
        return jsonify({"error": "User not found"}), 400
    
    mood_data = {
        "mood": "",
        "date": datetime.now()
    }

    if depression_score >= threshold:
        mood_data["mood"] = "Depression"
        result_message = "Dari jawaban Anda, sepertinya Anda mungkin mengalami gejala depresi. Disarankan untuk menghubungi profesional kesehatan mental."
    else:
        mood_data["mood"] = "Normal"
        result_message = "Sepertinya Anda tidak menunjukkan banyak gejala depresi, tapi tetap jaga kesehatan mental Anda!"

    result = db.moods.insert_one(mood_data)

    if result.inserted_id:
        db.users.update_one({"_id": ObjectId(user_id)}, {"$push": {"mood_ids": result.inserted_id}})
        return jsonify({"status": 1 if depression_score >= threshold else 0, "response": result_message}), 201
    else:
        return jsonify({"error": "Failed to save mood"}), 500