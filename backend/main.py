# IMPORTING LIBRARIES
import os

from flask import Flask 
from pymongo import MongoClient
from flask_cors import CORS

# FLASK APP
app = Flask(__name__) 
CORS(app)

# MONGODB CONNECTION
from dotenv import load_dotenv
load_dotenv()

if os.getenv('MONGODB_URI') is None:
    raise ValueError("MongoDB is not properly configured!")

mongoClient = MongoClient(os.getenv('MONGODB_URI'), serverSelectionTimeoutMS=5000)
db = mongoClient[os.getenv('MONGODB_DB')]
try:
    if mongoClient.server_info():
        print('SUCCESS: MongoDB is connected!')
    else:
        print('ERROR: MongoDB is NOT connected!')
except Exception:
    print('ERROR: MongoDB is NOT connected!')

# BLUEPRINTS ROUTES
from blueprints.user_blueprint import user_bp
from blueprints.mood_blueprint import mood_bp
from blueprints.counselor_blueprint import counselor_bp
app.register_blueprint(user_bp)
app.register_blueprint(mood_bp)
app.register_blueprint(counselor_bp)

# DEFAULT ROUTES
@app.route('/')
def index():
    return "Hello from Wellnes Whale!"

# RUN APP
if __name__ == "__main__":
    app.run(debug=True)
