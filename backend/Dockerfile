FROM python:3.12.3-bullseye

WORKDIR /app

RUN apt-get update && apt-get install -y git && apt-get clean

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

ENV FLASK_APP=main.py
ENV MONGODB_URI='mongodb://admin:YtD0o9aFVJKGaMqf@ac-hzdad5p-shard-00-00.b3wrq0i.mongodb.net:27017,ac-hzdad5p-shard-00-01.b3wrq0i.mongodb.net:27017,ac-hzdad5p-shard-00-02.b3wrq0i.mongodb.net:27017/wellnesswhale?ssl=true&replicaSet=atlas-yld13c-shard-0&authSource=admin&retryWrites=true&w=majority'
ENV MONGODB_DB=wellnesswhale
ENV JWT_SECRET='1nf0k4ng4j1but4'

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]