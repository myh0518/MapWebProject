export default function BusCard({ bus }) {
  return (
    <li className="border rounded p-3">
      <p className="font-semibold">{bus.routeName}</p>
      <p className="text-sm text-gray-600">{bus.regionName} · {bus.routeTypeName}</p>
    </li>
  );
}