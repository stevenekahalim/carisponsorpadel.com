'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Bounce animation every 30 seconds
    const interval = setInterval(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 3000)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-premium-navy px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            Chat dengan tim kami
          </motion.div>
        )}

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 28,
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </motion.a>
      </div>
    </motion.div>
  )
}
