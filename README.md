# CariSponsorPadel.com

Platform sponsorship padel #1 Indonesia - menghubungkan brand dengan venue dan tournament padel premium.

## 🚀 Tech Stack

- **Framework**: Next.js 14.2+ (App Router, TypeScript)
- **Styling**: Tailwind CSS 3.4+
- **Components**: shadcn/ui (Button, Card, Input, Select, Textarea, Dialog, Carousel)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
carisponsorpadel/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── api/
│       └── submit/
│           └── route.ts    # API endpoint for form submissions
├── components/
│   ├── Header.tsx          # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with animated counters
│   ├── HowItWorks.tsx      # Two-column process explanation
│   ├── PricingSection.tsx  # Three-tier pricing cards
│   ├── VenueShowcase.tsx   # Carousel of partner venues
│   ├── SocialProof.tsx     # Brand logo grid
│   ├── SponsorForm.tsx     # Sponsor registration form
│   ├── VenueForm.tsx       # Venue registration form
│   ├── Footer.tsx          # Footer with links and contact
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   ├── UrgencyNotification.tsx  # Notification popup
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── schemas.ts          # Zod validation schemas
│   ├── whatsapp.ts         # WhatsApp utilities
│   └── utils.ts            # Utility functions
└── public/
    └── images/             # Static images
```

## 🎨 Features

### Header
- Sticky navigation bar
- Mobile hamburger menu
- Smooth scroll to sections
- WhatsApp contact button

### Hero Section
- Full-height background image with overlay
- Animated counters (50+ venues, 20+ brands, IDR 2M+ funding)
- Dual CTAs for sponsors and venues
- Framer Motion animations

### How It Works
- Two-column grid layout
- Step-by-step process for sponsors and venues
- Icon-based visual hierarchy
- Fade-in animations on scroll

### Pricing Section
- Three-tier pricing (Bronze, Silver, Gold)
- Featured "Most Popular" badge on Silver
- Detailed feature lists
- Hover animations

### Venue Showcase
- Embla Carousel for horizontal scrolling
- 8 featured venues
- Responsive design (1 on mobile, 3 on desktop)
- Auto-scroll with pause on hover

### Forms
- React Hook Form with Zod validation
- Comprehensive field validation
- Loading states and success messages
- WhatsApp message pre-fill
- API integration ready

### Floating Elements
- WhatsApp button with bounce animation
- Urgency notification with cycling messages
- Non-intrusive UX

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 📝 Environment Variables

No environment variables required for basic functionality.

For production integrations, add:

```env
# Airtable (optional)
AIRTABLE_API_KEY=your_key
AIRTABLE_BASE_ID=your_base_id

# Email Service (optional)
EMAIL_API_KEY=your_key

# WhatsApp Business API (optional)
WHATSAPP_API_KEY=your_key
```

## 🔌 Future Integrations

The codebase includes TODO comments for:

1. **Form Submissions**:
   - Airtable integration
   - Google Sheets integration
   - Email notifications (Resend/SendGrid)
   - WhatsApp Business API

2. **Analytics**:
   - Google Analytics 4
   - Facebook Pixel
   - Hotjar

3. **Payment** (if needed):
   - Xendit integration

4. **CMS** (optional):
   - Sanity.io for venue data

## 🎯 SEO

- Open Graph meta tags
- Twitter Card meta tags
- Semantic HTML structure
- Optimized metadata
- Sitemap ready

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly interactions
- Optimized images

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms

Compatible with any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

Proprietary - CariSponsorPadel

## 👥 Contributors

Built with Claude Code

---

**Need Help?** Contact: hello@carisponsorpadel.com
