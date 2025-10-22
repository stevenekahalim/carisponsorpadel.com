'use client'

import { motion } from 'framer-motion'

export default function SocialProof() {
  const brands = [
    'BCA',
    'Mandiri',
    'Honda',
    'Samsung',
    'Adidas',
    'Wilson',
    'Head',
    'Gojek',
  ]

  return (
    <section className="section-padding bg-light-gray">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-premium-navy mb-4">
            Brands yang Percaya Kami
          </h2>
          <p className="text-lg text-gray-600">
            Bergabung dengan brand-brand ternama yang sudah sukses sponsorship padel
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="text-2xl font-bold text-gray-400 hover:text-premium-navy transition-colors grayscale hover:grayscale-0">
                {brand}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
