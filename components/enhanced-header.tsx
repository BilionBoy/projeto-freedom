"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PropertySwitcher } from "@/components/property-switcher"

interface EnhancedHeaderProps {
  currentProperty?: string
}

export function EnhancedHeader({ currentProperty = "bella-verona" }: EnhancedHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "O Empreendimento", href: "#about" },
    { label: "Diferenciais", href: "#features" },
    { label: "Plantas", href: "#floor-plans" },
    { label: "Tour Virtual", href: "#virtual-tours" },
    { label: "Localização", href: "#location" },
    { label: "Contato", href: "#contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/98 backdrop-blur-md shadow-md" : "bg-black/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-raGiAuMQykNQE0S7U05WIJd1IXR5Nx.png"
                alt="FREEDOM Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="flex flex-col leading-tight">
                <span className={`text-2xl font-bold font-serif ${isScrolled ? "text-[#c01616]" : "text-white"}`}>
                  Freedom
                </span>
                <span className={`text-xs tracking-wide ${isScrolled ? "text-[#575757]" : "text-white/80"}`}>
                  PLANEJAMENTO IMOBILIÁRIO
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <PropertySwitcher currentProperty={currentProperty} isScrolled={isScrolled} />
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? "text-[#575757] hover:text-[#c01616]" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button size="lg" className="gap-2 bg-[#c01616] hover:bg-[#a01212] text-white">
                <Phone className="h-4 w-4" />
                Fale Conosco
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? "text-[#575757]" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-4">
                <div className="pb-4 border-b border-border">
                  <PropertySwitcher currentProperty={currentProperty} isScrolled={isScrolled} />
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-medium text-[#575757] hover:text-[#c01616] transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button size="lg" className="gap-2 mt-4 bg-[#c01616] hover:bg-[#a01212] text-white">
                  <Phone className="h-4 w-4" />
                  Fale Conosco
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Sticky CTA - Mobile */}
      {isScrolled && (
        <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
          <Button size="lg" className="w-full gap-2 bg-[#c01616] hover:bg-[#a01212] text-white shadow-2xl">
            <Phone className="h-4 w-4" />
            Fale com um Especialista
          </Button>
        </div>
      )}
    </>
  )
}
