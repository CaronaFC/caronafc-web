import { motion } from "framer-motion";
import { MapPin, Eye, Smartphone } from "lucide-react";

import Container from "../common/Container";

export default function LiveLocation() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-950 to-secondary-dark overflow-hidden rounded-2xl m-1">
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 z-0" />

      <Container>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl"
          >
            <video
              src={new URL('/assets/videos/gps.mp4', import.meta.url).href}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6 text-white"
          >
            <h3 className="text-4xl font-bold leading-tight drop-shadow-md">
              Localização em Tempo Real
            </h3>
            <p className="text-lg opacity-90">
              Com o CaronaFC, você acompanha o trajeto dos motoristas em tempo
              real para garantir encontros rápidos e seguros nos dias de jogo.
            </p>

            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="text-yellow-300 w-6 h-6 mr-3" />
                <span className="font-medium">
                  Veja no mapa onde estão motoristas e passageiros próximos.
                </span>
              </li>
              <li className="flex items-start">
                <Eye className="text-yellow-300 w-6 h-6 mr-3" />
                <span className="font-medium">
                  Acompanhe em tempo real a aproximação do motorista.
                </span>
              </li>
              <li className="flex items-start">
                <Smartphone className="text-yellow-300 w-6 h-6 mr-3" />
                <span className="font-medium">
                  Receba notificações e status direto no celular.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
