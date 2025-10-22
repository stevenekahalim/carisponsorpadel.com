'use client'

import { MessageCircle, Mail, Instagram } from 'lucide-react'
import { Button } from './ui/button'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="bg-premium-navy text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">CariSponsorPadel</h3>
            <p className="text-gray-300 mb-6">
              Platform sponsorship padel #1 Indonesia. Menghubungkan brand dengan venue dan tournament padel premium.
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-padel-green hover:bg-padel-green/90 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('untuk-sponsor')}
                  className="text-gray-300 hover:text-padel-green transition-colors"
                >
                  Untuk Sponsor
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('untuk-venue')}
                  className="text-gray-300 hover:text-padel-green transition-colors"
                >
                  Untuk Venue
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cara-kerja')}
                  className="text-gray-300 hover:text-padel-green transition-colors"
                >
                  Cara Kerja
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-300 hover:text-padel-green transition-colors"
                >
                  Paket Sponsorship
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-padel-green transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>+62 812-3456-7890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@carisponsorpadel.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-padel-green transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>hello@carisponsorpadel.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/carisponsorpadel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-padel-green transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@carisponsorpadel</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CariSponsorPadel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
