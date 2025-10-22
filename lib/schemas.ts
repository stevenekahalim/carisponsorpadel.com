import { z } from 'zod'

// Phone number validation for Indonesia
const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/

export const sponsorFormSchema = z.object({
  namaBrand: z.string().min(2, 'Nama brand harus minimal 2 karakter'),
  namaAnda: z.string().min(2, 'Nama harus minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  noWhatsApp: z.string().regex(phoneRegex, 'Nomor WhatsApp tidak valid'),
  budgetSponsorship: z.string().min(1, 'Pilih budget sponsorship'),
  kotaTarget: z.array(z.string()).optional(),
  objektifSponsorship: z.array(z.string()).optional(),
  pesanTambahan: z.string().optional(),
})

export const venueFormSchema = z.object({
  namaVenue: z.string().min(2, 'Nama venue harus minimal 2 karakter'),
  namaPengelola: z.string().min(2, 'Nama pengelola harus minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  noWhatsApp: z.string().regex(phoneRegex, 'Nomor WhatsApp tidak valid'),
  kota: z.string().min(1, 'Pilih kota'),
  jumlahCourt: z.number().min(1, 'Minimal 1 court').max(20, 'Maksimal 20 court'),
  jumlahEventPerBulan: z.number().optional(),
  rataRataPeserta: z.number().optional(),
  sudahPunyaSponsor: z.enum(['Ya', 'Tidak']),
  butuhSponsorUntuk: z.array(z.string()).optional(),
  websiteInstagram: z.string().url('URL tidak valid').optional().or(z.literal('')),
})

export type SponsorFormData = z.infer<typeof sponsorFormSchema>
export type VenueFormData = z.infer<typeof venueFormSchema>
