'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function UrgencyNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isClosed, setIsClosed] = useState(false)

  const messages = [
    '🔥 Venue PIK Padel Club baru saja join - 2 menit lalu',
    '💼 Brand X sedang review paket Silver',
    '✅ Tournament Jakarta Open tersisa 2 slot sponsor',
    '🎾 15 venues baru join bulan ini',
  ]

  useEffect(() => {
    // Show after 5 seconds
    const showTimer = setTimeout(() => {
      if (!isClosed) {
        setIsVisible(true)
      }
    }, 5000)

    return () => clearTimeout(showTimer)
  }, [isClosed])

  useEffect(() => {
    if (!isVisible || isClosed) return

    // Cycle messages every 10 seconds
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [isVisible, isClosed, messages.length])

  const handleClose = () => {
    setIsClosed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && !isClosed && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 z-40 hidden md:block"
        >
          <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>

            <AnimatePresence mode="wait">
              <motion.p
                key={currentMessageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-premium-navy pr-6"
              >
                {messages[currentMessageIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
