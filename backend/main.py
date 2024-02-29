from flask import Flask 
from mongoengine import connect
import os 

app = Flask(__name__) 

from dotenv import load_dotenv
load_dotenv()

if os.getenv('MONGODB_URI') is None or os.getenv('MONGODB_DB') is None:
    raise ValueError("MongoDB is not properly configured!")

app.config['MONGODB_SETTINGS'] = {
    'db': os.getenv('MONGODB_DB'),
    'host': os.getenv('MONGODB_URI'),
}
connect(**app.config['MONGODB_SETTINGS'])

@app.route('/')
def index():
    return "Hello from Wellnes Whale!"

if __name__ == "__main__":
    app.run(debug=True)