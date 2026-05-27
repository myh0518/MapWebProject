import { NavLink } from "react-router-dom";
import { MapIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const menus = [
  { label: "홈 (지도)", path: "/", icon: <MapIcon className="w-5 h-5" /> },
  { label: "버스 노선 검색", path: "/bus", icon: <MagnifyingGlassIcon className="w-5 h-5" /> },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* 모바일 오버레이 배경 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* 사이드바 */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-30
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="h-14 flex items-center justify-between px-6 border-b border-gray-700">
          <span className="text-xl font-bold">지도웹</span>
          <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              end
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              {menu.icon}
              <span>{menu.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}