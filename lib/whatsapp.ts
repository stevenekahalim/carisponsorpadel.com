import { SponsorFormData, VenueFormData } from './schemas'

export function generateWhatsAppLink(phone: string, message: string): string {
  // Clean phone number - remove all non-numeric characters
  let cleanPhone = phone.replace(/\D/g, '')

  // Ensure it starts with 62 (Indonesia country code)
  if (cleanPhone.startsWith('0')) {
    cleanPhone = '62' + cleanPhone.slice(1)
  } else if (!cleanPhone.startsWith('62')) {
    cleanPhone = '62' + cleanPhone
  }

  // URL encode the message
  const encodedMessage = encodeURIComponent(message)

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`
}

export function getSponsorWhatsAppMessage(data: SponsorFormData): string {
  const cities = data.kotaTarget?.join(', ') || 'Tidak disebutkan'
  const objectives = data.objektifSponsorship?.join(', ') || 'Tidak disebutkan'

  return `Halo CariSponsorPadel! 👋

Saya tertarik untuk sponsorship padel:

🏢 Nama Brand: ${data.namaBrand}
👤 Nama: ${data.namaAnda}
📧 Email: ${data.email}
📱 WhatsApp: ${data.noWhatsApp}
💰 Budget: ${data.budgetSponsorship}
🌆 Kota Target: ${cities}
🎯 Objektif: ${objectives}

${data.pesanTambahan ? `📝 Pesan: ${data.pesanTambahan}` : ''}

Mohon informasi lebih lanjut. Terima kasih!`
}

export function getVenueWhatsAppMessage(data: VenueFormData): string {
  const kebutuhanSponsor = data.butuhSponsorUntuk?.join(', ') || 'Tidak disebutkan'

  return `Halo CariSponsorPadel! 👋

Saya ingin mendaftarkan venue:

🏟️ Nama Venue: ${data.namaVenue}
👤 Nama Pengelola: ${data.namaPengelola}
📧 Email: ${data.email}
📱 WhatsApp: ${data.noWhatsApp}
🌆 Kota: ${data.kota}
🎾 Jumlah Court: ${data.jumlahCourt}
📅 Event/Bulan: ${data.jumlahEventPerBulan || 'Tidak disebutkan'}
👥 Rata-rata Peserta: ${data.rataRataPeserta || 'Tidak disebutkan'}
💼 Status Sponsor: ${data.sudahPunyaSponsor}
🎯 Kebutuhan: ${kebutuhanSponsor}

${data.websiteInstagram ? `🔗 Website/IG: ${data.websiteInstagram}` : ''}

Mohon informasi untuk join sebagai partner. Terima kasih!`
}
