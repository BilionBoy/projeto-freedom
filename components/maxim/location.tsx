"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Store, School, Hospital, ShoppingBag, Bus } from "lucide-react"
import { motion } from "framer-motion"

export function MaximLocation() {
  const nearby = [
    { icon: Store, name: "Tenda Atacado", distance: "Próximo" },
    { icon: ShoppingBag, name: "Comércio Local", distance: "500m" },
    { icon: School, name: "Escolas", distance: "1km" },
    { icon: Hospital, name: "Hospital", distance: "2km" },
    { icon: Bus, name: "Transporte Público", distance: "300m" },
  ]

  return (
    <section id="location" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#c01616]/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4 text-[#c01616]" />
            <span className="text-sm font-medium text-[#c01616]">LOCALIZAÇÃO PRIVILEGIADA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Itu/SP - Bairro <span className="text-[#c01616]">Nossa Senhora Aparecida</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Localização estratégica com fácil acesso a tudo que você precisa no dia a dia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Pontos de Interesse Próximos</h3>
            {nearby.map((item, index) => (
              <Card key={item.name} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#c01616]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-[#c01616]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.distance}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden h-[400px] lg:h-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8!2d-47.3!3d-23.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzM2LjAiUyA0N8KwMTgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Maxim Home Club"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
