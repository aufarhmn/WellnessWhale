import os
import jwt

from flask import request, jsonify
from functools import wraps

def ensure_authenticated(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        token = request.cookies.get('Auth')
        
        if not token:
            return jsonify({"message": "Missing authentication token!"}), 401

        try:
            decoded_token = jwt.decode(token, os.getenv('JWT_SECRET'), algorithms=['HS256'])
            user_id = decoded_token.get('userId')

            request.userId = user_id

            return func(*args, **kwargs)

        except jwt.ExpiredSignatureError:
            return jsonify({"message": "Token expired!"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"message": "Invalid token!"}), 401

    return wrapper