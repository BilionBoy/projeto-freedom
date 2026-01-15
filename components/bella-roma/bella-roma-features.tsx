"use client";

import { Card } from "@/components/ui/card";
import {
  Waves,
  Dumbbell,
  Flame,
  PartyPopper,
  Trees,
  PawPrint,
  Baby,
  Shield,
  Building2,
  Laptop,
} from "lucide-react";
import { motion } from "framer-motion";

export function BellaRomaFeatures() {
  const features = [
    {
      icon: Waves,
      title: "Piscinas",
      description:
        "Piscina adulto com prainha e borda infinita, além de piscina infantil",
    },
    {
      icon: Dumbbell,
      title: "Academias",
      description: "Academia equipada, espaço pilates e academia ao ar livre",
    },
    {
      icon: Flame,
      title: "Quiosque com Churrasqueira",
      description: "Espaço ideal para confraternizações com amigos e família",
    },
    {
      icon: PartyPopper,
      title: "Salão de Festas",
      description: "Ambiente completo para comemorações e eventos",
    },
    {
      icon: Building2,
      title: "Mini Market",
      description: "Comodidade para compras rápidas dentro do condomínio",
    },
    {
      icon: Laptop,
      title: "Coworking",
      description: "Espaço para trabalho e estudos com conforto e praticidade",
    },
    {
      icon: Baby,
      title: "Espaços Infantis",
      description: "Playground e brinquedoteca para a diversão das crianças",
    },
    {
      icon: PawPrint,
      title: "Pet Place",
      description: "Área exclusiva para o lazer do seu pet",
    },
    {
      icon: Trees,
      title: "Lazer ao Ar Livre",
      description: "Solário, miniquadra, sala de TV e áreas de convivência",
    },
  ];

  return (
    <section id="features" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Diferenciais do <span className="text-[#c01616]">Bella Roma</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um condomínio completo, com lazer, conveniência e espaços pensados
            para todas as idades
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all border-2 hover:border-[#c01616]/20 bg-white">
                <div className="w-12 h-12 bg-[#c01616]/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#c01616]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
