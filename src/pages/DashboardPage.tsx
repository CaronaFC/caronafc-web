import DashboardHeader from "../components/layout/DashboardHeader";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 flex flex-col items-center justify-center text-center">
      <DashboardHeader />

      <main>
        <h1 className="text-4xl font-bold mb-4">🚧 Em construção 🚧</h1>
        <p className="text-lg max-w-lg">
          Esta página ainda está em desenvolvimento. Volte em breve para novidades!
        </p>
      </main>
    </div>
  );
}
