"use client";

import { MapPin, GraduationCap, Pill, Store } from "lucide-react";

export function Location() {
  const nearbyPlaces = [
    { icon: Store, name: "Supermercados", distance: "400m" },
    { icon: GraduationCap, name: "Escolas", distance: "1,1km" },
    { icon: Pill, name: "Farmácias", distance: "3,3km" },
    { icon: MapPin, name: "Centro de Itu", distance: "3km" },
  ];

  return (
    <section id="location" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
              Localização <span className="text-[#c01616]">Privilegiada</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Bella Roma Residencial, em uma região estratégica de Itu, com
              praticidade e mobilidade para o seu dia a dia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              {/* Endereço */}
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nossa Senhora da Candelária
                      <br />
                      Itu - SP
                    </p>
                  </div>
                </div>
              </div>

              {/* Pontos de interesse */}
              <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                Pontos de Interesse Próximos
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {nearbyPlaces.map((place, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <place.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        {place.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {place.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MAP */}
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps?q=-23.270378258814123,-47.31595080184731&hl=pt-BR&z=15&output=embed"
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
  );
}
