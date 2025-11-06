import { EnhancedHeader } from "@/components/enhanced-header"
import { MaximHero } from "@/components/maxim/hero"
import { MaximAbout } from "@/components/maxim/about"
import { MaximFeatures } from "@/components/maxim/features"
import { MaximAmenities } from "@/components/maxim/amenities"
import { MaximGallery } from "@/components/maxim/gallery"
import { MaximFloorPlans } from "@/components/maxim/floor-plans"
import { MaximLocation } from "@/components/maxim/location"
import { FreedomAtende } from "@/components/freedom-atende"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function MaximHomeClubPage() {
  return (
    <main className="min-h-screen">
      <EnhancedHeader currentProperty="maxim-home-club" />
      <MaximHero />
      <MaximAbout />
      <MaximFeatures />
      <MaximAmenities />
      <MaximGallery />
      <MaximFloorPlans />
      <MaximLocation />
      <FreedomAtende />
      <Contact />
      <Footer />
    </main>
  )
}
