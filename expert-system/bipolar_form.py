from flask import Flask, request, jsonify

app = Flask(__name__)

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

user_responses = []
current_question_index = 0
bipolar_score = 0
threshold = 0.5

@app.route('/chat', methods=['POST'])
def chat():
    global current_question_index, bipolar_score_score, user_responses
    
    user_input = request.json.get('message')
    
    if user_input.lower() == "angry":
        current_question_index = 0
        user_responses = []
        bipolar_score = 0
        return jsonify({"response": bipolar_questions[current_question_index][0]})
    
    if current_question_index < len(bipolar_questions):
        # Simpan respon pengguna
        user_responses.append(user_input)
        
        # Jika respon merupakan skala 1-10, konversikan ke persentase
        if current_question_index == 0:
            try:
                score = int(user_input) / 10.0
            except ValueError:
                score = 0
        else:
            # Asumsi jawaban ya atau tidak yang bisa dikonversi ke 1 atau 0
            score = 1 if user_input.lower() in ["ya", "yes", "y"] else 0
        
        # Hitung score
        bipolar_score += score * bipolar_questions[current_question_index][1]
        
        current_question_index += 1
        
        if current_question_index < len(bipolar_questions):
            return jsonify({"response": bipolar_questions[current_question_index][0]})
        else:
            # Jika semua pertanyaan telah dijawab, berikan rekomendasi
            if bipolar_score >= threshold:
                return jsonify({"response": "Dari jawaban Anda, sepertinya Anda mungkin mengalami gejala bipolar. Disarankan untuk menghubungi profesional kesehatan mental."})
            else:
                return jsonify({"response": "Sepertinya Anda tidak menunjukkan banyak gejala bipolar, tapi tetap jaga kesehatan mental Anda!"})
    else:
        return jsonify({"response": "Terima kasih!"})

if __name__ == '__main__':
    app.run(debug=True)
