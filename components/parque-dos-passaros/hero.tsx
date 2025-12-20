"use client";

import Image from "next/image";
import { MapPin, Building2, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function ParqueDosPassarosHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <Image
          src="/MAPA.jpeg"
          alt="Parque dos Pássaros"
          fill
          priority
          className="object-cover scale-105"
        />
      </div>

      {/* Glow */}
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-white mb-12"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#c01616]/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-[#c01616]/30">
              <MapPin className="h-5 w-5 text-[#c01616]" />
              <span className="text-sm font-medium tracking-wide">
                Av. Luiz Bruno Petrilli, Indaiatuba/SP
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight">
              Parque dos <br />
              <span className="text-[#c01616]">Pássaros</span>
            </h1>

            {/* Subtitle */}
            <p className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 tracking-wide">
              Um bairro planejado para viver melhor
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Um bairro planejado com 4 empreendimentos exclusivos, natureza
              integrada e qualidade de vida para você e sua família.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10"
              >
                <Building2 className="h-6 w-6 text-[#c01616]" />
                <div className="text-left">
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-xs text-white/70">Empreendimentos</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10"
              >
                <Home className="h-6 w-6 text-[#c01616]" />
                <div className="text-left">
                  <p className="text-2xl font-bold">Bairro</p>
                  <p className="text-xs text-white/70">Planejado</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
