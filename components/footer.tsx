import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* LOGO / DESCRIÇÃO */}
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">
                <span className="text-[#c01616]">FREEDOM</span>
                <br />
                Imobiliária
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Chegou a sua hora de ter LIBERDADE. Realize seu sonho com a
                FREEDOM!
              </p>
            </div>

            {/* NAVEGAÇÃO */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#about"
                    className="text-white/70 hover:text-[#c01616] transition-colors"
                  >
                    O Empreendimento
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-white/70 hover:text-[#c01616] transition-colors"
                  >
                    Diferenciais
                  </Link>
                </li>
                <li>
                  <Link
                    href="#floor-plans"
                    className="text-white/70 hover:text-[#c01616] transition-colors"
                  >
                    Plantas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#virtual-tours"
                    className="text-white/70 hover:text-[#c01616] transition-colors"
                  >
                    Tour Virtual
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTATO */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>(11) 96060-6405</li>
                <li>freedom@gmail.com</li>
                <li>Itu - SP</li>
              </ul>
            </div>

            {/* REDES SOCIAIS */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Youtube, label: "YouTube" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="
                      w-10 h-10 
                      bg-white/10 
                      rounded-lg 
                      flex items-center justify-center
                      hover:bg-[#c01616]
                      hover:text-white
                      transition-colors
                      cursor-pointer
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
              <p>© 2025 FREEDOM Imobiliária. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <Link
                  href="#"
                  className="hover:text-[#c01616] transition-colors"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#c01616] transition-colors"
                >
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
