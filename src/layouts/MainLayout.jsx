import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="bg-[#666873] h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
