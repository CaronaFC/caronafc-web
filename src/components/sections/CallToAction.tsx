import { motion } from "framer-motion";
import Container from "../common/Container";
import { Download } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden rounded-xl m-1">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-xs"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}assets/images/crowd.jpg')`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black/80 w-full h-full z-0"></div>

      <Container>
        <div className="relative z-10 text-white text-center px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Gostou da ideia? Entre nessa viagem!
          </motion.h2>

          <motion.p
            className="mt-4 text-white/80 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Baixe agora o app do CaronaFC e compartilhe caronas com outros
            torcedores rumo à vitória. Segurança, economia e paixão pelo futebol
            em um só lugar.
          </motion.p>

          <motion.a
            href="#"
            className="mt-8 inline-flex items-center gap-2 bg-secondary text-white font-bold text-base md:text-lg py-3 px-6 md:px-8 rounded-full hover:bg-orange-400 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Baixar o App
            <Download className="w-5 h-5" />
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
