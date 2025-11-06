"use client"

import { Card } from "@/components/ui/card"
import { Building2, Calendar, MapPin, Award } from "lucide-react"
import { motion } from "framer-motion"

export function MaximAbout() {
  const highlights = [
    {
      icon: Building2,
      title: "Construtora Danpris",
      description: "Qualidade e tradição em cada detalhe",
    },
    {
      icon: Calendar,
      title: "Entrega Dezembro/2025",
      description: "Obras finalizando, quase pronto",
    },
    {
      icon: MapPin,
      title: "Localização Privilegiada",
      description: "Próximo ao Tenda Atacado",
    },
    {
      icon: Award,
      title: "80% Vagas Cobertas",
      description: "Conforto e proteção para seu veículo",
    },
  ]

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            O Maior Clube de Lazer de <span className="text-[#c01616]">Itu</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            O Maxim Home Club une conforto e lazer em um único lugar. Com apartamentos de 2 dormitórios, opção de suíte,
            e uma infraestrutura completa de lazer, este é o empreendimento ideal para quem busca qualidade de vida.
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
              <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow border-2 hover:border-[#c01616]/20">
                <div className="w-16 h-16 bg-[#c01616]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-[#c01616]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#c01616] to-[#a01212] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Apartamento Decorado Disponível</h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Visite o empreendimento e conheça o apartamento decorado. Todas as áreas de lazer já estão prontas para você
            conhecer!
          </p>
          <p className="text-sm text-white/70">
            Agende sua visita com a FREEDOM e conheça pessoalmente este incrível empreendimento
          </p>
        </motion.div>
      </div>
    </section>
  )
}
