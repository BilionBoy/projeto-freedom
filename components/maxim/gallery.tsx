"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MaximGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-danpris-terraco-itu-externas-piscina-infantil-hr00-easy-resize-com-5568a87f611ae35dfd0a51fe0e5de8ff6ad089d91754576575462-V78mSCBauw62ZIFjwU6IQATYlsTNdq.jpg",
      title: "Piscina Infantil com Toboágua",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-danpris-terraco-itu-brinquedoteca-hr00-easy-resize-com-e56e13008a891c7ab0dd56420ba4513c3c5b3f5d1754576575284-BHwYqouzvv70rCQHfBwbDoh0apdTdl.jpg",
      title: "Brinquedoteca",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26-danpris-terraco-itu-salao-de-jogos-hr00-easy-resize-com-a9046e25eb3fb4605721da8d83cbec274f8db3451754576575632-BjTfMBscRROeQ2iIjZEqL1kgtwcKPw.jpg",
      title: "Salão de Jogos",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-danpris-terraco-itu-externas-churrasqueira-hr00-easy-resize-com-e90b0799966fb37ee4f26b1dcc4b4d81bafaa8341754576572184-G5Bwkm3ZwvAPAcG5DhjG1nV93lktHN.jpg",
      title: "Área Gourmet com Churrasqueira",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24-danpris-terraco-itu-externas-pista-de-cooper-e-bike-hr00-easy-resize-com-deab0d7e3c006b52f7066e6a00906588903704141754576575277-PbIKPb2HBmaaXer8I8QLSuo1sB8Fvl.jpg",
      title: "Pista de Cooper e Bike",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-danpris-terraco-itu-externas-quadra-poli-e-tenis-hr00-easy-resize-com-4d72011107c3ae41a4cc339daec63c54b1253f961754576575301-zDPXkFR0SRG1fjcc4CCkWECHtJZqLS.jpg",
      title: "Quadras Poliesportiva e de Tênis",
    },
  ]

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
    <section id="galeria" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Conheça o <span className="text-[#c01616]">Maxim Home Club</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore as áreas de lazer e os espaços que farão parte do seu dia a dia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold text-lg">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
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
              className="absolute left-4 text-white hover:bg-white/10"
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
              className="absolute right-4 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">{images[selectedImage].title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
