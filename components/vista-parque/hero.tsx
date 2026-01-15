"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Home, Waves, Trees } from "lucide-react";
import { motion } from "framer-motion";

const whatsappLink =
  "https://wa.me/5511960606405?text=" +
  encodeURIComponent(
    "Olá! Gostaria de conhecer melhor o empreendimento Vista Parque."
  );

export function VistaParqueHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p7_1015-85bRRmcZj3jJYIlqhUUyUNDPwZABUH.jpeg"
          alt="Vista Parque Residencial - Vista Aérea"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Animated accent elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#c01616]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c01616]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 pt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-12"
          >
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-[#c01616]/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-[#c01616]/30">
              <MapPin className="h-5 w-5 text-[#c01616]" />
              <span className="text-sm font-medium tracking-wide">
                Lançamento em Salto/SP - Central Parque
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-[1.05] tracking-tight">
              Vista Parque <br />
              <span className="text-[#c01616]">Residencial</span>
            </h1>

            {/* Subheading */}
            <p className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-balance tracking-wide">
              Abra Mais Espaço para sua Felicidade
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
              Único e inovador! Com qualidade e localização privilegiada que
              você merece. Duas torres com 2 elevadores cada, apartamentos com
              plantas inteligentes e varanda gourmet. Lazer completo no rooftop
              com vista panorâmica.
            </p>

            {/* Key features */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10"
              >
                <Home className="h-6 w-6 text-[#c01616]" />
                <div className="text-left">
                  <p className="text-2xl font-bold">2 Dorms</p>
                  <p className="text-xs text-white/70">Com ou sem suíte</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10"
              >
                <Trees className="h-6 w-6 text-[#c01616]" />
                <div className="text-left">
                  <p className="text-2xl font-bold">3 Opções</p>
                  <p className="text-xs text-white/70">Garden Exclusivos</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10"
              >
                <Waves className="h-6 w-6 text-[#c01616]" />
                <div className="text-left">
                  <p className="text-2xl font-bold">Rooftop</p>
                  <p className="text-xs text-white/70">Lazer Completo</p>
                </div>
              </motion.div>
            </div>

            {/* Area info */}
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl mb-12 border border-white/20">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#c01616]">51,61m²</p>
                <p className="text-xs text-white/70">até</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-[#c01616]">80,16m²</p>
                <p className="text-xs text-white/70">Área Privativa</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="text-base px-10 py-7 gap-2 group bg-[#c01616] hover:bg-[#a01212] text-white font-medium shadow-2xl shadow-[#c01616]/20"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conheça o Empreendimento
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-10 py-7 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black font-medium"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Simular Financiamento
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-xl md:text-2xl font-light text-white/80 mb-2">
              Um projeto que abre mais espaço para sua{" "}
              <span className="text-[#c01616] font-bold">FELICIDADE!</span>
            </p>
            <p className="text-sm text-white/60">
              Construtora Rio Branco - Qualidade e Tradição
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
