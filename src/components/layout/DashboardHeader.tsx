import { LogOut } from "lucide-react";
import { useAuth } from "../../services/auth";
import { useNavigate, Link } from "react-router-dom";

export default function DashboardHeader() {
  const { logout, usuario } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-lg w-full fixed top-0 left-0 z-50">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={new URL("/assets/images/logo.png", import.meta.url).href}
          alt="CaronaFC Logo"
          className="w-10 h-10 rounded-lg"
        />
        <span className="text-xl font-bold hidden sm:inline">CaronaFC</span>
      </Link>

      <div className="flex items-center space-x-4">
        {usuario && (
          <div className="flex items-center space-x-2 max-w-[150px] truncate">
            {usuario.imagem ? (
              <img
                src={usuario.imagem}
                alt={usuario.nome_completo}
                className="w-9 h-9 rounded-full border border-gray-600 object-cover"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold uppercase">
                {usuario.nome_completo?.charAt(0) ?? "U"}
              </div>
            )}
            <span className="truncate text-sm sm:text-base font-medium">
              {usuario.nome_completo}
            </span>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 hover:text-red-400 transition duration-300 font-semibold"
        >
          <LogOut className="w-5 h-5" />
          <span className="hidden sm:inline">Sair</span>
        </button>
      </div>
    </nav>
  );
}
