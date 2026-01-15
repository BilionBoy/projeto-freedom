"use client";
import { Card } from "@/components/ui/card";
import { Award, Users, File, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function FreedomAtende() {
  const services = [
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description:
        "Equipe especializada para entender suas necessidades e encontrar o imóvel ideal para você.",
    },
    {
      icon: File,
      title: "Assessoria Completa",
      description:
        "Acompanhamento em todas as etapas: documentação, financiamento e entrega das chaves.",
    },
    {
      icon: Award,
      title: "Experiência e Credibilidade",
      description:
        "Há quase 10 anos no mercado imobiliário, conectando pessoas aos seus sonhos.",
    },
    {
      icon: Clock,
      title: "Agilidade no Processo",
      description:
        "Processos otimizados para você realizar seu sonho da casa própria mais rápido.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#c01616]/10 px-4 py-2 rounded-full mb-4">
            <Award className="h-4 w-4 text-[#c01616]" />
            <span className="text-sm font-medium text-[#c01616]">
              FREEDOM PLANEJAMENTO IMOBILIÁRIO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            A <span className="text-[#c01616]">FREEDOM</span> Atende Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mais do que vender imóveis, realizamos sonhos. Conheça nossos
            diferenciais e descubra por que somos a escolha certa para sua
            jornada.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border-2 hover:border-[#c01616]/20">
                <div className="w-12 h-12 bg-[#c01616]/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-[#c01616]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-[#c01616]" />
            <span className="text-sm">
              Escritório: Salto/SP - Atendemos toda a região
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
