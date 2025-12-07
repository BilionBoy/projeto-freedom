"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Building2, Check } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

interface Property {
  id: string
  name: string
  location: string
  image: string
  status: "lancamento" | "em-obras" | "pronto"
  href: string
}

const properties: Property[] = [
  { // tentativa numero 1
    id: "parque-dos-passaros", // vai ser criado ainda
    name: "Parque dos Pássaros Resiencial", // vai ser criado ainda
    location: "Endereço fictício", // vai ser criado ainda
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fachada-Ls3u18q4mqoOrJERGG1tTNGzMKUXC6.webp",
    status: "lancamento",
    href: "/parque-dos-passaros", // vai ser criado ainda
  },
  {
    id: "bella-verona",
    name: "Bella Verona Residencial",
    location: "Itu/SP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fachada-Ls3u18q4mqoOrJERGG1tTNGzMKUXC6.webp",
    status: "lancamento",
    href: "/",
  },
  {
    id: "vista-parque",
    name: "Vista Parque Residencial",
    location: "Salto/SP - Central Parque",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p16_954-gabLPM1wYrJK47EfbwkhjXvNawegDa.jpeg",
    status: "lancamento",
    href: "/vista-parque",
  },
  {
    id: "maxim-home-club",
    name: "Maxim Home Club",
    location: "Itu/SP - Nossa Senhora Aparecida",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-danpris-terraco-itu-externas-piscina-infantil-hr00-easy-resize-com-5568a87f611ae35dfd0a51fe0e5de8ff6ad089d91754576575462-V78mSCBauw62ZIFjwU6IQATYlsTNdq.jpg",
    status: "pronto",
    href: "/maxim-home-club",
  },
]

interface PropertySwitcherProps {
  currentProperty?: string
  isScrolled?: boolean
}

export function PropertySwitcher({ currentProperty = "bella-verona", isScrolled = false }: PropertySwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const current = properties.find((p) => p.id === currentProperty) || properties[0]

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className={`gap-2 ${isScrolled ? "text-[#575757] hover:text-[#c01616]" : "text-white hover:text-white/80"}`}
      >
        <Building2 className="h-4 w-4" />
        <span className="hidden md:inline">{current.name}</span>
        <span className="md:hidden">{current.name.split(" ")[0]}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-border overflow-hidden z-50"
            >
              <div className="p-3 bg-muted border-b border-border">
                <p className="text-xs font-medium text-muted-foreground">ESCOLHA O EMPREENDIMENTO</p>
              </div>

              <div className="p-2">
                {properties.map((property) => (
                  <Link key={property.id} href={property.href} onClick={() => setIsOpen(false)} className="block group">
                    <div
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                        property.id === currentProperty
                          ? "bg-[#c01616]/10 border border-[#c01616]/20"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={property.image || "/placeholder.svg"}
                          alt={property.name}
                          className="w-full h-full object-cover"
                        />
                        {property.status === "lancamento" && (
                          <div className="absolute top-1 right-1 bg-[#c01616] text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold">
                            NOVO
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-semibold text-sm text-foreground group-hover:text-[#c01616] transition-colors">
                              {property.name}
                            </p>
                            <p className="text-xs text-muted-foreground">{property.location}</p>
                          </div>
                          {property.id === currentProperty && (
                            <Check className="h-4 w-4 text-[#c01616] flex-shrink-0" />
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="p-3 bg-muted border-t border-border">
                <p className="text-xs text-center text-muted-foreground">Mais empreendimentos em breve</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
