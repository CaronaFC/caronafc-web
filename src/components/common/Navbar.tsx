import { useState } from "react";
import {
  Menu,
  X,
  Download,
  User,
  LayoutDashboard,
} from "lucide-react";
import { useAuth } from "../../services/auth";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuItems = [
    { label: "Jogos", href: "#championships" },
    { label: "Benefícios", href: "#features" },
    { label: "Fluxo", href: "#how-it-works" },
  ];

  const handleIconClick = () => {
    navigate(isAuthenticated ? "/dashboard" : "/login");
  };

  return (
    <nav className="bg-gradient-to-t from-black to-gray-900 fixed top-0 left-0 w-full pt-6 pb-4 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <button
          onClick={scrollToTop}
          className="flex items-center text-neutral-50 font-bold text-xl space-x-2 cursor-pointer"
        >
          <img
            src={new URL("/assets/images/logo.png", import.meta.url).href}
            alt="CaronaFC Logo"
            className="w-14 h-14 rounded-xl"
          />
          <span>CaronaFC</span>
        </button>

        <div className="md:hidden">
          <Button onClick={toggleMenu} className="text-neutral-50">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-neutral-50 hover:text-neutral-500 transition duration-300 font-semibold"
            >
              {item.label}
            </a>
          ))}

          <Button className="bg-secondary text-white py-2 px-6 rounded-full hover:bg-orange-400 transition duration-300 font-bold flex items-center gap-2">
            Baixar
            <Download className="ml-2 inline-flex" />
          </Button>

          <button
            onClick={handleIconClick}
            aria-label={isAuthenticated ? "Dashboard" : "Login"}
            className="text-neutral-50 hover:text-orange-400 transition duration-300"
          >
            {isAuthenticated ? (
              <LayoutDashboard className="w-6 h-6" />
            ) : (
              <User className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-20 left-0 w-full bg-black shadow-lg`}
      >
        <div className="flex flex-col items-center py-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-neutral-50 hover:text-neutral-500 transition duration-300 font-semibold py-2"
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-4 bg-secondary text-white py-2 px-6 rounded-full hover:bg-orange-400 transition duration-300 font-bold flex items-center">
            <span>Baixar</span>
            <Download className="ml-2 inline" />
          </Button>
          <button
            onClick={handleIconClick}
            aria-label={isAuthenticated ? "Dashboard" : "Login"}
            className="text-neutral-50 hover:text-orange-400 transition duration-300 mt-4"
          >
            {isAuthenticated ? (
              <LayoutDashboard className="w-6 h-6" />
            ) : (
              <User className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
