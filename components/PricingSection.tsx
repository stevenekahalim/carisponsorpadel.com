'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from './ui/button'
import SponsorForm from './SponsorForm'

export default function PricingSection() {
  const [sponsorFormOpen, setSponsorFormOpen] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  return (
    <>
      <section id="pricing" className="section-padding bg-white scroll-mt-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-premium-navy mb-4">
              Paket Sponsorship
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan budget dan objektif marketing Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bronze Package */}
            <motion.div {...fadeInUp} className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-padel-green text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold text-center">BRONZE</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-premium-navy">
                    Mulai dari
                  </p>
                  <p className="text-4xl font-bold text-padel-green mt-2">
                    IDR 50 Juta
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-padel-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">1 Tournament sponsorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-padel-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">1 Kota pilihan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-padel-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Logo di venue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-padel-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Social media mention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-padel-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Laporan hasil event</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-padel-green hover:bg-padel-green/90 text-white"
                  onClick={() => setSponsorFormOpen(true)}
                >
                  PILIH PAKET
                </Button>
              </div>
            </motion.div>

            {/* Silver Package - Featured */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="border-2 border-action-orange rounded-lg shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-action-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>

              <div className="bg-premium-navy text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold text-center">SILVER</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-premium-navy">
                    Mulai dari
                  </p>
                  <p className="text-4xl font-bold text-action-orange mt-2">
                    IDR 200 Juta
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-action-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">3 Tournament sponsorships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-action-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">3 Kota pilihan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-action-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Premium logo placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-action-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Booth/activation area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-action-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Social media campaign</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-action-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-action-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Full analytics report</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-action-orange hover:bg-action-orange/90 text-white"
                  onClick={() => setSponsorFormOpen(true)}
                >
                  PILIH PAKET
                </Button>
              </div>
            </motion.div>

            {/* Gold Package */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold text-center">GOLD</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-premium-navy">
                    Custom Package
                  </p>
                  <p className="text-xl text-gray-600 mt-2">
                    Sesuai kebutuhan
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unlimited tournaments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Nationwide coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Title sponsor opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Large-scale activations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Content creation & distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Celebrity/influencer partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Priority support & insights</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-premium-navy hover:bg-premium-navy/90 text-white"
                  onClick={() => setSponsorFormOpen(true)}
                >
                  KONSULTASI
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SponsorForm open={sponsorFormOpen} onOpenChange={setSponsorFormOpen} />
    </>
  )
}
