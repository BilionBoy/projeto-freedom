"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, Home, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TangaraSection() {
  return (
    <section
      id="tangara"
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
          <span className="inline-block bg-[#c01616]/20 border border-[#c01616]/40 text-[#c01616] text-sm font-semibold px-5 py-2 rounded-full mb-6">
            Pré-lançamento
          </span>

          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">
            Gran Vic <span className="text-[#c01616]">Tangará</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            O mais novo empreendimento do Parque dos Pássaros
          </p>
        </motion.div>

        {/* Imagem Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/tangara-fachada.jpeg"
              alt="Fachada Gran Vic Tangará"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-serif text-3xl font-bold mb-1">
                Gran Vic Tangará
              </h3>
              <p className="text-white/70">Parque dos Pássaros · Bom Sucesso</p>
            </div>
          </div>
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
                          value: "Outubro/2025",
                        },
                        {
                          icon: Calendar,
                          label: "Entrega",
                          value: "1º Semestre/2029",
                        },
                        {
                          icon: Home,
                          label: "Unidades",
                          value: "312 apartamentos",
                        },
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
                      {["47,22 m²", "55,15 m²"].map((size) => (
                        <div
                          key={size}
                          className="border-l-4 border-[#c01616] pl-4"
                        >
                          <p className="font-semibold text-lg text-white">
                            2 Quartos
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
                        R$ 279.000
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

          {/* Diferenciais */}
          {[
            {
              title: "Área de Lazer Completa",
              items: [
                "Piscina",
                "Academia",
                "Espaço Fitness",
                "Quadra Esportiva",
                "Playground",
                "Espaço Gourmet",
                "Salão de Festas",
                "Solarium",
                "Pet Place",
                "Área de Jogos",
                "Horta",
                "Bicicletário",
                "Mercadinho (preparação)",
              ],
            },
            {
              title: "Diferenciais dos Apartamentos",
              items: [
                "Piso laminado na sala e quartos",
                "Cerâmica nas áreas molhadas",
                "Tomada USB na sala",
                "Janelas em veneziana",
                "Bancada em granito com cuba inox",
                "Preparação para ar-condicionado",
              ],
            },
          ].map((block) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-12"
            >
              <h3 className="font-serif text-2xl font-bold mb-6 text-white">
                {block.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {block.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616]" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#c01616] to-[#a01414] rounded-xl p-10 text-center text-white shadow-2xl">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Decorado Disponível
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Venha conhecer o apartamento decorado do Gran Vic Tangará.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#c01616] hover:bg-gray-100"
              asChild
            >
              <a href="#contato">Agendar Visita ao Decorado</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
