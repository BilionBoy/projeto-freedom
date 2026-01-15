"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Phone,
  Mail,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    // Step 1 - Informações Básicas
    name: "",
    email: "",
    phone: "",
    // Step 2 - Interesse
    interest: "", // comprar, alugar, investir, vender
    // Step 3 - Detalhes do Imóvel
    propertyType: "", // apartamento, casa, terreno, comercial
    bedrooms: "", // 1, 2, 3, 4+
    priceRange: "", // até 200k, 200k-400k, 400k-600k, 600k+
    location: "", // região preferida
    // Step 4 - Mensagem
    message: "",
  });

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.interest;
      case 3:
        return (
          formData.propertyType && formData.bedrooms && formData.priceRange
        );
      case 4:
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps && isStepValid()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      interest,
      propertyType,
      bedrooms,
      priceRange,
      location,
      message,
    } = formData;

    const whatsappNumber = "5511960606405";

    const text = `
🏠 Novo contato - Freedom Imobiliária

👤 *Dados Pessoais:*
Nome: ${name}
E-mail: ${email}
Telefone: ${phone}

🎯 *Interesse:*
Objetivo: ${interest}

🏘️ *Preferências do Imóvel:*
Tipo: ${propertyType}
Quartos: ${bedrooms}
Faixa de Preço: ${priceRange}
${location ? `Localização: ${location}` : ""}
${message ? `💬 *Mensagem:*\n${message}` : ""}
    `;

    const encodedText = encodeURIComponent(text.trim());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      propertyType: "",
      bedrooms: "",
      priceRange: "",
      location: "",
      message: "",
    });
    setCurrentStep(1);

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>
            Etapa {currentStep} de {totalSteps}
          </span>
          <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in-50 duration-300">
            <div>
              <h3 className="text-lg font-semibold mb-1">Vamos começar!</h3>
              <p className="text-sm text-muted-foreground">
                Como podemos te chamar?
              </p>
            </div>

            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Seu nome"
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="seu@email.com"
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="(00) 00000-0000"
                required
                className="mt-2"
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4 animate-in fade-in-50 duration-300">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Qual é o seu objetivo?
              </h3>
              <p className="text-sm text-muted-foreground">
                Isso nos ajuda a te atender melhor
              </p>
            </div>

            <RadioGroup
              value={formData.interest}
              onValueChange={(value) =>
                setFormData({ ...formData, interest: value })
              }
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                <RadioGroupItem value="Comprar imóvel" id="comprar" />
                <Label htmlFor="comprar" className="cursor-pointer flex-1">
                  <div className="font-medium">Comprar imóvel</div>
                  <div className="text-sm text-muted-foreground">
                    Quero adquirir um imóvel
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                <RadioGroupItem value="Alugar imóvel" id="alugar" />
                <Label htmlFor="alugar" className="cursor-pointer flex-1">
                  <div className="font-medium">Alugar imóvel</div>
                  <div className="text-sm text-muted-foreground">
                    Estou procurando para alugar
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                <RadioGroupItem value="Investir em imóveis" id="investir" />
                <Label htmlFor="investir" className="cursor-pointer flex-1">
                  <div className="font-medium">Investir em imóveis</div>
                  <div className="text-sm text-muted-foreground">
                    Quero investir no mercado imobiliário
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                <RadioGroupItem value="Vender meu imóvel" id="vender" />
                <Label htmlFor="vender" className="cursor-pointer flex-1">
                  <div className="font-medium">Vender meu imóvel</div>
                  <div className="text-sm text-muted-foreground">
                    Tenho um imóvel para vender
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4 animate-in fade-in-50 duration-300">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Conte mais sobre suas preferências
              </h3>
              <p className="text-sm text-muted-foreground">
                Vamos encontrar o imóvel ideal para você
              </p>
            </div>

            <div>
              <Label htmlFor="propertyType">Tipo de Imóvel</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) =>
                  setFormData({ ...formData, propertyType: value })
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Apartamento">Apartamento</SelectItem>
                  <SelectItem value="Casa">Casa</SelectItem>
                  <SelectItem value="Terreno">Terreno</SelectItem>
                  <SelectItem value="Imóvel Comercial">
                    Imóvel Comercial
                  </SelectItem>
                  <SelectItem value="Cobertura">Cobertura</SelectItem>
                  <SelectItem value="Ainda não decidi">
                    Ainda não decidi
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="bedrooms">Quantidade de Quartos</Label>
              <Select
                value={formData.bedrooms}
                onValueChange={(value) =>
                  setFormData({ ...formData, bedrooms: value })
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1 quarto">1 quarto</SelectItem>
                  <SelectItem value="2 quartos">2 quartos</SelectItem>
                  <SelectItem value="3 quartos">3 quartos</SelectItem>
                  <SelectItem value="4 ou mais quartos">
                    4 ou mais quartos
                  </SelectItem>
                  <SelectItem value="Não se aplica">Não se aplica</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="priceRange">Faixa de Preço</Label>
              <Select
                value={formData.priceRange}
                onValueChange={(value) =>
                  setFormData({ ...formData, priceRange: value })
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Selecione a faixa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Até R$ 200.000">Até R$ 200.000</SelectItem>
                  <SelectItem value="R$ 200.000 - R$ 400.000">
                    R$ 200.000 - R$ 400.000
                  </SelectItem>
                  <SelectItem value="R$ 400.000 - R$ 600.000">
                    R$ 400.000 - R$ 600.000
                  </SelectItem>
                  <SelectItem value="R$ 600.000 - R$ 1.000.000">
                    R$ 600.000 - R$ 1.000.000
                  </SelectItem>
                  <SelectItem value="Acima de R$ 1.000.000">
                    Acima de R$ 1.000.000
                  </SelectItem>
                  <SelectItem value="Prefiro não informar">
                    Prefiro não informar
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="location">Localização Preferida (opcional)</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                placeholder="Ex: Itu, Bairro Nossa Senhora Aparecida"
                className="mt-2"
              />
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4 animate-in fade-in-50 duration-300">
            <div>
              <h3 className="text-lg font-semibold mb-1">Quase lá!</h3>
              <p className="text-sm text-muted-foreground">
                Quer adicionar mais alguma informação?
              </p>
            </div>

            <div>
              <Label htmlFor="message">Mensagem Adicional (opcional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Alguma observação ou preferência especial que queira compartilhar?"
                rows={4}
                className="mt-2"
              />
            </div>

            <div className="bg-primary/5 p-4 rounded-lg space-y-2">
              <p className="text-sm font-medium">Resumo do seu interesse:</p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  <strong>Objetivo:</strong> {formData.interest}
                </p>
                <p>
                  <strong>Tipo:</strong> {formData.propertyType}
                </p>
                <p>
                  <strong>Quartos:</strong> {formData.bedrooms}
                </p>
                <p>
                  <strong>Faixa de Preço:</strong> {formData.priceRange}
                </p>
                {formData.location && (
                  <p>
                    <strong>Localização:</strong> {formData.location}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3 pt-4">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              className="flex-1 gap-2 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar
            </Button>
          )}

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              disabled={!isStepValid()}
              className="flex-1 gap-2"
            >
              Próximo
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" className="flex-1 gap-2">
              <Send className="h-4 w-4" />
              Enviar Mensagem
            </Button>
          )}
        </div>
      </form>

      {/* Informações de contato */}
      <div className="border-t pt-6 space-y-4">
        <h3 className="font-semibold text-lg mb-4">Outras formas de contato</h3>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Telefone</p>
            <a
              href="tel:+5511960606405"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              (11) 96060-6405
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">WhatsApp</p>
            <a
              href="https://wa.me/5511960606405"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              (11) 96060-6405
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">E-mail</p>
            <a
              href="mailto:freedom.planejamento@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              freedom.planejamento@gmail.com
            </a>
          </div>
        </div>

        <div className="bg-primary/5 p-4 rounded-lg mt-4">
          <p className="font-medium text-sm mb-2">Horário de Atendimento</p>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>Segunda a Sexta: 9h às 18h</p>
            <p>Sábado: 9h às 13h</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>
      </div>
    </div>
  );
}
