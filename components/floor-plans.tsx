"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function FloorPlans() {
  const floorPlans = [
    {
      title: "Planta Tipo 1",
      subtitle: "46,86 m² • 1 Dorm + 1 Suíte • Varanda",
      image: "/bella-roma-planta1.jpeg",
      download: "/bella-roma-planta1.jpeg",
      features: [
        "46,86 m²",
        "1 dormitório + 1 suíte",
        "Sala de estar e jantar integradas",
        "Cozinha funcional",
        "Varanda",
      ],
    },
    {
      title: "Planta Tipo 2",
      subtitle: "44,76 m² • 1 Dorm + 1 Suíte + varanda",
      image: "/bella-roma-planta2.jpeg",
      download: "/bella-roma-planta2.jpeg",
      features: [
        "44,76 m²",
        "1 dormitório + 1 suíte",
        "Layout inteligente",
        "Sala integrada",
        "Cozinha otimizada",
      ],
    },
    {
      title: "Planta Tipo 3",
      subtitle: "40,56 m² / 40,98 m² • 2 Dorms • Varanda",
      image: "/bella-roma-planta3.jpeg",
      download: "/bella-roma-planta3.jpeg",
      features: [
        "40,56 m² / 40,98 m²",
        "2 dormitórios",
        "Sala de estar integrada",
        "Cozinha prática",
        "Varanda",
      ],
    },
    {
      title: "Planta Tipo 4",
      subtitle: "40,73 m² • 2 Dorms • Varanda",
      image: "/bella-roma-planta4.jpeg",
      download: "/bella-roma-planta4.jpeg",
      features: [
        "40,73 m²",
        "2 dormitórios",
        "Sala de estar integrada",
        "Cozinha prática",
        "Varanda",
      ],
    },
  ];

  return (
    <section id="floor-plans" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
              Plantas <span className="text-[#c01616]">Disponíveis</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Opções inteligentes e funcionais pensadas para o seu estilo de
              vida.
            </p>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {floorPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-black/60 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                {/* Image */}
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-[#c01616] mb-4">{plan.subtitle}</p>

                  <ul className="space-y-2 mb-6 text-sm text-white/70">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full gap-2 bg-[#c01616] hover:bg-[#a01414] text-white cursor-pointer"
                  >
                    <a href={plan.download} download>
                      <Download className="h-4 w-4" />
                      Baixar Planta
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
