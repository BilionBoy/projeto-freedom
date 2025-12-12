import { EnhancedHeader } from "@/components/enhanced-header"
import { ParquePassarosHero } from "@/components/parque-dos-passaros/hero"
import { ParquePassarosAbout } from "@/components/parque-dos-passaros/about"
import { ParquePassarosFeatures } from "@/components/parque-dos-passaros/features"
import { ParquePassarosAmenities } from "@/components/parque-dos-passaros/amenities"
import { ParquePassarosGallery } from "@/components/parque-dos-passaros/gallery"
import { ParquePassarosFloorPlans } from "@/components/parque-dos-passaros/floor-plans"
import { ParquePassarosLocation } from "@/components/parque-dos-passaros/location"
import { FreedomAtende } from "@/components/freedom-atende"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { VirtuallTours } from "@/components/vista-parque/virtual-tours"

export default function ParquePassarosPage() {
  return (
    <main className="min-h-screen">
      <EnhancedHeader currentProperty="parque-dos-passaros" />
      <ParquePassarosHero />
      <ParquePassarosAbout />
      <ParquePassarosFeatures />
      <ParquePassarosAmenities />
      <ParquePassarosGallery />
      <ParquePassarosFloorPlans />
      <VirtuallTours />
      <ParquePassarosLocation />
      <FreedomAtende />
      <Contact />
      <Footer />
    </main>
  )
}
