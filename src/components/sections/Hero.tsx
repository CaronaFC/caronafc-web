import { motion } from "framer-motion";
import { Trophy, Download, CarFront } from "lucide-react";

import Button from "../common/Button";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden rounded-xl m-1">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 blur-xs"
       style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}assets/videos/hero.gif')`,
        }}
      ></div>

      <div className="absolute inset-0 bg-[#0b0b0b98] w-full h-full"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-center flex items-center flex-col text-white z-10 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Sua carona para a vitória!
            </h2>
            <div className="flex items-center justify-center">
              <Trophy className="text-yellow-400 w-6 h-6 md:w-8 md:h-8" />
              <CarFront className="ml-2 text-white w-6 h-6 md:w-8 md:h-8" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg font-semibold max-w-xl"
          >
            Conecte-se com outros torcedores e compartilhe corridas para os
            estádios com segurança e economia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button className="mt-8 flex items-center justify-center gap-2 text-white bg-secondary text-base md:text-lg py-3 px-6 md:px-8 rounded-full hover:bg-orange-400 transition duration-300 font-bold">
              Baixe agora nosso APP
              <Download className="inline-block w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
