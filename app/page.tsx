import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import PricingSection from '@/components/PricingSection'
import VenueShowcase from '@/components/VenueShowcase'
import SocialProof from '@/components/SocialProof'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import UrgencyNotification from '@/components/UrgencyNotification'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <PricingSection />
      <VenueShowcase />
      <SocialProof />
      <Footer />
      <WhatsAppButton />
      <UrgencyNotification />
    </main>
  )
}
