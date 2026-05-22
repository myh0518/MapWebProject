export async function fetchBusRoutes(keyword) {
  const res = await fetch(`/api/bus/search?keyword=${encodeURIComponent(keyword)}`);
  const data = await res.json();

  if (data.error) throw new Error(data.error);
  return data.result;
}