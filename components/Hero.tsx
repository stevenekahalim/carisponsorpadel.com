'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import SponsorForm from './SponsorForm'
import VenueForm from './VenueForm'

export default function Hero() {
  const [sponsorFormOpen, setSponsorFormOpen] = useState(false)
  const [venueFormOpen, setVenueFormOpen] = useState(false)

  // Animated counters
  const [venues, setVenues] = useState(0)
  const [brands, setBrands] = useState(0)
  const [funding, setFunding] = useState(0)

  useEffect(() => {
    // Animate venues counter
    const venuesInterval = setInterval(() => {
      setVenues((prev) => {
        if (prev >= 50) {
          clearInterval(venuesInterval)
          return 50
        }
        return prev + 1
      })
    }, 20)

    // Animate brands counter
    const brandsInterval = setInterval(() => {
      setBrands((prev) => {
        if (prev >= 20) {
          clearInterval(brandsInterval)
          return 20
        }
        return prev + 1
      })
    }, 40)

    // Animate funding counter
    const fundingInterval = setInterval(() => {
      setFunding((prev) => {
        if (prev >= 2) {
          clearInterval(fundingInterval)
          return 2
        }
        return prev + 0.1
      })
    }, 50)

    return () => {
      clearInterval(venuesInterval)
      clearInterval(brandsInterval)
      clearInterval(fundingInterval)
    }
  }, [])

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient - Professional look without external image dependency */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-premium-navy via-premium-navy to-padel-green">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,.03) 10px,
                rgba(255,255,255,.03) 20px
              )`
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 section-container py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Platform Sponsorship Padel
              <br />
              <span className="text-padel-green">#1 Indonesia</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Hubungkan brand Anda dengan 50+ venues dan ribuan pemain padel premium
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-action-orange hover:bg-action-orange/90 text-white text-lg px-8 py-6 transform hover:scale-105 transition-all"
                onClick={() => setSponsorFormOpen(true)}
              >
                SAYA BRAND SPONSOR
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-premium-navy border-2 border-white hover:bg-gray-100 text-lg px-8 py-6 transform hover:scale-105 transition-all"
                onClick={() => setVenueFormOpen(true)}
              >
                SAYA PUNYA VENUE/EVENT
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-padel-green mb-2">
                  {venues}+
                </div>
                <div className="text-gray-200">Venues Partner</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-padel-green mb-2">
                  {brands}+
                </div>
                <div className="text-gray-200">Brand Terpercaya</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-padel-green mb-2">
                  IDR {funding.toFixed(1)}M+
                </div>
                <div className="text-gray-200">Dana Sponsor</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Forms */}
      <SponsorForm open={sponsorFormOpen} onOpenChange={setSponsorFormOpen} />
      <VenueForm open={venueFormOpen} onOpenChange={setVenueFormOpen} />
    </>
  )
}
