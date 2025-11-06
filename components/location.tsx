import { MapPin, Navigation, Clock, Coffee } from "lucide-react"

export function Location() {
  const nearbyPlaces = [
    { icon: Coffee, name: "Supermercados", distance: "500m" },
    { icon: Navigation, name: "Escolas", distance: "1km" },
    { icon: Clock, name: "Farmácias", distance: "300m" },
    { icon: MapPin, name: "Centro de Itu", distance: "3km" },
  ]

  return (
    <section id="location" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Localização Privilegiada</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              No coração de Itu, com fácil acesso a tudo que você precisa para o seu dia a dia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua Exemplo, 123 - Centro
                      <br />
                      Itu - SP, CEP 13300-000
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold mb-6">Pontos de Interesse Próximos</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <place.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{place.name}</p>
                      <p className="text-xs text-muted-foreground">{place.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14676.298621252937!2d-47.29944!3d-23.26444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf5c8f2d8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sItu%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
