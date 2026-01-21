"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Home, Car, Waves } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <img
          src="/bella-roma.png"
          alt="Bella Roma Residencial - Fachada 3D"
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
                Lançamento em Itu/SP • Bairro Nossa Senhora da Candelária Creci
                034755
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-[1.05] tracking-tight">
              Bella Roma <br />
              <span className="text-[#c01616]">Residencial</span>
            </h1>

            {/* Subheading */}
            <p className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-balance tracking-wide">
              O Seu Primeiro Imóvel em Itu Começa Aqui
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
              O Bella Roma Residencial foi planejado para quem deseja conquistar
              o primeiro imóvel com o melhor custo-benefício de Itu.
              Apartamentos com 2 dormitórios, varanda e opções com suíte, em um
              condomínio completo e moderno.
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
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-xs text-white/70">
                    Dormitórios (com opção suíte)
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10"
              >
                <Car className="h-6 w-6 text-[#c01616]" />
                <div className="text-left">
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-xs text-white/70">Vaga de Garagem</p>
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
                  <p className="text-2xl font-bold">+15</p>
                  <p className="text-xs text-white/70">Itens de Lazer</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Conheça o Bella Roma */}
              <a href="#about" className="cursor-pointer">
                <Button
                  size="lg"
                  className="
        text-base px-10 py-7 gap-2 group
        bg-[#c01616] hover:bg-[#a01212]
        text-white font-medium
        shadow-2xl shadow-[#c01616]/20
        cursor-pointer
      "
                >
                  Conheça o Bella Roma
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              {/* Simular Financiamento */}
              <a
                href="https://wa.me/5511960606405?text=Olá,%20gostaria%20de%20simular%20o%20financiamento%20do%20Bella%20Roma."
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="
        text-base px-10 py-7
        bg-white/10 backdrop-blur-sm
        border-white/20
        text-white
        hover:bg-white hover:text-black
        font-medium
        cursor-pointer
      "
                >
                  Simular Financiamento
                </Button>
              </a>
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
              A partir de{" "}
              <span className="text-[#c01616] font-bold">R$ 205.000</span>
            </p>
            <p className="text-lg md:text-xl font-light text-white/60">
              Entrada facilitada • Ideal para conquistar o{" "}
              <span className="text-white font-medium">1º imóvel</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
