"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // ✅ Número correto (SEM + e SEM espaços)
    const whatsappNumber = "5511960606405";

    // ✅ Mensagem formatada
    const text = `
Olá! Gostaria de mais informações.

Nome: ${name}
E-mail: ${email}
Telefone: ${phone}
Mensagem: ${message}
    `;

    // ✅ Encode correto
    const encodedText = encodeURIComponent(text.trim());

    // ✅ URL WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // ✅ Abre WhatsApp
    window.open(whatsappUrl, "_blank");

    // ✅ (Opcional) Limpa formulário depois do envio
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
              Entre em Contato
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Nossa equipe está pronta para ajudar você a realizar o sonho da
              casa própria. Fale conosco agora!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Como podemos ajudar?"
                    rows={5}
                    className="mt-2"
                  />
                </div>

                {/* ✅ BOTÃO COM CURSOR + FEEDBACK */}
                <Button
                  type="submit"
                  size="lg"
                  className="
                    w-full gap-2 
                    cursor-pointer hover:cursor-pointer
                    transition-transform
                    hover:scale-[1.01]
                    active:scale-[0.98]
                  "
                >
                  <Send className="h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* INFO LATERAL */}
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <h3 className="font-serif text-2xl font-bold mb-6">
                  Fale Conosco
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Telefone</p>
                      <a
                        href="tel:+5511960606405"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (11) 96060-6405
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/5511960606405"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (11) 96060-6405
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">E-mail</p>
                      <a
                        href="mailto:julianelosilla@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        julianelosilla@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-sm">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
