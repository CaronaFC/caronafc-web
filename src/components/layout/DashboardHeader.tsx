import { LogOut } from "lucide-react";
import { useAuth } from "../../services/auth";
import { useNavigate, Link } from "react-router-dom";

export default function DashboardHeader() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg w-full fixed top-0 left-0 z-50">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={new URL("/assets/images/logo.png", import.meta.url).href}
          alt="CaronaFC Logo"
          className="w-10 h-10 rounded-lg"
        />
        <span className="text-xl font-bold">CaronaFC</span>
      </Link>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 hover:text-red-400 transition duration-300 font-semibold"
      >
        <LogOut className="w-5 h-5" />
        Sair
      </button>
    </nav>
  );
}
