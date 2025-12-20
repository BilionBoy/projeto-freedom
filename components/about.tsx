"use client";

import { Building2, Home, Shield, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#c01616]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#c01616]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Harmonia entre <span className="text-[#c01616]">segurança</span>,
              lazer e conforto
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Um projeto pensado para elevar seu padrão de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: "2 Dormitórios",
                description: "Plantas modernas e funcionais",
              },
              {
                icon: Building2,
                title: "Varanda",
                description: "Mais espaço e conforto",
              },
              {
                icon: Shield,
                title: "Segurança",
                description: "Condomínio fechado",
              },
              {
                icon: Sparkles,
                title: "Lazer Completo",
                description: "Para toda a família",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#c01616]/40 transition-all"
              >
                <item.icon className="h-8 w-8 text-[#c01616] mb-4" />
                <h3 className="font-serif text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
