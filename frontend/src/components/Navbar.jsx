import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

const menus = [
  { label: "홈", path: "/" },
  { label: "버스 노선 검색", path: "/bus" },
];

export default function Navbar({ onMenuClick }) {
  return (
    <header className="h-14 bg-gray-900 border-b border-gray-700 flex items-center px-4 fixed top-0 left-0 right-0 md:left-64 z-10">
      {/* 모바일 햄버거 버튼 */}
      <div className="flex items-center gap-3 md:hidden">
        <button onClick={onMenuClick} className="text-gray-400 hover:text-white">
          <Bars3Icon className="w-6 h-6" />
        </button>
        <span className="text-white font-bold text-lg">지도웹</span>
      </div>
        
      {/* 데스크탑 메뉴 */}
      <nav className="hidden md:flex gap-2">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            end
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            {menu.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}