"use client";

import { Card } from "../../components/ui/card";
import {
  Waves,
  Eye,
  Dumbbell,
  Baby,
  Dog,
  TreePine,
  PartyPopper,
  Gamepad2,
  Lollipop,
  Armchair,
} from "lucide-react";
import { motion } from "framer-motion";

export function VistaParqueAmenities() {
  const rooftopAmenities = [
    {
      icon: Eye,
      title: "Vista Panorâmica",
      description: "Lazer no rooftop com vista privilegiada da região",
    },
    {
      icon: PartyPopper,
      title: "Salão de Festas",
      description: "Espaço gourmet completo para suas celebrações",
    },
    {
      icon: Gamepad2,
      title: "Salão de Jogos",
      description: "Área de entretenimento para todas as idades",
    },
    {
      icon: Baby,
      title: "Brinquedoteca",
      description: "Espaço lúdico e seguro para as crianças",
    },
  ];

  const groundAmenities = [
    {
      icon: Waves,
      title: "Piscina",
      description: "Piscina adulto e infantil para toda família",
    },
    {
      icon: Lollipop,
      title: "Playground",
      description: "Brinquedos modernos e área verde",
    },
    {
      icon: Dumbbell,
      title: "Quadra Poliesportiva",
      description: "Espaço para prática de esportes",
    },
    {
      icon: Dog,
      title: "Espaço Pet",
      description: "Área exclusiva para seu pet",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lazer <span className="text-[#c01616]">Completo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            aqui alterar a frase: O grande destaque é o lazer no rooftop com
            vista panorâmica, além das demais áreas de lazer no térreo{" "}
          </p>
        </motion.div>

        {/* Rooftop Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#c01616] rounded-xl flex items-center justify-center">
              <Armchair className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Lazer no Rooftop</h3>
              <p className="text-sm text-muted-foreground">
                Vista panorâmica privilegiada
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {rooftopAmenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all border-2 hover:border-[#c01616]/20">
                  <div className="w-10 h-10 bg-[#c01616]/10 rounded-lg flex items-center justify-center mb-3">
                    <amenity.icon className="h-5 w-5 text-[#c01616]" />
                  </div>
                  <h4 className="font-bold mb-1">{amenity.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {amenity.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p34_907-e0SPjcgWZY3BfXAPLI2JhFD7qqbHSO.jpeg"
              alt="Implantação Vista Parque"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-2xl font-bold">Implantação Completa</p>
              <p className="text-sm text-white/80">
                Visão geral do empreendimento
              </p>
            </div>
          </motion.div>
        </div>

        {/* Ground Level Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#c01616] rounded-xl flex items-center justify-center">
              <TreePine className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Lazer no Térreo</h3>
              <p className="text-sm text-muted-foreground">
                Diversão para toda a família
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {groundAmenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all border-2 hover:border-[#c01616]/20">
                  <div className="w-10 h-10 bg-[#c01616]/10 rounded-lg flex items-center justify-center mb-3">
                    <amenity.icon className="h-5 w-5 text-[#c01616]" />
                  </div>
                  <h4 className="font-bold mb-1">{amenity.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {amenity.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-2xl overflow-hidden"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p20_970-kicIG62uq6cwtTbwuJe9YJRfddcrNS.jpeg"
                alt="Playground Vista Parque"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xl font-bold">Playground</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-2xl overflow-hidden"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p8_1020-tCK7zdj0TDfzIxNUdinaL9DehZl9Uw.jpeg"
                alt="Pet Place Vista Parque"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xl font-bold">Espaço Pet</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
