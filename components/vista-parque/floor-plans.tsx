"use client";

import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Maximize2, Download, Home } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function VistaParqueFloorPlans() {
  const plans = [
    {
      title: "Planta Tipo",
      subtitle: "Meio com suíte",
      area: "56,02 – 56,22 m²",
      image: "/planta-vista-parque.jpeg",
      file: "/planta-vista-parque.jpeg",
    },
    {
      title: "Planta Garden",
      subtitle: "Meio com suíte",
      area: "80,16 m²",
      image: "/planta-vista-parque-2.jpeg",
      file: "/planta-vista-parque-2.jpeg",
    },
    {
      title: "Planta Garden",
      subtitle: "Canto",
      area: "66,00 m²",
      image: "/planta-vista-parque3.jpeg",
      file: "/planta-vista-parque3.jpeg",
    },
  ];

  return (
    <section id="floor-plans" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Plantas do <span className="text-[#c01616]">Vista Parque</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça as opções disponíveis e escolha a ideal para você
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 hover:border-[#c01616]/30 transition-all h-full">
                {/* Imagem */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={plan.image}
                    alt={`${plan.title} ${plan.subtitle}`}
                    fill
                    className="object-contain bg-white"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-11 h-11 bg-[#c01616]/10 rounded-xl flex items-center justify-center">
                      <Home className="w-5 h-5 text-[#c01616]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">
                        {plan.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.subtitle}
                      </p>
                      <div className="flex items-center gap-1 text-[#c01616] mt-1">
                        <Maximize2 className="h-4 w-4" />
                        <span className="text-sm font-semibold">
                          {plan.area}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Download */}
                  <Button
                    asChild
                    className="w-full gap-2 bg-[#c01616] hover:bg-[#a01212]"
                  >
                    <a href={plan.file} download>
                      <Download className="h-4 w-4" />
                      Baixar Planta
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
