"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Home, Waves, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function MaximHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-danpris-terraco-itu-externas-piscina-infantil-hr00-easy-resize-com-5568a87f611ae35dfd0a51fe0e5de8ff6ad089d91754576575462-V78mSCBauw62ZIFjwU6IQATYlsTNdq.jpg"
          alt="Maxim Home Club - Piscina Infantil"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#c01616]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c01616]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 z-20 pt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-green-600/30">
              <Calendar className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium tracking-wide">
                Pronto para Morar - Entrega Dezembro/2025
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-[1.05] tracking-tight">
              Maxim <br />
              <span className="text-[#c01616]">Home Club</span>
            </h1>

            <p className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-balance tracking-wide">
              Viva o Máximo em Itu
            </p>

            <p className="text-base md:text-lg text-white/90 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
              O maior clube de lazer de Itu está quase pronto! Com 2
              dormitórios, opção de suíte, e mais de 40 itens de lazer, o Maxim
              Home Club é o lugar perfeito para sua família viver com qualidade
              e conforto.
            </p>

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
                  <p className="text-xs text-white/70">Dormitórios</p>
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
                  <p className="text-2xl font-bold">45-56m²</p>
                  <p className="text-xs text-white/70">Área Privativa</p>
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
                  <p className="text-2xl font-bold">+40</p>
                  <p className="text-xs text-white/70">Itens de Lazer</p>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-base px-10 py-7 gap-2 group bg-[#c01616] hover:bg-[#a01212] text-white font-medium shadow-2xl shadow-[#c01616]/20"
              >
                Agende sua Visita
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-10 py-7 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black font-medium"
              >
                Ver Decorado
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
              <MapPin className="h-5 w-5 text-[#c01616]" />
              <span className="text-sm text-[#FFFFFF]">
                Itu/SP - Bairro Nossa Senhora Aparecida
              </span>
            </div>
            <p className="text-xl md:text-2xl font-light text-white/80 mb-2">
              Realize seu sonho com a{" "}
              <span className="text-[#c01616] font-bold">FREEDOM!</span>
            </p>
          </motion.div>
        </div>
      </div>

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
