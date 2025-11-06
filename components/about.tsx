import { Building2, Home, Shield, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Conheça a harmonia entre segurança, lazer e praticidade
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Um lançamento que eleva o padrão de moradia em Itu, pensado para quem busca qualidade de vida e conforto
              em cada detalhe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: "2 Dormitórios",
                description: "Plantas modernas e versáteis para sua família",
              },
              {
                icon: Building2,
                title: "Varanda",
                description: "Espaço perfeito para relaxar e aproveitar",
              },
              {
                icon: Shield,
                title: "Segurança",
                description: "Condomínio fechado com total tranquilidade",
              },
              {
                icon: Sparkles,
                title: "Lazer Completo",
                description: "Área de lazer exclusiva para toda família",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
