from flask import Flask 
from pymongo import MongoClient
import os 

app = Flask(__name__) 

from dotenv import load_dotenv
load_dotenv()

if os.getenv('MONGODB_URI') is None:
    raise ValueError("MongoDB is not properly configured!")

mongoClient = MongoClient(os.getenv('MONGODB_URI'), serverSelectionTimeoutMS=5000)
try:
    if mongoClient.server_info():
        print('SUCCESS: MongoDB is connected!')
    else:
        print('ERROR: MongoDB is NOT connected!')
except Exception:
    print('ERROR: MongoDB is NOT connected!')

@app.route('/')
def index():
    return "Hello from Wellnes Whale!"

if __name__ == "__main__":
    app.run(debug=True)