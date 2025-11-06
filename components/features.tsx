import { Check } from "lucide-react"

export function Features() {
  const features = [
    "Implantação Estratégica com Lazer Exclusivo",
    "Plantas Modernas e Versáteis",
    "Localização Privilegiada em Itu",
    "Acabamento de Alto Padrão",
    "Área de Lazer Completa",
    "Segurança 24 Horas",
    "Vaga de Garagem Coberta",
    "Infraestrutura Completa",
  ]

  return (
    <section id="features" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                Realize seu sonho com a FREEDOM!
              </h2>
              <p className="text-xl mb-8 text-secondary-foreground/90 text-pretty leading-relaxed">
                Chegou a sua hora de ter LIBERDADE.
              </p>
              <p className="text-lg mb-12 text-secondary-foreground/80 leading-relaxed">
                Descubra a melhor opção para realizar seu sonho de ter o seu próprio lar. O Bella Verona Residencial
                oferece tudo que você precisa para viver com qualidade e conforto.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista_parque_p40_886-6cDx7HV5TE84y7CkCoQtEX85eoLupL.jpeg"
                  alt="Área de Lazer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
