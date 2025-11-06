"use client"

import { motion } from "framer-motion"

export function ImmersiveAmenities() {
  const amenities = [
    {
      title: "Academia Completa",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/academia-eWNhAeP86wLf8IDuogshVC2MGgPPSC.webp",
      description: "Equipamentos modernos para seu treino diário",
    },
    {
      title: "Espaço Gourmet",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/churrasqueira-QdLoYVZW53lJJ9eHgoLBtQdp3yJ9qR.webp",
      description: "Churrasqueira e área de convivência",
    },
    {
      title: "Fitness ao Ar Livre",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ar-livre%20%281%29-Ix4MfXD89iQZfteRapsOUKJhq4fWfV.webp",
      description: "Exercícios com vista panorâmica",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-[#c01616] via-[#a01212] to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white">
              Lazer <span className="text-black">Completo</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
              Mais de 15 itens de lazer pensados para toda a família aproveitar cada momento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={amenity.image || "/placeholder.svg"}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{amenity.title}</h3>
                    <p className="text-white/80 text-sm">{amenity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
