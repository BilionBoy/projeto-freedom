import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FreedomShowcase } from "@/components/freedom-showcase"
import { FreedomAtende } from "@/components/freedom-atende"
import { Features } from "@/components/features"
import { ImmersiveAmenities } from "@/components/immersive-amenities"
import { Gallery } from "@/components/gallery"
import { FloorPlans } from "@/components/floor-plans"
import { VirtualTours } from "@/components/virtual-tours"
import { Location } from "@/components/location"
import { FinancingSimulator } from "@/components/financing-simulator"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { EnhancedHeader } from "@/components/enhanced-header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <EnhancedHeader currentProperty="bella-verona" />
      <Hero />
      <FreedomShowcase />
      <FreedomAtende />
      <About />
      <Features />
      <ImmersiveAmenities />
      <Gallery />
      <FloorPlans />
      <VirtualTours />
      <Location />
      <FinancingSimulator />
      <Contact />
      <Footer />
    </main>
  )
}
