"use client"

import { Card } from "@/components/ui/card"
import { Building2, MapPin, Award, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function ParquePassarosAbout() {
  const highlights = [
    {
      icon: Building2,
      title: "Duas Torres Modernas",
      description: "2 elevadores por torre para maior comodidade e agilidade no seu dia a dia",
    },
    {
      icon: Sparkles,
      title: "Plantas Inteligentes",
      description: "De 51,61m² até 80,16m² com aproveitamento máximo de cada espaço",
    },
    {
      icon: MapPin,
      title: "Localização Privilegiada",
      description: "Central Parque em Salto/SP, próximo a tudo que você precisa",
    },
    {
      icon: Award,
      title: "Construtora Rio Branco",
      description: "Tradição e qualidade reconhecidas no mercado imobiliário",
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
        
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#c01616]/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-[#c01616]" />
            <span className="text-sm font-medium text-[#c01616]">BREVE LANÇAMENTO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Bairro <span className="text-[#c01616]">Parque dos Pássaros</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Um bairro onde termos os maiores empreendimentos..
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all border-2 hover:border-[#c01616]/20">
                <div className="w-12 h-12 bg-[#c01616]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-[#c01616]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="relative h-96 rounded-2xl overflow-hidden group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p52_787-4p1LKmosZ2siqqzs0fIYiXR84nplQS.jpeg"
              alt="Apartamento Decorado Parque dos Pássaros"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-2xl font-bold">Apartamento Decorado</p>
              <p className="text-sm text-white/80">Ambientes integrados e modernos</p>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p27_918-rPTLTEAcFDhYC1nimsAMPNL1IxDyvl.jpeg"
              alt="Salão de Festas Parque dos Pássaros"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-2xl font-bold">Salão de Festas</p>
              <p className="text-sm text-white/80">Espaço gourmet completo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
