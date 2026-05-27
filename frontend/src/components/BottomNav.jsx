import { NavLink } from "react-router-dom";
import { MapIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const menus = [
  { label: "홈", path: "/", icon: <MapIcon className="w-6 h-6" /> },
  { label: "노선검색", path: "/bus", icon: <MagnifyingGlassIcon className="w-6 h-6" /> },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-gray-900 border-t border-gray-700 flex md:hidden z-10">
      {menus.map((menu) => (
        <NavLink
          key={menu.path}
          to={menu.path}
          end
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center gap-1 text-xs transition-colors ${
              isActive ? "text-blue-400" : "text-gray-400 hover:text-white"
            }`
          }
        >
          {menu.icon}
          <span>{menu.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}