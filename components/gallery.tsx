"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/bella-verona-dormitorio.jpg",
    alt: "Dormitório",
    category: "Ambientes",
  },
  {
    src: "/bella-verona-cozinha.jpg",
    alt: "Cozinha",
    category: "Ambientes",
  },
  {
    src: "/bella-verona-varanda.jpg",
    alt: "Varanda Gourmet",
    category: "Lazer",
  },
  {
    src: "/bella-verona-sala.jpg",
    alt: "Sala de Estar",
    category: "Lazer",
  },
]

export function Gallery() {
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
              Conheça os <span className="text-[#c01616]">Ambientes</span>
            </h2>
            <p className="text-lg md:text-xl text-[#575757] max-w-3xl mx-auto text-pretty leading-relaxed">
              Cada detalhe foi pensado para proporcionar conforto, elegância e funcionalidade ao seu dia a dia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-medium text-white bg-[#c01616] px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-serif font-bold mt-2">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-0">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-white text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  {selectedImage + 1} / {images.length}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
