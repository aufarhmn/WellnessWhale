from main import db

class Mood:
    def __init__(self, mood, date):
        self.mood = mood
        self.date = date

    def MoodToDict(self):
        return {
            "mood": self.mood,
            "date": self.date,
        }
