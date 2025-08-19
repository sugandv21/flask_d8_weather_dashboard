from flask import Flask, jsonify
import random
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": [
    "http://localhost:5173",
    "https://YOUR-SITE.netlify.app"
]}})

@app.route("/api/weather", methods=["GET"])
def get_weather():
    weather_status = ["Sunny", "Cloudy", "Rainy", "Windy", "Stormy"]
    return jsonify({
        "temperature": random.randint(20, 40),
        "humidity": random.randint(30, 90),
        "status": random.choice(weather_status)
    })

if __name__ == "__main__":
    app.run(debug=True)
