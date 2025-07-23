/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import DashboardHeader from "../components/layout/DashboardHeader";
import metricService from "../services/metrics";
import {
  Loader2,
  Users,
  Car,
  Gauge,
  MapPin,
  BarChart3,
  Trophy,
  DollarSign,
  CarFront,
  Bike,
  Car as CarIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const metrics = await metricService.getData();
        setData(metrics);
      } catch (error) {
        console.error("Erro ao carregar métricas", error);
      } finally {
        setLoading(false);
      }
    };

    loadMetrics();
  }, []);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center px-6">
        <Loader2 className="animate-spin text-white w-10 h-10" />
        <p className="text-white mt-3 font-medium text-base tracking-normal">Carregando métricas...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center px-6">
        <p className="text-red-500 font-medium text-base tracking-normal">Falha ao carregar métricas.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center pt-20 px-6 pb-10">
      <DashboardHeader />

      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${new URL("/assets/images/login-bg.png", import.meta.url).href})`,
          filter: "blur(4px)",
          opacity: 0.1,
        }}
      ></div>

      <main className="relative z-10 w-full max-w-6xl space-y-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-white tracking-tight my-12 leading-snug">
          Painel de métricas - CaronaFC
        </h1>

        <section
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          <DashboardCard
            title="Usuários"
            value={data.totalUsuarios}
            icon={<Users className="w-6 h-6" />}
            color="from-indigo-600 to-indigo-400"
          />
          <DashboardCard
            title="Motoristas"
            value={data.totalMotoristas}
            icon={<Car className="w-6 h-6" />}
            color="from-green-600 to-green-400"
          />
          <DashboardCard
            title="Veículos"
            value={data.totalVeiculos}
            icon={<Gauge className="w-6 h-6" />}
            color="from-yellow-600 to-yellow-400"
          />
          <DashboardCard
            title="Viagens"
            value={data.totalViagens}
            icon={<MapPin className="w-6 h-6" />}
            color="from-pink-600 to-pink-400"
          />
          <DashboardCard
            title="Média R$ por pessoa"
            value={`R$ ${data.mediaValorPorPessoa}`}
            icon={<DollarSign className="w-6 h-6" />}
            color="from-red-600 to-red-400"
          />
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl text-white font-semibold mb-5 tracking-wide">
            Viagens por Status
          </h2>
          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
          >
            {Object.entries(data.viagensPorStatus).map(([status, count]) => (
              <DashboardCard
                key={status}
                title={capitalize(status)}
                value={count as string}
                icon={<BarChart3 className="w-5 h-5" />}
                color="from-cyan-600 to-cyan-400"
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl text-white font-semibold mb-5 tracking-wide">
            Top Estádios
          </h2>
          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
          >
            {data.topEstadios.map((item: any, idx: number) => (
              <DashboardCard
                key={`estadio-${idx}`}
                title={item.estadio}
                value={`${item.count} viagens`}
                icon={<Trophy className="w-5 h-5" />}
                color="from-amber-600 to-amber-400"
              />
            ))}
          </div>
        </section>

        <section
          className="grid gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl text-white font-semibold mb-5 tracking-wide">
              Top Marcas de Veículos
            </h2>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
            >
              {data.topMarcasVeiculos.map((item: any, idx: number) => (
                <DashboardCard
                  key={`marca-${idx}`}
                  title={item.marca}
                  value={`${item.count} veículos`}
                  icon={<CarFront className="w-5 h-5" />}
                  color="from-sky-600 to-sky-400"
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl text-white font-semibold mb-5 tracking-wide">
              Top Modelos de Veículos
            </h2>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
            >
              {data.topModelosVeiculos.map((item: any, idx: number) => (
                <DashboardCard
                  key={`modelo-${idx}`}
                  title={item.modelo}
                  value={`${item.count} veículos`}
                  icon={<CarFront className="w-5 h-5" />}
                  color="from-violet-600 to-violet-400"
                />
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl text-white font-semibold mb-5 tracking-wide">
            Tipos de Veículos
          </h2>
          <div
            className="grid gap-4 justify-center"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
          >
            {data.tiposVeiculoCount.map((item: any, idx: number) => (
              <DashboardCard
                key={`tipo-${idx}`}
                title={item.tipo}
                value={`${item.count} veículos`}
                icon={
                  item.tipo.toLowerCase() === "moto" ? (
                    <Bike className="w-5 h-5" />
                  ) : (
                    <CarIcon className="w-5 h-5" />
                  )
                }
                color="from-emerald-600 to-emerald-400"
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl text-white font-semibold mb-5 tracking-wide">
            Viagens nos Últimos 6 Meses
          </h2>
          <div className="bg-white/10 rounded-lg p-5 border border-white/20 max-w-4xl mx-auto">
            <ViagensPorMesChart data={data.viagensPorMes} />
          </div>
        </section>
      </main>
    </div>
  );
}

function DashboardCard({
  title,
  value,
  icon,
  color = "from-indigo-600 to-indigo-400",
  className = "",
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={clsx(
        `bg-gradient-to-tr ${color} text-white rounded-lg p-4 flex flex-col items-center justify-center shadow-md border border-white/15 transition-transform duration-250`,
        className
      )}
    >
      <div className="mb-3 bg-white/20 rounded-full p-3 flex items-center justify-center text-white">
        {icon}
      </div>
      <h3 className="text-base font-medium text-center leading-snug">{title}</h3>
      <p className="text-2xl font-semibold mt-1 text-center leading-tight">{value}</p>
    </motion.div>
  );
}

function ViagensPorMesChart({ data }: { data: Array<{ mes: string; count: string }> }) {
  const maxCount = Math.max(...data.map((d) => parseInt(d.count, 10)));

  return (
    <div className="space-y-2">
      {data.map(({ mes, count }) => {
        const widthPercent = (parseInt(count, 10) / maxCount) * 100;
        return (
          <div key={mes} className="flex items-center gap-3">
            <span className="w-20 text-white font-semibold tracking-wide text-sm">{mes}</span>
            <div className="flex-1 h-6 bg-white/20 rounded-md overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${widthPercent}%` }}
                transition={{ duration: 0.6 }}
                className="h-6 bg-gradient-to-r from-pink-600 to-pink-400 rounded-md"
              />
            </div>
            <span className="w-12 text-white font-semibold text-right tracking-wide text-sm">{count}</span>
          </div>
        );
      })}
    </div>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
