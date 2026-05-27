import requests

class BusService:
    API_KEY = "APP_KEY"
    BUS_API_URL = "http://apis.data.go.kr/6410000/busrouteservice/v2/getBusRouteListv2"

    #버스 노선 검색시 사용하는 함수
    def search_routes(self, keyword: str) -> list:
        params = {
            "serviceKey": self.API_KEY,
            "keyword": keyword,
            "format": "json",
        }
        #버스 정보 받아옴
        response = requests.get(self.BUS_API_URL, params=params)
        data = response.json()
        result = []
        try:
            buses = data["response"]["msgBody"]["busRouteList"]
            if isinstance(buses, dict):
                buses = [buses]
            #특정 지역의 버스만 가져 올 수 있는 기능(주석 풀고 return result해주면 됨)
            # for i in buses:
            #     if "이천" in i["regionName"].strip().split(","):
            #         result.append(i)
        except (KeyError, TypeError):
            buses = []

        return buses

if __name__ == "__main__":
    a=BusService()
    b = a.search_routes("8")
    print(b)