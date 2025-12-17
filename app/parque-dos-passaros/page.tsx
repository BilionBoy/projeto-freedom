import { EnhancedHeader } from "@/components/enhanced-header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FreedomAtende } from "@/components/freedom-atende";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, Calendar, Home, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function ParquePassarosPage() {
  return (
    <main className="min-h-screen">
      <EnhancedHeader currentProperty="parque-dos-passaros" />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#575757]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <Image
          src="/uploads-20-286-29.jpeg"
          alt="Parque dos Pássaros"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
            Parque dos Pássaros
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
            Um bairro planejado com 4 empreendimentos exclusivos, natureza e
            qualidade de vida.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5" />
              <span>Bairro Bom Sucesso</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Building2 className="w-5 h-5" />
              <span>4 Empreendimentos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Bairro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Bem-vindo ao Parque dos Pássaros
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O Parque dos Pássaros é mais do que um endereço, é um estilo de
              vida. Localizado no Bairro Bom Sucesso, em frente ao condomínio
              Lagos de Shanadu, o bairro reúne 4 empreendimentos modernos da Vic
              Engenharia, projetados para oferecer conforto, segurança e
              qualidade de vida para você e sua família.
            </p>
          </div>
        </div>
      </section>

      {/* CANÁRIO - Empreendimento 1 */}
      <section id="canario" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Gran Vic Canário
            </h2>
            <p className="text-xl text-muted-foreground">
              Modernidade e conforto em um dos melhores locais de Bom Sucesso
            </p>
          </div>

          {/* Informações do Canário */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background rounded-lg p-8 shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                  Informações Gerais
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Construtora</p>
                      <p className="text-muted-foreground">Vic Engenharia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Localização</p>
                      <p className="text-muted-foreground">
                        Bairro Bom Sucesso, em frente ao Lagos de Shanadu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Lançamento</p>
                      <p className="text-muted-foreground">Outubro/2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Previsão de Entrega</p>
                      <p className="text-muted-foreground">Dezembro/2027</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Total de Unidades</p>
                      <p className="text-muted-foreground">296 apartamentos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg p-8 shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                  Plantas Disponíveis
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-[#c01616] pl-4">
                    <p className="font-semibold text-lg">2 Quartos</p>
                    <p className="text-muted-foreground">47,22 m²</p>
                  </div>
                  <div className="border-l-4 border-[#c01616] pl-4">
                    <p className="font-semibold text-lg">2 Quartos</p>
                    <p className="text-muted-foreground">55,15 m²</p>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="text-sm font-semibold mb-2 text-foreground">
                    Valores a partir de:
                  </p>
                  <p className="text-3xl font-bold text-[#c01616] mb-2">
                    R$ 328.000
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Entrada a partir de R$ 500,00
                  </p>
                </div>
              </div>
            </div>

            {/* Diferenciais do Canário */}
            <div className="bg-background rounded-lg p-8 shadow-lg mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                Área de Lazer Completa
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Piscina",
                  "Academia",
                  "Espaço Fitness",
                  "Quadra Esportiva",
                  "Playground",
                  "Espaço Gourmet",
                  "Salão de Festas",
                  "Pet Place",
                  "Praça do Luau",
                  "Redário",
                  "Espaço Piquenique",
                  "Horta",
                  "Bicicletário",
                  "Área de Jogos ao Ar Livre",
                  "Mercadinho (preparação)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tour Virtual Canário */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Tour Virtual - Canário
            </h3>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://vicengenharia.com.br/tour-virtual/canario/"
                  className="w-full h-full"
                  allowFullScreen
                  title="Tour Virtual Gran Vic Canário"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Explore cada detalhe do Gran Vic Canário em nosso tour virtual
                  360°
                </p>
                <Button
                  asChild
                  className="bg-[#c01616] hover:bg-[#a01414] text-white"
                >
                  <a
                    href="https://vicengenharia.com.br/empreendimentos/gran-vic-canario/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Mais Detalhes
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Galeria de Fotos Canário - Fixed all image paths */}
          <div className="max-w-7xl mx-auto">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Galeria de Fotos - Canário
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-286-29.jpeg"
                  alt="Fachada Gran Vic Canário"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-283-29.jpeg"
                  alt="Entrada Torre 05"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-288-29.jpeg"
                  alt="Portaria Canário"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-285-29.jpeg"
                  alt="Espaço Piquenique"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-287-29.jpeg"
                  alt="Espaço Gourmet com Lareira"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-284-29.jpeg"
                  alt="Fitness e Playground"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group md:col-span-2 lg:col-span-1">
                <Image
                  src="/uploads-20-289-29.jpeg"
                  alt="Salão de Festas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANDORINHA - Empreendimento 2 */}
      <section id="andorinha" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Gran Vic Andorinha Suíte
            </h2>
            <p className="text-xl text-muted-foreground">
              Apartamentos com suíte para mais conforto e privacidade
            </p>
          </div>

          {/* Informações do Andorinha */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-muted/30 rounded-lg p-8 shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                  Informações Gerais
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Construtora</p>
                      <p className="text-muted-foreground">Vic Engenharia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Localização</p>
                      <p className="text-muted-foreground">
                        Bairro Bom Sucesso, em frente ao Lagos de Shanadu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Lançamento</p>
                      <p className="text-muted-foreground">Outubro/2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Previsão de Entrega</p>
                      <p className="text-muted-foreground">Dezembro/2027</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Status</p>
                      <p className="text-muted-foreground">Em obras</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-8 shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                  Plantas Disponíveis
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-[#c01616] pl-4">
                    <p className="font-semibold text-lg">2 Quartos com Suíte</p>
                    <p className="text-muted-foreground">51,42 m²</p>
                  </div>
                  <div className="border-l-4 border-[#c01616] pl-4">
                    <p className="font-semibold text-lg">2 Quartos com Suíte</p>
                    <p className="text-muted-foreground">55,15 m²</p>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-6">
                  <p className="text-sm font-semibold mb-2 text-foreground">
                    Valores a partir de:
                  </p>
                  <p className="text-3xl font-bold text-[#c01616] mb-2">
                    R$ 340.000
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Entrada a partir de R$ 500,00
                  </p>
                </div>
              </div>
            </div>

            {/* Diferenciais do Andorinha */}
            <div className="bg-muted/30 rounded-lg p-8 shadow-lg mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                Área de Lazer Completa
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Piscina",
                  "Academia",
                  "Espaço Fitness",
                  "Quadra Esportiva",
                  "Playground",
                  "Espaço Gourmet",
                  "Salão de Festas",
                  "Sauna",
                  "Pet Place",
                  "Praça do Luau",
                  "Redário",
                  "Espaço Piquenique",
                  "Horta",
                  "Bicicletário",
                  "Área de Jogos ao Ar Livre",
                  "Mercadinho (preparação)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tour Virtual Andorinha */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Tour Virtual - Andorinha Suíte
            </h3>
            <div className="bg-muted/30 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://vicengenharia.com.br/tour-virtual/andorinha/"
                  className="w-full h-full"
                  allowFullScreen
                  title="Tour Virtual Gran Vic Andorinha Suíte"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Conheça os detalhes do Gran Vic Andorinha Suíte em nosso tour
                  virtual 360°
                </p>
                <Button
                  asChild
                  className="bg-[#c01616] hover:bg-[#a01414] text-white"
                >
                  <a
                    href="https://vicengenharia.com.br/empreendimentos/gran-vic-andorinha/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Mais Detalhes
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Plantas Andorinha - Fixed all image paths */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Plantas - Andorinha Suíte
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group bg-white">
                <Image
                  src="/uploads-20-2819-29.jpeg"
                  alt="Planta Apartamento Térreo e Tipo - Final 03 - Torres 01 a 04"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Botão de download */}
                <a
                  href="/uploads-20-2819-29.jpeg"
                  download
                  className="
                    absolute top-4 right-4
                    bg-red-600 hover:bg-red-700
                    text-white text-sm font-semibold
                    px-4 py-2 rounded-md
                    shadow-lg
                    opacity-0 group-hover:opacity-100
                    transition
                  "
                >
                  Baixar planta
                </a>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">
                    Planta Térreo e Tipo - Final 03
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 flex flex-col justify-center">
                <h4 className="font-serif text-2xl font-bold mb-4 text-foreground">
                  Detalhes das Plantas
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] mt-0.5 flex-shrink-0" />
                    <span>2 quartos sendo 1 suíte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] mt-0.5 flex-shrink-0" />
                    <span>Sala de estar e jantar integradas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] mt-0.5 flex-shrink-0" />
                    <span>Cozinha americana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] mt-0.5 flex-shrink-0" />
                    <span>Área de serviço</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] mt-0.5 flex-shrink-0" />
                    <span>Banheiro completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] mt-0.5 flex-shrink-0" />
                    <span>Sacada com churrasqueira</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Galeria de Fotos Andorinha - Fixed all image paths */}
          <div className="max-w-7xl mx-auto">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Galeria de Fotos - Andorinha Suíte
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-2813-29.jpeg"
                  alt="Fachada Torre 04 - Andorinha"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-2812-29.jpeg"
                  alt="Academia Completa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-2816-29.jpeg"
                  alt="Espaço Gourmet com Bar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-2814-29.jpeg"
                  alt="Espaço Fitness Ao Ar Livre"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-2817-29.jpeg"
                  alt="Playground Infantil"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/uploads-20-2815-29.jpeg"
                  alt="Bicicletário"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TANGARÁ - Empreendimento 3 */}
      <section id="tangara" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#c01616] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Pré-Lançamento
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Gran Vic Tangará
            </h2>
            <p className="text-xl text-muted-foreground">
              O mais novo empreendimento do Parque dos Pássaros
            </p>
          </div>

          {/* Imagem Principal Tangará - Fixed image path */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/tangara-fachada.jpeg"
                alt="Fachada Gran Vic Tangará"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white font-serif text-3xl font-bold mb-2">
                  Gran Vic Tangará
                </h3>
                <p className="text-white/80">
                  Parque dos Pássaros - Bairro Bom Sucesso
                </p>
              </div>
            </div>
          </div>

          {/* Informações do Tangará */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background rounded-lg p-8 shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                  Informações Gerais
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Construtora</p>
                      <p className="text-muted-foreground">Vic Engenharia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Localização</p>
                      <p className="text-muted-foreground">
                        Bairro Bom Sucesso, em frente ao Lagos de Shanadu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Lançamento</p>
                      <p className="text-muted-foreground">Outubro/2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Previsão de Entrega</p>
                      <p className="text-muted-foreground">1º Semestre/2029</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Total de Unidades</p>
                      <p className="text-muted-foreground">312 apartamentos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg p-8 shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                  Plantas Disponíveis
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-[#c01616] pl-4">
                    <p className="font-semibold text-lg">2 Quartos</p>
                    <p className="text-muted-foreground">47,22 m²</p>
                  </div>
                  <div className="border-l-4 border-[#c01616] pl-4">
                    <p className="font-semibold text-lg">2 Quartos</p>
                    <p className="text-muted-foreground">55,15 m²</p>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="text-sm font-semibold mb-2 text-foreground">
                    Valores a partir de:
                  </p>
                  <p className="text-3xl font-bold text-[#c01616] mb-2">
                    R$ 279.000
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Entrada a partir de R$ 500,00
                  </p>
                </div>
              </div>
            </div>

            {/* Diferenciais do Tangará */}
            <div className="bg-background rounded-lg p-8 shadow-lg mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                Área de Lazer Completa
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Piscina",
                  "Academia",
                  "Espaço Fitness",
                  "Quadra Esportiva",
                  "Playground",
                  "Espaço Gourmet",
                  "Salão de Festas",
                  "Solarium",
                  "Pet Place",
                  "Área de Jogos",
                  "Horta",
                  "Bicicletário",
                  "Mercadinho (preparação)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferenciais dos Apartamentos Tangará */}
            <div className="bg-background rounded-lg p-8 shadow-lg mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                Diferenciais dos Apartamentos
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Piso laminado de madeira na sala e quartos",
                  "Cerâmica nas áreas molhadas",
                  "Tomada USB na sala",
                  "Janelas dos quartos em veneziana",
                  "Bancada da cozinha em granito com cuba inox",
                  "Preparação para ar condicionado nos quartos",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tour Virtual Tangará */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Tour Virtual - Tangará
            </h3>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://vicengenharia.com.br/tour-virtual/tangara/"
                  className="w-full h-full"
                  allowFullScreen
                  title="Tour Virtual Gran Vic Tangará"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Explore cada detalhe do Gran Vic Tangará em nosso tour virtual
                  360°
                </p>
                <Button
                  asChild
                  className="bg-[#c01616] hover:bg-[#a01414] text-white"
                >
                  <a
                    href="https://vicengenharia.com.br/empreendimentos/gran-vic-tangara/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Mais Detalhes
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Plantas Tangará - Fixed all image paths */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Plantas - Tangará
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group bg-white">
                <Image
                  src="/tangara-planta-1.jpeg"
                  alt="Planta Apartamento Final 02 - 12º ao 11º Pavimento - Torre 01"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <a
                  href="/tangara-planta-1.jpeg"
                  download
                  className="
                    absolute top-4 right-4
                    bg-red-600 hover:bg-red-700
                    text-white text-sm font-semibold
                    px-4 py-2 rounded-md
                    shadow-lg
                    opacity-0 group-hover:opacity-100
                    transition
                  "
                >
                  Baixar planta
                </a>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">
                    Final 02 - 12º ao 11º Pav.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group bg-white">
                <Image
                  src="/tangara-planta-2.jpeg"
                  alt="Planta Apartamento Final 03 - Torre 01"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <a
                  href="/tangara-planta-2.jpeg"
                  download
                  className="
                    absolute top-4 right-4
                    bg-red-600 hover:bg-red-700
                    text-white text-sm font-semibold
                    px-4 py-2 rounded-md
                    shadow-lg
                    opacity-0 group-hover:opacity-100
                    transition
                  "
                  >
                    Baixar planta
                </a>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">
                    Final 03 - Torre 01
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group bg-white">
                <Image
                  src="/tangara-planta-3.jpeg"
                  alt="Planta Apartamento Final 04 - Torre 01"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <a
                  href="/tangara-planta-3.jpeg"
                  download
                  className="
                    absolute top-4 right-4
                    bg-red-600 hover:bg-red-700
                    text-white text-sm font-semibold
                    px-4 py-2 rounded-md
                    shadow-lg
                    opacity-0 group-hover:opacity-100
                    transition
                  "
                >
                  Baixar planta
                </a>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">
                    Final 04 - Torre 01
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Galeria de Fotos Tangará - Fixed all image paths */}
          <div className="max-w-7xl mx-auto">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Galeria de Fotos - Tangará
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/tangara-fachada.jpeg"
                  alt="Fachada Gran Vic Tangará"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/tangara-piscina.jpeg"
                  alt="Piscina Tangará"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/tangara-academia.jpeg"
                  alt="Academia Vic Fitness"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/tangara-fitness.jpeg"
                  alt="Espaço Fitness Ao Ar Livre"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/tangara-quadra.jpeg"
                  alt="Quadra Poliesportiva"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/tangara-varanda.jpeg"
                  alt="Varanda Gourmet Decorada"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* CTA Decorado Tangará */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-[#c01616] to-[#a01414] rounded-lg p-8 text-center text-white">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Decorado Disponível
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Venha conhecer o apartamento decorado do Gran Vic Tangará.
                Agende sua visita com a Freedom Imobiliária.
              </p>
              <Button
                size="lg"
                className="bg-white text-[#c01616] hover:bg-gray-100"
                asChild
              >
                <a href="#contato">Agendar Visita ao Decorado</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* COLIBRI - Empreendimento 4 */}
      <section id="colibri" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#c01616] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Pré-Lançamento
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Gran Vic Colibri
            </h2>
            <p className="text-xl text-muted-foreground">
              O empreendimento com a mais completa área de lazer
            </p>
          </div>

          {/* Imagem Principal Colibri - Fixed image path */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/colibri-fachada.jpeg"
                alt="Fachada Gran Vic Colibri"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white font-serif text-3xl font-bold mb-2">
                  Gran Vic Colibri
                </h3>
                <p className="text-white/80">
                  Parque dos Pássaros - Bairro Bom Sucesso
                </p>
              </div>
            </div>
          </div>

          {/* Informações do Colibri */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-muted/30 rounded-lg p-8 shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                  Informações Gerais
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Construtora</p>
                      <p className="text-muted-foreground">Vic Engenharia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Localização</p>
                      <p className="text-muted-foreground">
                        Bairro Bom Sucesso, em frente ao Lagos de Shanadu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Lançamento</p>
                      <p className="text-muted-foreground">Outubro/2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Previsão de Entrega</p>
                      <p className="text-muted-foreground">1º Semestre/2029</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-[#c01616] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Total de Unidades</p>
                      <p className="text-muted-foreground">256 apartamentos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-8 shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                  Plantas Disponíveis
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-[#c01616] pl-4">
                    <p className="font-semibold text-lg">2 Quartos (Suíte)</p>
                    <p className="text-muted-foreground">51,42 m²</p>
                  </div>
                  <div className="border-l-4 border-[#c01616] pl-4">
                    <p className="font-semibold text-lg">2 Quartos</p>
                    <p className="text-muted-foreground">55,15 m²</p>
                  </div>
                </div>
                <div className="bg-[#c01616]/10 rounded-lg p-6">
                  <p className="text-sm font-semibold mb-2 text-foreground">
                    Valores a partir de:
                  </p>
                  <p className="text-3xl font-bold text-[#c01616] mb-2">
                    R$ 312.000
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Entrada a partir de R$ 500,00
                  </p>
                </div>
              </div>
            </div>

            {/* Diferenciais do Colibri */}
            <div className="bg-muted/30 rounded-lg p-8 shadow-lg mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                Área de Lazer Completa
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Academia",
                  "Área de Jogos",
                  "Bicicletário",
                  "Espaço Gourmet",
                  "Espaço Zen",
                  "Horta",
                  "Mercadinho (preparação)",
                  "Pet Place",
                  "Piscina Adulto",
                  "Piscina Infantil",
                  "Playground",
                  "Quadra Esportiva",
                  "Redário",
                  "Salão de Festas",
                  "Sauna",
                  "Solarium",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferenciais dos Apartamentos Colibri */}
            <div className="bg-muted/30 rounded-lg p-8 shadow-lg mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                Diferenciais dos Apartamentos
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Opções com suíte",
                  "Piso laminado de madeira na sala e quartos",
                  "Cerâmica nas áreas molhadas",
                  "Tomada USB na sala",
                  "Janelas dos quartos em veneziana",
                  "Bancada da cozinha em granito com cuba inox",
                  "Preparação para ar condicionado nos quartos",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c01616] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tour Virtual Colibri */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Tour Virtual - Colibri
            </h3>
            <div className="bg-muted/30 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://vicengenharia.com.br/tour-virtual/colibri/"
                  className="w-full h-full"
                  allowFullScreen
                  title="Tour Virtual Gran Vic Colibri"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Explore cada detalhe do Gran Vic Colibri em nosso tour virtual
                  360°
                </p>
                <Button
                  asChild
                  className="bg-[#c01616] hover:bg-[#a01414] text-white"
                >
                  <a
                    href="https://vicengenharia.com.br/empreendimentos/gran-vic-colibri/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Mais Detalhes.
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Implantação Colibri - Fixed image path */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Implantação do Condomínio
            </h3>
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-lg bg-white">
              <Image
                src="/colibri-implantacao.jpeg"
                alt="Implantação do Condomínio Gran Vic Colibri"
                fill
                className="object-contain p-4"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4">
              4 Torres com ampla área de lazer, vagas de estacionamento e total
              infraestrutura
            </p>
          </div>

          {/* Plantas Colibri - Fixed all image paths */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Plantas - Colibri
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group bg-white">
                <Image
                  src="/colibri-planta-1.jpeg"
                  alt="Planta Apartamento Térreo e Tipo - Final 01 - Torre 1"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <a
                  href="/colibri-planta-1.jpeg"
                  download
                  className="
                    absolute top-4 right-4
                    bg-red-600 hover:bg-red-700
                    text-white text-sm font-semibold
                    px-4 py-2 rounded-md
                    shadow-lg
                    opacity-0 group-hover:opacity-100
                    transition
                  "
                >
                  Baixarplanta
                </a>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">
                    Final 01 - Torre 1
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group bg-white">
                <Image
                  src="/colibri-planta-2.jpeg"
                  alt="Planta Apartamento PCD - Final 02 - Torre 1"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <a
                  href="/colibri-planta-2.jpeg"
                  download
                  className="
                    absolute top-4 right-4
                    bg-red-600 hover:bg-red-700
                    text-white text-sm font-semibold
                    px-4 py-2 rounded-md
                    shadow-lg
                    opacity-0 group-hover:opacity-100
                    transition
                  "
                >
                  Baixar planta
                </a>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">
                    PCD - Final 02 - Torre 1
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Galeria de Fotos Colibri - Fixed all image paths */}
          <div className="max-w-7xl mx-auto">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-foreground">
              Galeria de Fotos - Colibri
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/colibri-fachada.jpeg"
                  alt="Fachada Gran Vic Colibri"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold">Fachada</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/colibri-entrada.jpeg"
                  alt="Entrada das Torres"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold">Entrada das Torres</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/colibri-gourmet.jpeg"
                  alt="Espaço Gourmet"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold">Espaço Gourmet</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/colibri-quadra.jpeg"
                  alt="Quadra Poliesportiva e Pet Place"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold">Quadra e Pet Place</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/colibri-playground.jpeg"
                  alt="Playground"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold">Playground</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/colibri-zen.jpeg"
                  alt="Espaço Zen e Redário"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold">
                    Espaço Zen e Redário
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Decorado Colibri */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-[#c01616] to-[#a01414] rounded-lg p-8 text-center text-white">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Decorado Disponível
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Venha conhecer o apartamento decorado do Gran Vic Colibri.
                Agende sua visita com a Freedom Imobiliária.
              </p>
              <Button
                size="lg"
                className="bg-white text-[#c01616] hover:bg-gray-100"
                asChild
              >
                <a href="#contato">Agendar Visita ao Decorado</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Localização Privilegiada
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Parque dos Pássaros, Bairro Bom Sucesso, em frente ao condomínio
              Lagos de Shanadu
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.4!2d-48.5!3d-27.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM2JzAwLjAiUyA0OMKwMzAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Parque dos Pássaros"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#c01616] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Realize o Sonho da Casa Própria
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Entre em contato com nossos especialistas e descubra as melhores
            condições para adquirir seu apartamento no Parque dos Pássaros
          </p>
          <Button
            size="lg"
            className="bg-white text-[#c01616] hover:bg-gray-100 text-lg px-8 py-6"
            asChild
          >
            <a href="#contato">Agendar Visita ao Decorado</a>
          </Button>
        </div>
      </section>

      <FreedomAtende />
      <Contact />
      <Footer />
    </main>
  );
}
