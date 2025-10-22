import { NextRequest, NextResponse } from 'next/server'
import { sponsorFormSchema, venueFormSchema } from '@/lib/schemas'
import { z } from 'zod'

const requestSchema = z.object({
  type: z.enum(['sponsor', 'venue']),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request type
    const { type } = requestSchema.parse(body)

    // Validate based on type
    if (type === 'sponsor') {
      const data = sponsorFormSchema.parse(body)

      // TODO: Integrate with Airtable
      // await airtable.create('Sponsors', data)

      // TODO: Integrate with Google Sheets
      // await googleSheets.append('Sponsors', data)

      // TODO: Send email notification
      // await sendEmail({
      //   to: 'admin@carisponsorpadel.com',
      //   subject: 'New Sponsor Submission',
      //   body: JSON.stringify(data, null, 2)
      // })

      // TODO: Send WhatsApp notification via WhatsApp Business API
      // await sendWhatsApp({
      //   to: '+6281234567890',
      //   message: getSponsorWhatsAppMessage(data)
      // })

      console.log('Sponsor submission received:', data)

      return NextResponse.json({
        success: true,
        message: 'Form sponsor berhasil dikirim. Tim kami akan segera menghubungi Anda.',
      })
    } else {
      const data = venueFormSchema.parse(body)

      // TODO: Integrate with Airtable
      // await airtable.create('Venues', data)

      // TODO: Integrate with Google Sheets
      // await googleSheets.append('Venues', data)

      // TODO: Send email notification
      // await sendEmail({
      //   to: 'admin@carisponsorpadel.com',
      //   subject: 'New Venue Registration',
      //   body: JSON.stringify(data, null, 2)
      // })

      // TODO: Send WhatsApp notification via WhatsApp Business API
      // await sendWhatsApp({
      //   to: '+6281234567890',
      //   message: getVenueWhatsAppMessage(data)
      // })

      console.log('Venue submission received:', data)

      return NextResponse.json({
        success: true,
        message: 'Pendaftaran venue berhasil. Tim kami akan segera menghubungi Anda.',
      })
    }
  } catch (error) {
    console.error('Error processing submission:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Data yang dikirim tidak valid',
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Terjadi kesalahan server. Silakan coba lagi.',
      },
      { status: 500 }
    )
  }
}
