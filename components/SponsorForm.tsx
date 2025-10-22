'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Checkbox } from './ui/checkbox'
import { sponsorFormSchema, type SponsorFormData } from '@/lib/schemas'

interface SponsorFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function SponsorForm({ open, onOpenChange }: SponsorFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<SponsorFormData>({
    resolver: zodResolver(sponsorFormSchema),
  })

  const kotaTarget = watch('kotaTarget') || []
  const objektifSponsorship = watch('objektifSponsorship') || []

  const handleKotaChange = (city: string, checked: boolean) => {
    const updated = checked
      ? [...kotaTarget, city]
      : kotaTarget.filter((c) => c !== city)
    setValue('kotaTarget', updated)
  }

  const handleObjektifChange = (objective: string, checked: boolean) => {
    const updated = checked
      ? [...objektifSponsorship, objective]
      : objektifSponsorship.filter((o) => o !== objective)
    setValue('objektifSponsorship', updated)
  }

  const onSubmit = async (data: SponsorFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'sponsor',
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
            Form Sponsorship Brand
          </DialogTitle>
          <DialogDescription>
            Isi form di bawah dan tim kami akan menghubungi Anda dalam 24 jam
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-padel-green mb-2">
              Terima Kasih!
            </h3>
            <p className="text-gray-600">
              Form Anda telah kami terima. Tim kami akan menghubungi Anda segera.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Nama Brand */}
            <div>
              <Label htmlFor="namaBrand">
                Nama Brand <span className="text-red-500">*</span>
              </Label>
              <Input
                id="namaBrand"
                {...register('namaBrand')}
                placeholder="PT. Contoh Brand"
              />
              {errors.namaBrand && (
                <p className="text-red-500 text-sm mt-1">{errors.namaBrand.message}</p>
              )}
            </div>

            {/* Nama Anda */}
            <div>
              <Label htmlFor="namaAnda">
                Nama Anda <span className="text-red-500">*</span>
              </Label>
              <Input
                id="namaAnda"
                {...register('namaAnda')}
                placeholder="John Doe"
              />
              {errors.namaAnda && (
                <p className="text-red-500 text-sm mt-1">{errors.namaAnda.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">
                Email Perusahaan <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="email@perusahaan.com"
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

            {/* Budget Sponsorship */}
            <div>
              <Label htmlFor="budgetSponsorship">
                Budget Sponsorship <span className="text-red-500">*</span>
              </Label>
              <Select onValueChange={(value) => setValue('budgetSponsorship', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="< IDR 50 Juta">{'< IDR 50 Juta'}</SelectItem>
                  <SelectItem value="IDR 50-100 Juta">IDR 50-100 Juta</SelectItem>
                  <SelectItem value="IDR 100-500 Juta">IDR 100-500 Juta</SelectItem>
                  <SelectItem value="> IDR 500 Juta">{'> IDR 500 Juta'}</SelectItem>
                </SelectContent>
              </Select>
              {errors.budgetSponsorship && (
                <p className="text-red-500 text-sm mt-1">{errors.budgetSponsorship.message}</p>
              )}
            </div>

            {/* Kota Target */}
            <div>
              <Label>Kota Target</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {['Jakarta', 'Surabaya', 'Bali', 'Bandung', 'Lainnya'].map((city) => (
                  <div key={city} className="flex items-center space-x-2">
                    <Checkbox
                      id={`city-${city}`}
                      checked={kotaTarget.includes(city)}
                      onCheckedChange={(checked) =>
                        handleKotaChange(city, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`city-${city}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {city}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Objektif Sponsorship */}
            <div>
              <Label>Objektif Sponsorship</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {[
                  'Brand Awareness',
                  'Lead Generation',
                  'Product Launch',
                  'Community Building',
                ].map((objective) => (
                  <div key={objective} className="flex items-center space-x-2">
                    <Checkbox
                      id={`obj-${objective}`}
                      checked={objektifSponsorship.includes(objective)}
                      onCheckedChange={(checked) =>
                        handleObjektifChange(objective, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`obj-${objective}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {objective}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Pesan Tambahan */}
            <div>
              <Label htmlFor="pesanTambahan">Pesan Tambahan</Label>
              <Textarea
                id="pesanTambahan"
                {...register('pesanTambahan')}
                placeholder="Tuliskan informasi tambahan..."
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-action-orange hover:bg-action-orange/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Mengirim...
                </>
              ) : (
                'KIRIM - Kami Hubungi <24 Jam'
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
