from main import db

class User:
    def __init__(self, username, email, password, mood_ids=None):
        self.username = username
        self.email = email
        self.password = password
        self.mood_ids = mood_ids if mood_ids else []

    def UserToDict(self):
        return {
            "username": self.username,
            "email": self.email,
            "password": self.password,
            "mood_ids": self.mood_ids
        }
