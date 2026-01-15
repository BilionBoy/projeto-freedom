"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ParquePassarosFinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c01616] via-[#b01414] to-[#7f0d0d]" />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
            Realize o Sonho da <br />
            <span className="text-white/90">Casa Própria</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Entre em contato com nossos especialistas e descubra as melhores
            condições para adquirir seu apartamento no{" "}
            <span className="font-semibold">Parque dos Pássaros</span>.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="
                bg-white text-[#c01616]
                hover:bg-gray-100
                text-lg px-12 py-7
                font-semibold
                shadow-2xl shadow-black/30
              "
              asChild
            >
              <a
                href="https://wa.me/5511960606405?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20apartamento%20decorado."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Visita ao Decorado
              </a>
            </Button>
          </motion.div>

          {/* Subtle trust line */}
          <p className="mt-8 text-sm text-white/70">
            Atendimento personalizado • Simulação sem compromisso • Segurança
            total
          </p>
        </motion.div>
      </div>
    </section>
  );
}
