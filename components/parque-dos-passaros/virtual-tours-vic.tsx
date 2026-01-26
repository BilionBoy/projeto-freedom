"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Maximize2 } from "lucide-react"

const tours = [
  {
    id: "vic-engenharia-canario",
    name: "Vic Engenharia Canário",
    tours: [
      {
        title: "Tour Virtual - Canário",
        url: "https://vicengenharia.com.br/tour-virtual/canario/",
        description: "Conheça cada detalhe.",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p42_819%20%281%29-JUNDV3lSGG5m1qbDu7z6ZkU4jsaJsB.jpeg",
      },
    ],
  },
  {
    id: "vic-engenharia-andorinha",
    name: "Vic Engenharia Andorinha",
    tours: [
      {
        title: "Tour Virtual - Andorinha",
        url: "https://vicengenharia.com.br/tour-virtual/andorinha/",
        description: "Apartamento planejado.",
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p42_819%20%281%29-JUNDV3lSGG5m1qbDu7z6ZkU4jsaJsB.jpeg",
      },
    ],
  },
]

export function VirtualTours() {
  const [activeTab, setActiveTab] = useState("vic-engenharia-canario")
  const [selectedTour, setSelectedTour] = useState<string | null>(null)

  return (
    <section
      id="virtual-tours"
      className="py-24 bg-gradient-to-br from-black via-[#1a1a1a] to-black relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c01616]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance text-white">
              Tour Virtual <span className="text-[#c01616]">360°</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto text-pretty leading-relaxed">
              Visite nossos empreendimentos sem sair de casa. Explore cada ambiente em 360° e sinta-se dentro do seu
              futuro lar.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white/5 border border-white/10">
              {tours.map((project) => (
                <TabsTrigger
                  key={project.id}
                  value={project.id}
                  className="text-base data-[state=active]:bg-[#c01616] data-[state=active]:text-white"
                >
                  {project.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {tours.map((project) => (
              <TabsContent key={project.id} value={project.id}>
                <div className="grid md:grid-cols-2 gap-8">
                  {project.tours.map((tour, index) => (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/10 hover:border-[#c01616]/50 hover:shadow-2xl hover:shadow-[#c01616]/10 transition-all duration-300"
                    >
                      <div
                        className="aspect-video relative overflow-hidden cursor-pointer"
                        onClick={() => setSelectedTour(tour.url)}
                      >
                        <img
                          src={tour.thumbnail || "/placeholder.svg"}
                          alt={tour.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-[#c01616] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#c01616]/30">
                              <Maximize2 className="h-10 w-10 text-white" />
                            </div>
                            <p className="text-sm font-medium text-white">Clique para explorar</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl font-bold mb-2 text-white">{tour.title}</h3>
                        <p className="text-white/60 text-sm">{tour.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Immersive iframe modal */}
          {selectedTour && (
            <div
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedTour(null)}
            >
              <div className="w-full max-w-7xl aspect-video relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setSelectedTour(null)}
                  className="absolute -top-12 right-0 text-white hover:text-[#c01616] transition-colors text-sm"
                >
                  Fechar (ESC)
                </button>
                <iframe
                  src={selectedTour}
                  className="w-full h-full rounded-xl border-2 border-[#c01616]/30"
                  allowFullScreen
                  title="Tour Virtual 360°"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
