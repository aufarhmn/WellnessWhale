from main import db

class Counselor:
    def __init__(self, counselor_username, counselor_email, counselor_password):
        self.counselor_username = counselor_username
        self.counselor_email = counselor_email
        self.counselor_password = counselor_password

    def CounselorToDict(self):
        return {
            "counselor_username": self.counselor_username,
            "counselor_email": self.counselor_email,
            "counselor_password": self.counselor_password
        }
