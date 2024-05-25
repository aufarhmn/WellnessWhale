from main import db

class Mood:
    def __init__(self, mood, keluhan, fisik, aktivitas_terakhir, date):
        self.mood = mood
        self.keluhan = keluhan
        self.fisik = fisik
        self.aktivitas_terakhir = aktivitas_terakhir
        self.date = date

    def MoodToDict(self):
        return {
            "mood": self.mood,
            "keluhan": self.keluhan,
            "fisik": self.fisik,
            "aktivitas_terakhir": self.aktivitas_terakhir,
            "date": self.date,
        }
