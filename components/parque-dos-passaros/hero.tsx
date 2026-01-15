"use client";

import type React from "react";

import Image from "next/image";
import {
  MapPin,
  Building2,
  Sparkles,
  Send,
  Landmark,
  Home,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ParqueDosPassarosHero() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const upcomingDevelopments = [
    { name: "Gran VIC Beija-Flor", icon: Building2 },
    { name: "Gran VIC Gaivota", icon: Landmark },
    { name: "Gran VIC Bem-Te-Vi", icon: Home },
    { name: "Gran VIC Sabiá", icon: Briefcase },
  ];

  const activeDevelopments: {
    id: string;
    name: string;
    icon: LucideIcon;
  }[] = [
    { id: "canario", name: "Canário", icon: Building2 },
    { id: "andorinha", name: "Andorinha", icon: Home },
    { id: "tangara", name: "Tangará", icon: Landmark },
    { id: "colibri", name: "Colibri", icon: Briefcase },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Tenho interesse nos novos empreendimentos do Parque dos Pássaros!%0A%0ANome: ${formData.name}%0ATelefone: ${formData.phone}%0AE-mail: ${formData.email}`;
    window.open(`https://wa.me/5511960606405?text=${message}`, "_blank");
    setOpen(false);
    setFormData({ name: "", phone: "", email: "" });
  };

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
            <div className="inline-flex items-center gap-2 bg-[#c01616]/20 backdrop-blur-md px-3 py-2 md:px-6 md:py-3 rounded-full mb-6 md:mb-8 border border-[#c01616]/30">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#c01616]" />
              <span className="text-xs md:text-sm font-medium tracking-wide">
                Av. Luiz Bruno Petrilli, Indaiatuba/SP
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-[1.05] tracking-tight px-4">
              Parque dos <br />
              <span className="text-[#c01616]">Pássaros</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 tracking-wide px-4">
              Um bairro planejado para viver melhor
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Um bairro planejado com 8 empreendimentos exclusivos, natureza
              integrada e qualidade de vida para você e sua família.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-3 md:px-6 md:py-4 rounded-xl border border-white/10"
              >
                <Building2 className="h-5 w-5 md:h-6 md:w-6 text-[#c01616]" />
                <div className="text-left">
                  <p className="text-xl md:text-2xl font-bold">8</p>
                  <p className="text-xs text-white/70">Empreendimentos</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <button className="relative group cursor-pointer">
                      {/* Main Button Container */}
                      <div className="flex items-center gap-3 bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-sm px-5 py-3 md:px-6 md:py-4 rounded-xl border-2 border-[#c01616]/60 shadow-2xl shadow-[#c01616]/30 transition-all hover:scale-105 hover:shadow-[#c01616]/50 hover:border-[#c01616] overflow-hidden">
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c01616]/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

                        {/* Icon with glow */}
                        <div className="relative">
                          <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-[#c01616] animate-pulse drop-shadow-[0_0_8px_rgba(192,22,22,0.8)]" />
                        </div>

                        <div className="text-left relative z-10">
                          <p className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                            Vem aí
                          </p>
                          <p className="text-xs text-[#c01616] font-semibold">
                            Novos Lançamentos
                          </p>
                        </div>
                      </div>

                      {/* Large Notification Badge */}
                      <div className="absolute -top-3 -right-3 z-50">
                        {/* Pulsing rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute h-12 w-12 bg-[#c01616] rounded-full animate-ping opacity-40" />
                          <div className="absolute h-12 w-12 bg-[#c01616] rounded-full animate-pulse opacity-30" />
                        </div>

                        {/* Badge */}
                        <div className="relative h-12 w-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full border-3 border-[#c01616] flex flex-col items-center justify-center shadow-2xl shadow-[#c01616]/60 group-hover:scale-110 transition-transform">
                          <span className="text-xl font-black text-white leading-none">
                            4
                          </span>
                          <span className="text-[8px] font-bold text-[#c01616] uppercase leading-none">
                            Novos
                          </span>
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-[#c01616]/20 blur-xl group-hover:bg-[#c01616]/40 transition-all -z-10" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl bg-white p-0 gap-0 overflow-hidden border-2 border-[#c01616]/20 max-h-[90vh] overflow-y-auto">
                    <DialogHeader className="bg-gradient-to-r from-[#c01616] to-[#e01818] p-5 md:p-8 text-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                          <Sparkles className="h-6 w-6 md:h-8 md:w-8 animate-pulse" />
                          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold">
                            Próximos Lançamentos
                          </DialogTitle>
                        </div>
                        <p className="text-white/90 text-center text-sm sm:text-base md:text-lg px-2">
                          Conheça os empreendimentos que vão transformar o
                          Parque dos Pássaros
                        </p>
                      </div>
                    </DialogHeader>

                    <div className="p-4 md:p-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                        {upcomingDevelopments.map((dev, index) => (
                          <motion.div
                            key={dev.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl border-2 border-[#c01616]/20 hover:border-[#c01616]/40 transition-all hover:shadow-xl hover:scale-105 group overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-[#c01616]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform" />
                            <div className="relative z-10 flex items-center gap-3 md:gap-4">
                              <div className="text-3xl md:text-4xl">
                                <dev.icon className="w-8 h-8 md:w-10 md:h-10" />
                              </div>
                              <div className="flex-1">
                                <p className="font-bold text-gray-900 text-base md:text-lg leading-tight">
                                  {dev.name}
                                </p>
                                <div className="flex items-center gap-2 mt-1 md:mt-2">
                                  <div className="h-2 w-2 rounded-full bg-[#c01616] animate-pulse" />
                                  <p className="text-xs md:text-sm text-[#c01616] font-semibold">
                                    Em breve
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-[#c01616]/20">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2 flex items-center gap-2">
                          <Send className="h-4 w-4 md:h-5 md:w-5 text-[#c01616]" />
                          Quero saber mais!
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
                          Deixe seus dados e nossa equipe entrará em contato com
                          todas as informações.
                        </p>
                        <form
                          onSubmit={handleSubmit}
                          className="space-y-3 md:space-y-4"
                        >
                          <div>
                            <Label
                              htmlFor="name"
                              className="text-gray-700 font-medium text-sm md:text-base"
                            >
                              Nome completo
                            </Label>
                            <Input
                              id="name"
                              placeholder="Seu nome"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              required
                              className="mt-1 border-gray-300 focus:border-[#c01616] focus:ring-[#c01616] text-sm md:text-base"
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            <div>
                              <Label
                                htmlFor="phone"
                                className="text-gray-700 font-medium text-sm md:text-base"
                              >
                                Telefone
                              </Label>
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="(00) 00000-0000"
                                value={formData.phone}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                  })
                                }
                                required
                                className="mt-1 border-gray-300 focus:border-[#c01616] focus:ring-[#c01616] text-sm md:text-base"
                              />
                            </div>
                            <div>
                              <Label
                                htmlFor="email"
                                className="text-gray-700 font-medium text-sm md:text-base"
                              >
                                E-mail
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    email: e.target.value,
                                  })
                                }
                                required
                                className="mt-1 border-gray-300 focus:border-[#c01616] focus:ring-[#c01616] text-sm md:text-base"
                              />
                            </div>
                          </div>
                          <Button
                            type="submit"
                            className="w-full bg-[#c01616] hover:bg-[#a01414] text-white py-5 md:py-6 rounded-xl text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
                          >
                            <Send className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                            Falar com a Freeda
                          </Button>
                        </form>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
            {/* 🔹 Guia rápido dos empreendimentos */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 px-4">
              {activeDevelopments.map((dev, index) => (
                <motion.button
                  key={dev.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  onClick={() => scrollToSection(dev.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                 bg-white/5 border border-white/10
                 hover:border-[#c01616]/50 hover:bg-[#c01616]/10
                 transition-all cursor-pointer"
                >
                  <dev.icon className="w-5 h-5 text-[#c01616]" />
                  <span className="text-sm font-medium text-white">
                    {dev.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
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
