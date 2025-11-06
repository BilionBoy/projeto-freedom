"use client"

import { Card } from "@/components/ui/card"
import { Home, Bed, Bath, Car, Maximize, Wind } from "lucide-react"
import { motion } from "framer-motion"

export function MaximFeatures() {
  const features = [
    {
      icon: Home,
      title: "2 Dormitórios",
      description: "Opção com ou sem suíte",
    },
    {
      icon: Maximize,
      title: "45m² a 56m²",
      description: "Plantas inteligentes e funcionais",
    },
    {
      icon: Bath,
      title: "Banheiro Completo",
      description: "Acabamento de qualidade",
    },
    {
      icon: Car,
      title: "Vaga de Garagem",
      description: "80% das vagas cobertas",
    },
    {
      icon: Wind,
      title: "Varanda",
      description: "Espaço para relaxar",
    },
    {
      icon: Bed,
      title: "Pronto para Morar",
      description: "Entrega até Dezembro/2025",
    },
  ]

  return (
    <section id="diferenciais" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Características dos <span className="text-[#c01616]">Apartamentos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apartamentos planejados para oferecer máximo conforto e funcionalidade para sua família
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all hover:scale-105 border-2 hover:border-[#c01616]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c01616]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-[#c01616]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
