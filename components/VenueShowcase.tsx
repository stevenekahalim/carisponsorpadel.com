'use client'

import { motion } from 'framer-motion'
import { MapPin, Users } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

export default function VenueShowcase() {
  const venues = [
    { name: 'Kemang Padel Club', city: 'Jakarta', courts: 4, image: 'https://via.placeholder.com/400x300/00B140/FFFFFF?text=Kemang+Padel' },
    { name: 'Surabaya Padel Center', city: 'Surabaya', courts: 6, image: 'https://via.placeholder.com/400x300/1E3A5F/FFFFFF?text=Surabaya+Padel' },
    { name: 'Bali Padel Paradise', city: 'Bali', courts: 5, image: 'https://via.placeholder.com/400x300/00B140/FFFFFF?text=Bali+Padel' },
    { name: 'Bandung Elite Padel', city: 'Bandung', courts: 4, image: 'https://via.placeholder.com/400x300/1E3A5F/FFFFFF?text=Bandung+Padel' },
    { name: 'Medan Padel Arena', city: 'Medan', courts: 3, image: 'https://via.placeholder.com/400x300/00B140/FFFFFF?text=Medan+Padel' },
    { name: 'Yogyakarta Padel House', city: 'Yogyakarta', courts: 4, image: 'https://via.placeholder.com/400x300/1E3A5F/FFFFFF?text=Yogya+Padel' },
    { name: 'Semarang Padel Club', city: 'Semarang', courts: 3, image: 'https://via.placeholder.com/400x300/00B140/FFFFFF?text=Semarang+Padel' },
    { name: 'Makassar Padel Court', city: 'Makassar', courts: 4, image: 'https://via.placeholder.com/400x300/1E3A5F/FFFFFF?text=Makassar+Padel' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-navy mb-4">
            Venue Partner Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bergabung dengan 50+ venue premium di seluruh Indonesia
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {venues.map((venue, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-1"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={venue.image}
                        alt={venue.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-premium-navy mb-2">
                        {venue.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{venue.city}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{venue.courts} courts</span>
                        </div>
                      </div>
                      <div className="inline-block bg-padel-green/20 text-padel-green px-3 py-1 rounded-full text-xs font-medium">
                        Available for sponsorship
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
