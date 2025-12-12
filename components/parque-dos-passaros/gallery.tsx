"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p16_954-gabLPM1wYrJK47EfbwkhjXvNawegDa.jpeg",
    title: "Fachada Principal",
    category: "Fachada",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p7_1015-85bRRmcZj3jJYIlqhUUyUNDPwZABUH.jpeg",
    title: "Vista Aérea",
    category: "Externa",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p52_787-4p1LKmosZ2siqqzs0fIYiXR84nplQS.jpeg",
    title: "Apartamento Decorado",
    category: "Interna",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p27_918-rPTLTEAcFDhYC1nimsAMPNL1IxDyvl.jpeg",
    title: "Salão de Festas",
    category: "Lazer",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p20_970-kicIG62uq6cwtTbwuJe9YJRfddcrNS.jpeg",
    title: "Playground",
    category: "Lazer",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p8_1020-tCK7zdj0TDfzIxNUdinaL9DehZl9Uw.jpeg",
    title: "Pet Place",
    category: "Lazer",
  },
]

export function ParquePassarosGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Galeria de <span className="text-[#c01616]">Imagens</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça cada detalhe dos empreendimentos localizado no bairro Parque dos Pássaros através das nossas imagens
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-xs text-[#c01616] font-semibold mb-1">{image.category}</p>
                <p className="text-lg font-bold">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-xs text-[#c01616] font-semibold mb-1">{images[selectedImage].category}</p>
                <p className="text-xl font-bold text-white">{images[selectedImage].title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
