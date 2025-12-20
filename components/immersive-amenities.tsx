"use client";

import { motion } from "framer-motion";

export function ImmersiveAmenities() {
  const amenities = [
    {
      title: "Academia Completa",
      image: "/bella-roma-academia.jpeg",
      description: "Equipamentos modernos para seu treino diário",
    },
    {
      title: "Fitness ao Ar Livre",
      image: "/bella-roma-ar-livre.jpeg",
      description: "Exercícios ao ar livre com mais qualidade de vida",
    },
    {
      title: "Salão de Festas",
      image: "/bella-roma-salao-festas.jpeg",
      description: "Espaço ideal para comemorar momentos especiais",
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c01616]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c01616]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white">
              Lazer <span className="text-[#c01616]">Completo</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Ambientes planejados para elevar sua qualidade de vida todos os dias.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
              >
                <div className="relative aspect-[4/3] flex items-center justify-center bg-black">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="
                      max-w-full max-h-full
                      object-contain
                      p-6
                      transition-transform duration-700
                      group-hover:scale-[1.03]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
