import { useState } from "react";
import BusCard from "../components/BusCard";
import { fetchBusRoutes } from "../api/busApi";

export default function BusSearch() {
  const [keyword, setKeyword] = useState("");
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!keyword.trim()) return;
    setLoading(true);
    setError("");

    try {
      const result = await fetchBusRoutes(keyword);
      setBuses(result);
    } catch (e) {
      setError(e.message);
      setBuses([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">노선 검색 페이지</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="노선번호 입력 (예: 1001)"
          className="border rounded px-3 py-2 flex-1"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          검색
        </button>
      </div>

      {loading && <p className="text-gray-500">검색 중...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-2">
        {buses.map((bus, i) => (
          <BusCard key={i} bus={bus} />
        ))}
        {!loading && buses.length === 0 && !error && (
          <p className="text-gray-400">검색 결과가 없습니다.</p>
        )}
      </ul>
    </div>
  );
}