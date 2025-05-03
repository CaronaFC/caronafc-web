import { motion } from "framer-motion";
import { CalendarDays, Map, AlarmClock } from "lucide-react";

import Container from "../common/Container";

export default function Championships() {
  return (
    <section
      id="championships"
      className="relative py-20 bg-gradient-to-br from-secondary-dark to-blue-950 overflow-hidden rounded-xl m-1"
    >
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-orange-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-400 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 z-0" />

      <Container>
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-white space-y-6"
          >
            <h3 className="text-4xl font-bold drop-shadow-md">
              Tudo sobre os campeonatos brasileiros
            </h3>
            <p className="text-lg opacity-90">
              Com o CaronaFC, você tem acesso completo a todas as informações
              dos jogos: horários, estádios, localização e muito mais. Tudo em
              tempo real.
            </p>

            <ul className="space-y-5">
              <li className="flex items-start">
                <CalendarDays className="text-yellow-300 w-6 h-6 mr-3" />
                <span className="font-medium">
                  Agenda atualizada com todos os jogos.
                </span>
              </li>
              <li className="flex items-start">
                <AlarmClock className="text-yellow-300 w-6 h-6 mr-3" />
                <span className="font-medium">
                  Horários atualizados dos jogos.
                </span>
              </li>
              <li className="flex items-start">
                <Map className="text-yellow-300 w-6 h-6 mr-3" />
                <span className="font-medium">
                  Mapas dos estádios com rota.
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src="/assets/images/brasileirao.webp"
              alt="Campeonato Brasileiro"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
