from flask import Flask, jsonify, request
from flask_cors import CORS
from services.bus_service import BusService

app = Flask(__name__)
CORS(app)

#버스 노선을 불러오는 클래스
bus_service = BusService()

#버스 노선 검색시에 사용하는 라우트
@app.route("/api/bus/search", methods=["GET"])
def search_bus():
    keyword = request.args.get("keyword", "")
    if not keyword:
        return jsonify({"error": "검색어를 입력해주세요."}), 400

    buses = bus_service.search_routes(keyword)
    return jsonify({"result": buses})


if __name__ == "__main__":
    app.run(debug=True, port=5000)