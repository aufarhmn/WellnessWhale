from main import db

class Chat:
    def __init__(self, messages):
        self.messages = messages

    def ChatToDict(self):
        return {
            "messages": self.messages
        }

class Session:
    def __init__(self, session_name, session_date, session_chat):
        self.session_name = session_name
        self.session_date = session_date
        self.session_chat = session_chat

    def SessionToDict(self):
        return {
            "session_name": self.session_name,
            "session_date": self.session_date,
            "session_chat": self.session_chat.ChatToDict() if self.session_chat else None
        }
