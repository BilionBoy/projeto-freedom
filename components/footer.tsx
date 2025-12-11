import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">
                <span className="text-primary">FREEDOM</span>
                <br />
                Imobiliária
              </h3>
              <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                Chegou a sua hora de ter LIBERDADE. Realize seu sonho com a FREEDOM!
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    O Empreendimento
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Diferenciais
                  </Link>
                </li>
                <li>
                  <Link
                    href="#floor-plans"
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    Plantas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#virtual-tours"
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    Tour Virtual
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>(11) 99681-0021</li>
                <li>julianelosilla@gmail.com</li>
                <li>Itu - SP</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
              <p>© 2025 FREEDOM Imobiliária. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
