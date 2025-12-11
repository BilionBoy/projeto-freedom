import { VistaParqueHero } from "@/components/vista-parque/hero"
import { VistaParqueAbout } from "@/components/vista-parque/about"
import { VistaParqueFeatures } from "@/components/vista-parque/features"
import { VistaParqueAmenities } from "@/components/vista-parque/amenities"
import { VistaParqueGallery } from "@/components/vista-parque/gallery"
import { VistaParqueFloorPlans } from "@/components/vista-parque/floor-plans"
import { VistaParqueLocation } from "@/components/vista-parque/location"
import { FreedomAtende } from "@/components/freedom-atende"
import { FinancingSimulator } from "@/components/financing-simulator"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { EnhancedHeader } from "@/components/enhanced-header"
import { VirtuallTours } from "@/components/vista-parque/virtual-tours"

export default function VistaParquePage() {
  return (
    <main className="min-h-screen">
      <EnhancedHeader currentProperty="vista-parque" />
      <VistaParqueHero />
      <VistaParqueAbout />
      <VistaParqueFeatures />
      <VistaParqueAmenities />
      <VistaParqueGallery />
      <VistaParqueFloorPlans />
      <VirtuallTours />
      <VistaParqueLocation />
      <FreedomAtende />
      <FinancingSimulator />
      <Contact />
      <Footer />
    </main>
  )
}
