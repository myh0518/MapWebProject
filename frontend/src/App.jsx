import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import BusSearch from "./pages/BusSearch";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <main className="pt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bus" element={<BusSearch />} />
        </Routes>
      </main>
      <BottomNav />
    </BrowserRouter>
  );
}