import { motion } from 'framer-motion';
import { Users, ShieldCheck, Sparkles } from 'lucide-react';

import Container from '../common/Container';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    title: 'Segurança Verificada',
    description:
      'Perfis autenticados, avaliações reais e histórico de caronas para sua tranquilidade.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
    title: 'Conexão Inteligente',
    description:
      'Encontre caronas usando filtros personalizados com base em local, time e preferência.',
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    title: 'Interação com a Torcida',
    description:
      'Conecte-se com pessoas próximas que torcem para o mesmo time e compartilham rotas.',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-20 bg-gradient-to-br from-blue-950 to-secondary-dark overflow-hidden rounded-xl m-1 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/videos/city.gif')" }}
    >
      <div className="absolute top-0 left-0 w-[20rem] h-[20rem] bg-orange-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-orange-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0" />

      <Container>
        <div className="relative z-10 text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Por que usar o CaronaFC?</h2>
          <p className="mt-4 text-gray-200 text-lg">
            Conecte segurança, praticidade e paixão pelo futebol em uma só jornada.
          </p>
        </div>

        <div className="relative z-10 grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-white mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
