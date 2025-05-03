import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900">
      <img
        src="/assets/images/logo2.png"
        alt="CaronaFC Logo"
        className="w-32 h-32 rounded-xl mb-4"
      />
      <h1 className="text-6xl font-bold text-neutral-50">404</h1>
      <p className="mt-4 text-xl text-neutral-300">Página não encontrada</p>
      <Link
        to="/"
        className="mt-6 text-yellow-200 font-semibold bg-gradient-to-b from-secondary to-secondary-dark p-4 rounded-xl shadow-lg"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
