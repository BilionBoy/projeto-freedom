"use client";

import { Check } from "lucide-react";

export function Features() {
  const features = [
    "Área de Lazer Completa",
    "Quiosques com Churrasqueira",
    "Salão de Festas",
    "Academia Interna e Externa",
    "Piscina Adulta e Infantil",
    "Segurança 24 Horas",
    "Espaço Pet",
    "Quadra Recreativa",
  ];

  return (
    <section
      id="features"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#c01616]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#c01616]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.35fr] gap-16 items-center">
            {/* TEXTO */}
            <div className="relative z-10 max-w-xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                Realize seu sonho com a{" "}
                <span className="text-[#c01616]">FREEDOM</span>!
              </h2>

              <p className="text-xl mb-8 text-white/80 leading-relaxed">
                Chegou a sua hora de ter <strong>LIBERDADE</strong>.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#c01616] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white/90">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGEM */}
            <div className="relative lg:translate-x-16 xl:translate-x-24">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black flex items-center justify-center">
                <img
                  src="/bella-roma-sobre.jpeg"
                  alt="Implantação Bella Roma Residencial"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-[#c01616]/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
