"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact-form";

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão Flutuante Freeda */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Fale com a Freeda, sua assistente virtual"
        className="
          fixed bottom-6 right-6 z-50 group
          cursor-pointer
          focus:outline-none
        "
      >
        <div className="relative">
          {/* Ondas suaves */}
          <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse" />

          {/* Botão principal */}
          <div
            className="
              relative w-16 h-16 rounded-full
              bg-primary
              shadow-xl
              flex items-center justify-center

              transition-all duration-300 ease-out
              group-hover:scale-110
              group-hover:shadow-2xl
              group-hover:-translate-y-1

              active:scale-95

              focus-visible:ring-4
              focus-visible:ring-primary/40
            "
          >
            {/* Anel branco para destacar avatar */}
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/freeda.png"
                alt="Freeda - Assistente virtual"
                width={40}
                height={40}
                priority
                className="rounded-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Tooltip */}
        <div
          className="
            absolute bottom-1/2 right-20 translate-y-1/2
            bg-primary text-primary-foreground
            px-4 py-2 rounded-lg shadow-lg
            whitespace-nowrap

            opacity-0 translate-x-2
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300

            pointer-events-none
          "
        >
          <span className="text-sm font-medium">Fale com um especialista</span>

          {/* Seta */}
          <div
            className="
              absolute top-1/2 -right-2 -translate-y-1/2
              w-0 h-0
              border-t-8 border-t-transparent
              border-b-8 border-b-transparent
              border-l-8 border-l-primary
            "
          />
        </div>
      </button>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Fale com um Especialista
            </DialogTitle>
            <DialogDescription>
              Nossa equipe está pronta para ajudar você a realizar o sonho da
              casa própria.
            </DialogDescription>
          </DialogHeader>

          <ContactForm onSuccess={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
