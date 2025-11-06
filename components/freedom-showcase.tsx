"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award } from "lucide-react"

export function FreedomShowcase() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-black via-[#1a1a1a] to-black">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c01616]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c01616]/5 rounded-full blur-3xl animate-pulse delay-1000" />
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
              Conheça a <span className="text-[#c01616]">FREEDOM</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto text-pretty leading-relaxed">
              Mais do que uma imobiliária, somos parceiros na realização do seu sonho de liberdade e conquista.
            </p>
          </motion.div>

          {/* 3D Building showcase with stats */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#c01616]/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/implantacao-aU7D0h6clU38ErlpOtG7qEVnBix9VV.webp"
                  alt="Implantação 3D - Bella Verona"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#c01616]/50 transition-all">
                <Building2 className="h-12 w-12 text-[#c01616] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Empreendimentos de Qualidade</h3>
                <p className="text-white/70 leading-relaxed">
                  Projetos cuidadosamente planejados com infraestrutura completa e acabamento premium.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#c01616]/50 transition-all">
                <Users className="h-12 w-12 text-[#c01616] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Atendimento Personalizado</h3>
                <p className="text-white/70 leading-relaxed">
                  Equipe especializada pronta para ajudar você em cada etapa da sua jornada.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#c01616]/50 transition-all">
                <Award className="h-12 w-12 text-[#c01616] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Excelência Reconhecida</h3>
                <p className="text-white/70 leading-relaxed">
                  Anos de experiência no mercado imobiliário com centenas de famílias realizadas.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { number: "500+", label: "Famílias Realizadas" },
              { number: "15+", label: "Anos de Experiência" },
              { number: "20+", label: "Empreendimentos" },
              { number: "98%", label: "Satisfação" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-[#c01616]/20 to-transparent backdrop-blur-sm rounded-xl border border-[#c01616]/30"
              >
                <p className="text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
