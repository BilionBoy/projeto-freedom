import { EnhancedHeader } from "@/components/enhanced-header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FreedomAtende } from "@/components/freedom-atende";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, Calendar, Home, CheckCircle } from "lucide-react";
import Image from "next/image";
import ParqueDosPassarosHero from "@/components/parque-dos-passaros/hero";
import CanarioSection from "@/components/parque-dos-passaros/canario";
import AndorinhaSection from "@/components/parque-dos-passaros/andorinha";
import TangaraSection from "@/components/parque-dos-passaros/tangara";
import ColibriSection from "@/components/parque-dos-passaros/colibri";
import ParquePassarosFinalCTA from "@/components/parque-dos-passaros/final-cta";

export default function ParquePassarosPage() {
  return (
    <main className="min-h-screen">
      <EnhancedHeader currentProperty="parque-dos-passaros" />
      <ParqueDosPassarosHero />
      <CanarioSection />
      <AndorinhaSection />
      <TangaraSection />
      <ColibriSection />
      <ParquePassarosFinalCTA />
      <FreedomAtende />
      <Contact />
      <Footer />
    </main>
  );
}
