'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Checkbox } from './ui/checkbox'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { venueFormSchema, type VenueFormData } from '@/lib/schemas'

interface VenueFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function VenueForm({ open, onOpenChange }: VenueFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<VenueFormData>({
    resolver: zodResolver(venueFormSchema),
  })

  const butuhSponsorUntuk = watch('butuhSponsorUntuk') || []

  const handleSponsorUntukChange = (item: string, checked: boolean) => {
    const updated = checked
      ? [...butuhSponsorUntuk, item]
      : butuhSponsorUntuk.filter((i) => i !== item)
    setValue('butuhSponsorUntuk', updated)
  }

  const onSubmit = async (data: VenueFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'venue',
          ...data,
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      setIsSuccess(true)
      reset()
      setTimeout(() => {
        setIsSuccess(false)
        onOpenChange(false)
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-premium-navy">
            Form Pendaftaran Venue/Event
          </DialogTitle>
          <DialogDescription>
            Daftar gratis dan mulai terima penawaran sponsorship
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-padel-green mb-2">
              Pendaftaran Berhasil!
            </h3>
            <p className="text-gray-600">
              Selamat! Venue Anda akan segera kami verifikasi dan hubungi.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Nama Venue */}
            <div>
              <Label htmlFor="namaVenue">
                Nama Venue <span className="text-red-500">*</span>
              </Label>
              <Input
                id="namaVenue"
                {...register('namaVenue')}
                placeholder="Kemang Padel Club"
              />
              {errors.namaVenue && (
                <p className="text-red-500 text-sm mt-1">{errors.namaVenue.message}</p>
              )}
            </div>

            {/* Nama Pengelola */}
            <div>
              <Label htmlFor="namaPengelola">
                Nama Pengelola <span className="text-red-500">*</span>
              </Label>
              <Input
                id="namaPengelola"
                {...register('namaPengelola')}
                placeholder="John Doe"
              />
              {errors.namaPengelola && (
                <p className="text-red-500 text-sm mt-1">{errors.namaPengelola.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="email@venue.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* WhatsApp */}
            <div>
              <Label htmlFor="noWhatsApp">
                No. WhatsApp <span className="text-red-500">*</span>
              </Label>
              <Input
                id="noWhatsApp"
                type="tel"
                {...register('noWhatsApp')}
                placeholder="+62 812-3456-7890"
              />
              {errors.noWhatsApp && (
                <p className="text-red-500 text-sm mt-1">{errors.noWhatsApp.message}</p>
              )}
            </div>

            {/* Kota */}
            <div>
              <Label htmlFor="kota">
                Kota <span className="text-red-500">*</span>
              </Label>
              <Select onValueChange={(value) => setValue('kota', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kota" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Jakarta">Jakarta</SelectItem>
                  <SelectItem value="Surabaya">Surabaya</SelectItem>
                  <SelectItem value="Bandung">Bandung</SelectItem>
                  <SelectItem value="Bali">Bali</SelectItem>
                  <SelectItem value="Medan">Medan</SelectItem>
                  <SelectItem value="Yogyakarta">Yogyakarta</SelectItem>
                  <SelectItem value="Semarang">Semarang</SelectItem>
                  <SelectItem value="Makassar">Makassar</SelectItem>
                  <SelectItem value="Lainnya">Lainnya</SelectItem>
                </SelectContent>
              </Select>
              {errors.kota && (
                <p className="text-red-500 text-sm mt-1">{errors.kota.message}</p>
              )}
            </div>

            {/* Jumlah Court */}
            <div>
              <Label htmlFor="jumlahCourt">
                Jumlah Court <span className="text-red-500">*</span>
              </Label>
              <Input
                id="jumlahCourt"
                type="number"
                min="1"
                max="20"
                {...register('jumlahCourt', { valueAsNumber: true })}
                placeholder="4"
              />
              {errors.jumlahCourt && (
                <p className="text-red-500 text-sm mt-1">{errors.jumlahCourt.message}</p>
              )}
            </div>

            {/* Jumlah Event per Bulan */}
            <div>
              <Label htmlFor="jumlahEventPerBulan">
                Jumlah Event per Bulan
              </Label>
              <Input
                id="jumlahEventPerBulan"
                type="number"
                min="0"
                {...register('jumlahEventPerBulan', { valueAsNumber: true })}
                placeholder="2"
              />
            </div>

            {/* Rata-rata Peserta */}
            <div>
              <Label htmlFor="rataRataPeserta">
                Rata-rata Peserta per Event
              </Label>
              <Input
                id="rataRataPeserta"
                type="number"
                min="0"
                {...register('rataRataPeserta', { valueAsNumber: true })}
                placeholder="50"
              />
            </div>

            {/* Sudah Punya Sponsor */}
            <div>
              <Label>
                Sudah Punya Sponsor? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                onValueChange={(value: 'Ya' | 'Tidak') =>
                  setValue('sudahPunyaSponsor', value)
                }
                className="flex gap-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Ya" id="sponsor-ya" />
                  <Label htmlFor="sponsor-ya">Ya</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Tidak" id="sponsor-tidak" />
                  <Label htmlFor="sponsor-tidak">Tidak</Label>
                </div>
              </RadioGroup>
              {errors.sudahPunyaSponsor && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sudahPunyaSponsor.message}
                </p>
              )}
            </div>

            {/* Butuh Sponsor Untuk */}
            <div>
              <Label>Butuh Sponsor Untuk</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {[
                  'Tournament Prize',
                  'Venue Upgrade',
                  'Marketing & Promotion',
                  'Operational Cost',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox
                      id={`sponsor-${item}`}
                      checked={butuhSponsorUntuk.includes(item)}
                      onCheckedChange={(checked) =>
                        handleSponsorUntukChange(item, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`sponsor-${item}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Website/Instagram */}
            <div>
              <Label htmlFor="websiteInstagram">Website/Instagram</Label>
              <Input
                id="websiteInstagram"
                type="url"
                {...register('websiteInstagram')}
                placeholder="https://instagram.com/venue"
              />
              {errors.websiteInstagram && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.websiteInstagram.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-padel-green hover:bg-padel-green/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Mengirim...
                </>
              ) : (
                'DAFTAR GRATIS'
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
