import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function FloorPlans() {
  const floorPlans = [
    {
      title: "Planta Tipo A - 2 Dormitórios",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bella-verona-residencial-planta-2-77uja5ZvjknBLgiL38fbKbdRlhHHXw.webp",
      features: [
        "Sala de estar e jantar integradas",
        "Cozinha americana com área de serviço",
        "2 Dormitórios",
        "1 Vaga de garagem coberta",
      ],
    },
    {
      title: "Planta Tipo B - 2 Dormitórios com Varanda",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bella-verona-residencial-planta-3-bUjQWpwIvfn0zkGW3NgbL80wMzj7tV.webp",
      features: [
        "Sala de estar e jantar amplas",
        "Cozinha planejada",
        "Varanda gourmet com jardim",
        "1 Vaga de garagem coberta",
      ],
    },
    {
      title: "Planta Tipo C - 2 Dormitórios Compacto",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bella-verona-residencial-planta-4-KYuLmjtZ0nXs22xn1gqLZvPhFPygo6.webp",
      features: ["Layout otimizado", "Cozinha integrada", "2 Dormitórios", "1 Vaga de garagem"],
    },
  ]

  return (
    <section id="floor-plans" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
              Plantas Modernas e Versáteis
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Apartamentos de 2 dormitórios com varanda e vaga de garagem, projetados para oferecer máximo conforto e
              funcionalidade.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {floorPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square bg-white p-4">
                  <img
                    src={plan.image || "/placeholder.svg"}
                    alt={plan.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">{plan.title}</h3>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Baixar Planta
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
