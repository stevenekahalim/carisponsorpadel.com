'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, MapPin, Handshake, Building, DollarSign, Trophy } from 'lucide-react'

export default function HowItWorks() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  return (
    <section id="cara-kerja" className="section-padding bg-light-gray scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-navy mb-4">
            Bagaimana Cara Kerjanya?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proses mudah dan transparan untuk sponsor dan venue
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* For Sponsors */}
          <motion.div {...fadeInUp} id="untuk-sponsor">
            <div className="bg-white rounded-lg p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-premium-navy mb-8 text-center">
                Untuk Brand Sponsor
              </h3>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-padel-green/10 rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-padel-green" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-premium-navy mb-2">
                      1. Pilih Paket
                    </h4>
                    <p className="text-gray-600">
                      Pilih paket sponsorship yang sesuai dengan budget dan objektif marketing Anda
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-padel-green/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-padel-green" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-premium-navy mb-2">
                      2. Pilih Lokasi & Venue
                    </h4>
                    <p className="text-gray-600">
                      Tentukan kota target dan venue yang sesuai dengan demografi target market Anda
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-padel-green/10 rounded-full flex items-center justify-center">
                      <Handshake className="w-6 h-6 text-padel-green" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-premium-navy mb-2">
                      3. Deal Closed
                    </h4>
                    <p className="text-gray-600">
                      Kami koordinasi semua detail, eksekusi sponsorship, dan berikan laporan hasil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* For Venues */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} id="untuk-venue">
            <div className="bg-white rounded-lg p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-premium-navy mb-8 text-center">
                Untuk Venue/Event
              </h3>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-action-orange/10 rounded-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-action-orange" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-premium-navy mb-2">
                      1. Daftar Venue Gratis
                    </h4>
                    <p className="text-gray-600">
                      Daftarkan venue atau event Anda di platform kami tanpa biaya pendaftaran
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-action-orange/10 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-action-orange" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-premium-navy mb-2">
                      2. Terima Penawaran Sponsor
                    </h4>
                    <p className="text-gray-600">
                      Terima penawaran sponsorship dari brand-brand premium yang cocok dengan venue Anda
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-action-orange/10 rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-action-orange" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-premium-navy mb-2">
                      3. Fokus ke Event
                    </h4>
                    <p className="text-gray-600">
                      Dapatkan dana sponsor dan fokus memberikan experience terbaik untuk pemain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
