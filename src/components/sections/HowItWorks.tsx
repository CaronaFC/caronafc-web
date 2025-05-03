import { motion } from "framer-motion";
import Container from "../common/Container";
import { User, Calendar, Car, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <User className="w-8 h-8 text-blue-500" />,
      title: "Crie seu perfil",
      description: "Cadastre-se e preencha seus dados.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-yellow-500" />,
      title: "Utilize nossos filtros",
      description:
        "Acesse a lista de viagens e filtre por jogos/cidades/times.",
    },
    {
      icon: <Car className="w-8 h-8 text-green-500" />,
      title: "Encontre caronas próximas",
      description: "Veja motoristas e passageiros com rotas semelhantes.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
      title: "Combine e vá com segurança",
      description: "Converse no app, combine e siga com avaliações reais.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-20 bg-gradient-to-br from-secondary-dark to-blue-950 rounded-2xl m-1 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-orange-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-400 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 z-0" />

      <Container>
        <div className="relative z-10 text-white text-center mb-14">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Como funciona?
          </motion.h2>
          <motion.p
            className="mt-4 text-white/80 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Em poucos passos você se conecta com outros torcedores e vai ao
            estádio com segurança e economia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl text-center text-white border border-white/20 shadow-lg flex flex-col items-center"
            >
              <div className="mb-4">{step.icon}</div>
              <div className="text-2xl font-bold mb-2">Passo {i + 1}</div>
              <h4 className="text-xl font-semibold">{step.title}</h4>
              <p className="mt-2 text-white/80 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
