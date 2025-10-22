'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-premium-navy">
              CariSponsorPadel
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('untuk-sponsor')}
              className="text-premium-navy hover:text-padel-green transition-colors font-medium"
            >
              Untuk Sponsor
            </button>
            <button
              onClick={() => scrollToSection('untuk-venue')}
              className="text-premium-navy hover:text-padel-green transition-colors font-medium"
            >
              Untuk Venue
            </button>
            <button
              onClick={() => scrollToSection('cara-kerja')}
              className="text-premium-navy hover:text-padel-green transition-colors font-medium"
            >
              Cara Kerja
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-premium-navy hover:text-padel-green transition-colors font-medium"
            >
              Paket
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-padel-green hover:bg-padel-green/90 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                +62 812-3456-7890
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-premium-navy" />
            ) : (
              <Menu className="w-6 h-6 text-premium-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('untuk-sponsor')}
                className="text-premium-navy hover:text-padel-green transition-colors font-medium text-left"
              >
                Untuk Sponsor
              </button>
              <button
                onClick={() => scrollToSection('untuk-venue')}
                className="text-premium-navy hover:text-padel-green transition-colors font-medium text-left"
              >
                Untuk Venue
              </button>
              <button
                onClick={() => scrollToSection('cara-kerja')}
                className="text-premium-navy hover:text-padel-green transition-colors font-medium text-left"
              >
                Cara Kerja
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-premium-navy hover:text-padel-green transition-colors font-medium text-left"
              >
                Paket
              </button>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-padel-green hover:bg-padel-green/90 text-white w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  +62 812-3456-7890
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
