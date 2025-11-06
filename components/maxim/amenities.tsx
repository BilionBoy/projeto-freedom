"use client"

import { Card } from "@/components/ui/card"
import {
  Waves,
  Dumbbell,
  Users,
  TreePine,
  Bike,
  Baby,
  Dog,
  Pizza,
  Music,
  Gamepad2,
  Film,
  Briefcase,
  Wine,
  Palette,
  Heart,
} from "lucide-react"
import { motion } from "framer-motion"

export function MaximAmenities() {
  const amenities = [
    { icon: Waves, title: "Piscinas", description: "Adulto, infantil, aquecida e com toboágua" },
    { icon: Dumbbell, title: "Fitness Completo", description: "Academia, crossfit, espaço lutas" },
    { icon: Users, title: "Salão de Festas", description: "Com apoio e pergolado" },
    { icon: TreePine, title: "Áreas Verdes", description: "Mini horta, praça central, espaço zen" },
    { icon: Bike, title: "Pista Cooper/Bike", description: "Circuito completo para exercícios" },
    { icon: Baby, title: "Espaço Kids", description: "Playground, brinquedoteca, cinema kids" },
    { icon: Dog, title: "Pet Place", description: "Área exclusiva para seu pet" },
    { icon: Pizza, title: "Espaço Gourmet", description: "Churrasqueira, forno de pizza, chef gourmet" },
    { icon: Music, title: "Espaço Pub/Wine Bar", description: "Para confraternizar com amigos" },
    { icon: Gamepad2, title: "Sala de Jogos", description: "Entretenimento para todas as idades" },
    { icon: Film, title: "Cinema Kids", description: "Diversão garantida para as crianças" },
    { icon: Briefcase, title: "Coworking", description: "Espaço para trabalhar de casa" },
    { icon: Wine, title: "Espaço Redário", description: "Relaxamento ao ar livre" },
    { icon: Palette, title: "Oficina de Artes", description: "Desenvolva sua criatividade" },
    { icon: Heart, title: "Espaço Zen", description: "Yoga, massagem e meditação" },
  ]

  return (
    <section id="lazer" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#c01616]/10 px-4 py-2 rounded-full mb-4">
            <Waves className="h-4 w-4 text-[#c01616]" />
            <span className="text-sm font-medium text-[#c01616]">MAIS DE 40 ITENS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Lazer Completo para Toda a <span className="text-[#c01616]">Família</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            O maior clube de lazer de Itu com infraestrutura completa para você aproveitar todos os momentos com quem
            você ama
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-4 h-full text-center hover:shadow-lg transition-all hover:scale-105 border-2 hover:border-[#c01616]/20">
                <div className="w-12 h-12 bg-[#c01616]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <amenity.icon className="h-6 w-6 text-[#c01616]" />
                </div>
                <h3 className="font-bold text-sm mb-1">{amenity.title}</h3>
                <p className="text-xs text-muted-foreground">{amenity.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            E muito mais: quadra poliesportiva, quadra de tênis, beach tennis, minigolf, pista de skate, praça luau,
            espaço picnic e bicicletário
          </p>
        </motion.div>
      </div>
    </section>
  )
}
