"use client"

import { Card } from "@/components/ui/card"
import { Home, Maximize2, Wind, Sun, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function ParquePassarosFeatures() {
  const features = [
    {
      icon: Home,
      title: "2 Dormitórios",
      description: "Com ou sem suíte, você escolhe a planta ideal para sua família",
    },
    {
      icon: Maximize2,
      title: "Varanda Gourmet",
      description: "Espaço perfeito para receber amigos e família com conforto",
    },
    {
      icon: Wind,
      title: "Ventilação Natural",
      description: "Projeto arquitetônico que privilegia iluminação e ventilação",
    },
    {
      icon: Sun,
      title: "3 Opções Garden",
      description: "Apartamentos térreos com jardim privativo exclusivo",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Portaria 24h, câmeras de segurança e controle de acesso",
    },
    {
      icon: Zap,
      title: "Infraestrutura Completa",
      description: "Preparação para ar-condicionado e aquecedor solar",
    },
  ]

  return (
    <section id="features" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Diferenciais do <span className="text-[#c01616]">Vista Parque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada detalhe foi pensado para proporcionar conforto, praticidade e qualidade de vida para você e sua família
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
              <Card className="p-6 h-full hover:shadow-lg transition-all border-2 hover:border-[#c01616]/20 bg-white">
                <div className="w-12 h-12 bg-[#c01616]/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#c01616]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
