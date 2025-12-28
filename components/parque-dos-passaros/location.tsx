"use client";

import { Card } from "@/components/ui/card";
import {
  MapPin,
  School,
  ShoppingCart,
  Hospital,
  Bus,
  Coffee,
} from "lucide-react";
import { motion } from "framer-motion";

export function ParquePassarosLocation() {
  const nearby = [
    { icon: School, label: "Escolas", distance: "500m" },
    { icon: ShoppingCart, label: "Supermercados", distance: "800m" },
    { icon: Hospital, label: "Hospital", distance: "1.2km" },
    { icon: Bus, label: "Transporte", distance: "300m" },
    { icon: Coffee, label: "Comércio", distance: "400m" },
  ];

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
            <span className="text-sm font-medium text-[#c01616]">
              LOCALIZAÇÃO PRIVILEGIADA
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Central Parque - <span className="text-[#c01616]">Salto/SP</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Endereço: Central Parque | Salto/SP
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Próximo a Tudo</h3>
              <div className="space-y-4">
                {nearby.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-4 bg-muted rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#c01616]/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-[#c01616]" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.distance}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-auto rounded-2xl overflow-hidden"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p7_1015-85bRRmcZj3jJYIlqhUUyUNDPwZABUH.jpeg"
              alt="Localização Parque dos Passaros"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-2xl font-bold">Vista Aérea da Região</p>
              <p className="text-sm text-white/80">Central Parque - Salto/SP</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
