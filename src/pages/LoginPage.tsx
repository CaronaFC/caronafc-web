import { useEffect, useRef, useState } from "react";
import { useAuth } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

export default function LoginPage() {
  const { login, loading, error } = useAuth();
  const [identificador, setIdentificador] = useState("");
  const [senha, setSenha] = useState("");
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (error) {
      setShake(true);
      const timer = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(identificador, senha);
      navigate("/dashboard");
    } catch {
      void 0;
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg w-full fixed top-0 left-0 z-50">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={new URL("/assets/images/logo.png", import.meta.url).href}
            alt="CaronaFC Logo"
            className="w-10 h-10 rounded-lg"
          />
          <span className="text-xl font-bold">CaronaFC</span>
        </Link>
      </nav>

      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${new URL("/assets/images/login-bg.png", import.meta.url).href})`,
          filter: "blur(4px)",
          opacity: 0.15,
        }}
      ></div>

      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl p-8 text-white transform transition duration-300">
        <div className="flex flex-col items-center mb-6">
          <img
            src={new URL("/assets/images/logo.png", import.meta.url).href}
            alt="CaronaFC Logo"
            className="w-16 h-16 rounded-xl mb-2"
          />
          <h2 className="text-3xl font-bold">CaronaFC</h2>
          <p className="text-sm text-gray-300 mt-1">Painel Administrativo</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={clsx("transition duration-300", { "animate-shake": shake })}
        >
          <label className="block mb-2" htmlFor="identificador">
            Email
          </label>
          <input
            id="identificador"
            type="email"
            ref={inputRef}
            value={identificador}
            onChange={(e) => setIdentificador(e.target.value)}
            className={clsx(
              "w-full mb-4 p-2 rounded bg-white/10 text-white border backdrop-blur-sm focus:outline-none transition",
              {
                "border-red-500": error,
                "border-white/20": !error,
              }
            )}
            required
            disabled={loading}
          />

          <label className="block mb-2" htmlFor="senha">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={clsx(
              "w-full mb-4 p-2 rounded bg-white/10 text-white border backdrop-blur-sm focus:outline-none transition",
              {
                "border-red-500": error,
                "border-white/20": !error,
              }
            )}
            required
            disabled={loading}
          />

          {error && (
            <p className="mb-4 text-red-500 font-semibold text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-secondary py-2 rounded text-white font-bold hover:bg-orange-400 transition duration-300 flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                Entrando...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
