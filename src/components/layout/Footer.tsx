import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white py-12 px-6 mt-10">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex gap-6">
          <a href="#" className="hover:text-orange-400 transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={new URL('/assets/images/brasil-flag.png', import.meta.url).href}
            alt="Brasil"
            className="w-6 h-6"
          />
          <span className="text-lg font-bold tracking-wide">CaronaFC</span>
        </div>

        <div className="text-sm text-white/50 text-center">
          &copy; {year} CaronaFC. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
