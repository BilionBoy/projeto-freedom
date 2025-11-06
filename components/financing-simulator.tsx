"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp } from "lucide-react"

export function FinancingSimulator() {
  const [propertyValue, setPropertyValue] = useState(350000)
  const [downPayment, setDownPayment] = useState(70000)
  const [months, setMonths] = useState(360)

  const financedAmount = propertyValue - downPayment
  const monthlyRate = 0.009 // 0.9% ao mês
  const monthlyPayment =
    (financedAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)

  return (
    <section id="financing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Simule seu Financiamento</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Descubra a melhor opção para realizar seu sonho. Simule GRATUITAMENTE agora!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Calculadora</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <Label htmlFor="property-value" className="text-base mb-3 block">
                    Valor do Imóvel
                  </Label>
                  <Input
                    id="property-value"
                    type="text"
                    value={`R$ ${propertyValue.toLocaleString("pt-BR")}`}
                    readOnly
                    className="text-lg font-medium"
                  />
                  <Slider
                    value={[propertyValue]}
                    onValueChange={(value) => setPropertyValue(value[0])}
                    min={200000}
                    max={800000}
                    step={10000}
                    className="mt-4"
                  />
                </div>

                <div>
                  <Label htmlFor="down-payment" className="text-base mb-3 block">
                    Entrada (20%)
                  </Label>
                  <Input
                    id="down-payment"
                    type="text"
                    value={`R$ ${downPayment.toLocaleString("pt-BR")}`}
                    readOnly
                    className="text-lg font-medium"
                  />
                  <Slider
                    value={[downPayment]}
                    onValueChange={(value) => setDownPayment(value[0])}
                    min={propertyValue * 0.1}
                    max={propertyValue * 0.5}
                    step={5000}
                    className="mt-4"
                  />
                </div>

                <div>
                  <Label htmlFor="months" className="text-base mb-3 block">
                    Prazo: {months} meses ({Math.floor(months / 12)} anos)
                  </Label>
                  <Slider
                    value={[months]}
                    onValueChange={(value) => setMonths(value[0])}
                    min={120}
                    max={420}
                    step={12}
                    className="mt-4"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6" />
                  <h3 className="font-serif text-xl font-bold">Resultado da Simulação</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm opacity-90 mb-1">Valor Financiado</p>
                    <p className="text-3xl font-bold">R$ {financedAmount.toLocaleString("pt-BR")}</p>
                  </div>
                  <div className="border-t border-primary-foreground/20 pt-4">
                    <p className="text-sm opacity-90 mb-1">Parcela Mensal Estimada</p>
                    <p className="text-4xl font-bold">
                      R$ {monthlyPayment.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-xl">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  * Simulação com taxa de juros de 0,9% ao mês. Valores aproximados para fins de simulação. Entre em
                  contato para condições reais de financiamento.
                </p>
              </div>

              <Button size="lg" className="w-full text-lg py-6">
                Solicitar Proposta Personalizada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
