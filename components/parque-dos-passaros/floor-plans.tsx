"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Maximize2, Download } from "lucide-react"
import { motion } from "framer-motion"

export function ParquePassarosFloorPlans() {
  const plans = [
    {
      title: "2 Dormitórios",
      area: "51,61m²",
      features: ["2 Dormitórios", "Sala integrada", "Cozinha", "Banheiro", "Varanda Gourmet", "1 Vaga"],
    },
    {
      title: "2 Dormitórios com Suíte",
      area: "Até 80,16m²",
      features: [
        "1 Suíte + 1 Dormitório",
        "Sala ampla",
        "Cozinha planejada",
        "Banheiro social",
        "Varanda Gourmet",
        "1 Vaga",
      ],
    },
    {
      title: "Garden",
      area: "Até 80,16m²",
      features: ["2 Dormitórios", "Jardim privativo", "Sala integrada", "Cozinha", "Banheiro", "Varanda", "1 Vaga"],
    },
  ]

  return (
    <section id="floor-plans" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Plantas <span className="text-[#c01616]">Inteligentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a planta ideal para sua família. De 51,61m² até 80,16m² com aproveitamento máximo de cada espaço
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all border-2 hover:border-[#c01616]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#c01616]/10 rounded-xl flex items-center justify-center">
                    <Home className="h-6 w-6 text-[#c01616]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{plan.title}</h3>
                    <div className="flex items-center gap-1 text-[#c01616]">
                      <Maximize2 className="h-4 w-4" />
                      <span className="text-sm font-semibold">{plan.area}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-[#c01616] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full gap-2 bg-[#c01616] hover:bg-[#a01212]">
                  <Download className="h-4 w-4" />
                  Baixar Planta
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Material de divulgação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-2xl overflow-hidden"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-10-29_at_14.13.00-H4QaC6yVj2Zd8sqkITXz2lm5AFZLQT.jpeg"
            alt="Material de Divulgação Vista Parque"
            className="w-full h-full object-contain bg-muted"
          />
        </motion.div>
      </div>
    </section>
  )
}
