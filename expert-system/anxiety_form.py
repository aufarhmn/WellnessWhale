from flask import Flask, request, jsonify

app = Flask(__name__)

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

user_responses = []
current_question_index = 0
anxiety_score = 0
threshold = 0.5

@app.route('/chat', methods=['POST'])
def chat():
    global current_question_index, anxiety_score_score, user_responses
    
    user_input = request.json.get('message')
    
    if user_input.lower() == "stress":
        current_question_index = 0
        user_responses = []
        anxiety_score = 0
        return jsonify({"response": anxiety_questions[current_question_index][0]})
    
    if current_question_index < len(anxiety_questions):
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
        anxiety_score += score * anxiety_questions[current_question_index][1]
        
        current_question_index += 1
        
        if current_question_index < len(anxiety_questions):
            return jsonify({"response": anxiety_questions[current_question_index][0]})
        else:
            # Jika semua pertanyaan telah dijawab, berikan rekomendasi
            if anxiety_score >= threshold:
                return jsonify({"response": "Dari jawaban Anda, sepertinya Anda mungkin mengalami gejala kecemasan. Disarankan untuk menghubungi profesional kesehatan mental."})
            else:
                return jsonify({"response": "Sepertinya Anda tidak menunjukkan banyak gejala kecemasan, tapi tetap jaga kesehatan mental Anda!"})
    else:
        return jsonify({"response": "Terima kasih!"})

if __name__ == '__main__':
    app.run(debug=True)