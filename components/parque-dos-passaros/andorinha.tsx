"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, Home, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AndorinhaSection() {
  return (
    <section
      id="andorinha"
      className="relative py-24 bg-gradient-to-br from-black via-[#0f0f0f] to-black overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#c01616]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#c01616]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">
            Gran Vic <span className="text-[#c01616]">Andorinha</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Apartamentos com suíte para mais conforto e privacidade
          </p>
        </motion.div>

        {/* Infos + Plantas */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[0, 1].map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#c01616]/40 transition-all"
              >
                {idx === 0 ? (
                  <>
                    <h3 className="font-serif text-2xl font-bold mb-6 text-white">
                      Informações Gerais
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          icon: Building2,
                          label: "Construtora",
                          value: "Vic Engenharia",
                        },
                        {
                          icon: MapPin,
                          label: "Localização",
                          value:
                            "Bairro Bom Sucesso",
                        },
                        {
                          icon: Calendar,
                          label: "Lançamento",
                          value: "Outubro/2024",
                        },
                        {
                          icon: Calendar,
                          label: "Previsão de Entrega",
                          value: "Dezembro/2027",
                        },
                        { icon: Home, label: "Status", value: "Em obras" },
                      ].map((item) => (
                        <div key={item.label} className="flex gap-3">
                          <item.icon className="w-5 h-5 text-[#c01616] mt-1" />
                          <div>
                            <p className="font-semibold text-white">
                              {item.label}
                            </p>
                            <p className="text-white/70">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="font-serif text-2xl font-bold mb-6 text-white">
                      Plantas Disponíveis
                    </h3>
                    <div className="space-y-4 mb-6">
                      {["51,42 m²", "55,15 m²"].map((size) => (
                        <div
                          key={size}
                          className="border-l-4 border-[#c01616] pl-4"
                        >
                          <p className="font-semibold text-lg text-white">
                            2 Quartos com Suíte
                          </p>
                          <p className="text-white/70">{size}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#c01616]/10 rounded-lg p-6">
                      <p className="text-sm font-semibold mb-2 text-white">
                        Valores a partir de:
                      </p>
                      <p className="text-3xl font-bold text-[#c01616] mb-2">
                        R$ 340.000
                      </p>
                      <p className="text-sm text-white/70">
                        Entrada a partir de R$ 500,00
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Lazer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-16"
          >
            <h3 className="font-serif text-2xl font-bold mb-6 text-white">
              Área de Lazer Completa
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Piscina",
                "Academia",
                "Espaço Fitness",
                "Quadra Esportiva",
                "Playground",
                "Espaço Gourmet",
                "Salão de Festas",
                "Sauna",
                "Pet Place",
                "Praça do Luau",
                "Redário",
                "Espaço Piquenique",
                "Horta",
                "Bicicletário",
                "Área de Jogos ao Ar Livre",
                "Mercadinho (preparação)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c01616]" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tour */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h3 className="font-serif text-3xl font-bold mb-8 text-center text-white">
            Tour Virtual –{" "}
            <span className="text-[#c01616]">Andorinha </span>
          </h3>
          <div className="bg-black rounded-xl overflow-hidden border border-white/10">
            <div className="aspect-video">
              <iframe
                src="https://vicengenharia.com.br/tour-virtual/andorinha/"
                className="w-full h-full"
                allowFullScreen
                title="Tour Virtual Gran Vic Andorinha "
              />
            </div>
            <div className="p-6 text-center">
              <p className="text-white/70 mb-4">
                Conheça os detalhes do Gran Vic Andorinha em nosso tour
                virtual 360°
              </p>
              <Button
                asChild
                className="bg-[#c01616] hover:bg-[#a01414] text-white"
              >
                <a
                  href="https://vicengenharia.com.br/empreendimentos/gran-vic-andorinha/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Mais Detalhes
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Galeria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h3 className="font-serif text-3xl font-bold mb-8 text-center text-white">
            Galeria de Fotos –{" "}
            <span className="text-[#c01616]">Andorinha</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/uploads-20-2813-29.jpeg",
              "/uploads-20-2812-29.jpeg",
              "/uploads-20-2816-29.jpeg",
              "/uploads-20-2814-29.jpeg",
              "/uploads-20-2817-29.jpeg",
              "/uploads-20-2815-29.jpeg",
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group border border-white/10"
              >
                <Image
                  src={src}
                  alt="Gran Vic Andorinha"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
