from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_KEY = "service_key"
BUS_API_URL = "http://apis.data.go.kr/6410000/busrouteservice/v2/getBusRouteListv2?format=json"

@app.route("/api/bus/search", methods=["GET"])
def search_bus():
    keyword = request.args.get("keyword", "")

    if not keyword:
        return jsonify({"error": "검색어를 입력해주세요."}), 400

    params = {
        "serviceKey": API_KEY,
        "keyword": keyword,
        "format": "json",
    }

    response = requests.get(BUS_API_URL, params=params)

    print("STATUS:", response.status_code)
    print("RESPONSE TEXT:", response.text[:500])  # 앞 500자만

    data = response.json()

    # 버스 노선 리스트 추출
    try:
        buses = data["response"]["msgBody"]["busRouteList"]
        # 단일 결과일 때 dict로 오는 경우 처리
        if isinstance(buses, dict):
            buses = [buses]
    except (KeyError, TypeError):
        buses = []

    return jsonify({"result": buses})


if __name__ == "__main__":
    app.run(debug=True, port=5000)