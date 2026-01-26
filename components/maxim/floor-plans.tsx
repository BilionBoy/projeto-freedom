"use client";

import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Maximize, Bed, Download } from "lucide-react";
import { motion } from "framer-motion";

export function MaximFloorPlans() {
  const plans = [
    {
      title: "2 Dormitórios",
      area: "45m²",
      bedrooms: "2",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/captura-de-tela-2025-08-07-1131451754577142840-Bmwx8vTAIqMYpXBxpICNTfbviysP01.png",
      download:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/captura-de-tela-2025-08-07-1131451754577142840-Bmwx8vTAIqMYpXBxpICNTfbviysP01.png",
      features: [
        "Sala integrada",
        "Cozinha",
        "Área de serviço",
        "1 Banheiro",
        "Varanda",
      ],
    },
    {
      title: "2 Dormitórios c/ Suíte",
      area: "47m²",
      bedrooms: "2",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/captura-de-tela-2025-08-07-1131451754577142840-Bmwx8vTAIqMYpXBxpICNTfbviysP01.png",
      download:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/captura-de-tela-2025-08-07-1131451754577142840-Bmwx8vTAIqMYpXBxpICNTfbviysP01.png",
      features: [
        "Sala integrada",
        "Cozinha",
        "Área de serviço",
        "1 Suíte + 1 Dorm",
        "Varanda",
      ],
    },
    {
      title: "3 Dormitórios c/ Suíte",
      area: "56m²",
      bedrooms: "3",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/56m_3dorms1754577177244-kD9emPfskhPXaJx9dkWxkxw6EWpQRr.jpg",
      download:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/56m_3dorms1754577177244-kD9emPfskhPXaJx9dkWxkxw6EWpQRr.jpg",
      features: [
        "Sala integrada",
        "Cozinha",
        "Área de serviço",
        "1 Suíte + 2 Dorms",
        "Varanda",
      ],
    },
  ];

  return (
    <section id="floor-plans" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Plantas <span className="text-[#c01616]">Inteligentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a planta ideal para sua família. Todas com excelente
            aproveitamento de espaço.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-square bg-muted">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>

                  <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Maximize className="h-5 w-5 text-[#c01616]" />
                      <span className="font-semibold">{plan.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-[#c01616]" />
                      <span className="font-semibold">
                        {plan.bedrooms} Dorms
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-[#c01616] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.download}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-[#c01616] hover:bg-[#a01212] cursor-pointer">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar Planta
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
