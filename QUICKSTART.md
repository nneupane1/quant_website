# Quick Start Guide

## Prerequisites

Make sure you have installed:
- **Node.js 18+** - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

## Installation & Running Locally

### Step 1: Install Dependencies

```bash
cd /Users/nischal/Documents/website_quantfund
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS
- Zod validation
- Nodemailer
- And other dependencies

### Step 2: Configure Environment

Create a `.env.local` file (already created) and update it:

```bash
# Edit .env.local with your settings
# For local development, you can skip email config for now
```

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

The site will auto-reload as you edit files.

### Step 4: Build for Production

```bash
npm run build
npm run start
```

## Project Features at a Glance

✅ **Fully Populated** - All pages and components created
✅ **Responsive Design** - Mobile, tablet, desktop
✅ **Production Ready** - Security headers, validation, error handling
✅ **Cinematic UI** - Neon animations, smooth transitions
✅ **Contact Form** - Email integration ready
✅ **SEO Optimized** - Metadata and structured data
✅ **Easy Deployment** - Ready for Vercel (free tier works!)

## Pages Included

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Hero section with features showcase |
| About | `/about` | About QuantFund AI and philosophy |
| Research | `/research` | Research papers and methodology |
| Engine | `/engine` | Trading engine capabilities |
| Contact | Form on home | Contact submission (email integration) |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## Key Components

```
Home Page (/)
├── Navigation Bar
├── Hero Section (animated background, glowing effects)
├── Features Section (6 feature cards with hover effects)
├── Contact Form (email integration)
└── Footer

Other Pages:
├── About (/about)
├── Research (/research)
├── Engine (/engine)
├── Privacy (/privacy)
└── Terms (/terms)
```

## Customization Examples

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  neon: {
    blue: '#00f0ff',    // Change this hex code
    pink: '#ff006e',    // Or this
    // ... more colors
  }
}
```

### Update Content

1. **Home Page**: Edit `app/page.jsx`
2. **About Page**: Edit `app/about/page.jsx`
3. **Features**: Edit `constants/siteMetadata.js`
4. **Navigation**: Edit `constants/navigation.js`

### Add New Page

1. Create folder: `app/new-page/`
2. Create file: `app/new-page/page.jsx`
3. Add to navigation (optional)

Example:

```jsx
// app/new-page/page.jsx
export const metadata = {
  title: 'New Page - QuantFund AI',
  description: 'Page description here',
};

export default function NewPage() {
  return (
    <main>
      {/* Your content */}
    </main>
  );
}
```

## Email Configuration (Optional)

To enable contact form emails:

1. **Gmail Setup**:
   - Enable 2FA on Gmail
   - Create app password: [myaccount.google.com](https://myaccount.google.com)
   - Copy the 16-character password

2. **Update `.env.local`**:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   EMAIL_FROM=noreply@quantfund-ai.com
   ```

3. **Restart dev server**: `npm run dev`

Now the contact form will send emails!

## Deployment Options

### Option 1: Vercel (Free, Easiest)

```bash
npm i -g vercel
vercel login
vercel
```

### Option 2: Docker

```bash
docker build -t quantfund-ai .
docker run -p 3000:3000 quantfund-ai
```

### Option 3: Manual Server

```bash
npm run build
npm run start
```

Then deploy to your server/hosting.

## Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run start            # Start production server
npm run export           # Static export

# Code Quality
npm run lint             # Run ESLint

# Clean
rm -rf .next node_modules  # Reset everything
npm install              # Reinstall
```

## File Structure Overview

```
website_quantfund/
├── app/                          # Main pages (Next.js 14 App Router)
│   ├── page.jsx                 # Home page
│   ├── about/page.jsx           # About page
│   ├── research/page.jsx        # Research page
│   ├── engine/page.jsx          # Engine page
│   ├── (static)/                # Static pages folder
│   │   ├── privacy/page.jsx
│   │   └── terms/page.jsx
│   ├── api/v1/contact/route.js  # Contact API endpoint
│   ├── layout.jsx               # Root layout
│   └── globals.css              # Global styles
│
├── components/                   # Reusable React components
│   ├── navigation/
│   ├── hero/
│   ├── sections/
│   ├── footer/
│   ├── ui/
│   └── animations/
│
├── constants/                    # Constants and metadata
│   ├── siteMetadata.js
│   ├── navigation.js
│   └── socials.js
│
├── config/                       # Configuration files
│   ├── seo.js
│   └── env.js
│
├── hooks/                        # Custom React hooks
│   ├── useScroll.js
│   ├── useMobileMenu.js
│   └── usePrefersDarkMode.js
│
├── lib/                          # Utilities and helpers
│   ├── utils.js
│   ├── email.js
│   ├── analytics.js
│   └── seo.js
│
├── schemas/                      # Validation schemas
│   └── contactSchema.js
│
├── public/                       # Static assets (images, fonts, etc)
├── data/                         # Data files (JSON)
├── styles/                       # Additional CSS files
│
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.js                # Next.js config
├── tailwind.config.js            # Tailwind config
├── postcss.config.js             # PostCSS config
├── middleware.js                 # Next.js middleware
├── .env.local                    # Environment variables
├── .gitignore                    # Git ignore rules
├── .eslintrc.json                # ESLint config
├── README.md                     # Project documentation
└── DEPLOYMENT.md                 # Deployment guide
```

## Troubleshooting

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal

### Port 3000 already in use
```bash
npm run dev -- -p 3001   # Use different port
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Module not found errors
```bash
npm install              # Reinstall dependencies
npm run dev              # Run dev server
```

## Next Steps

1. ✅ Install Node.js if needed
2. ✅ Run `npm install` in project folder
3. ✅ Run `npm run dev`
4. ✅ Open http://localhost:3000
5. ✅ Customize content and colors
6. ✅ Deploy to Vercel (easiest free option)

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev
- **Deployment Guides**: See DEPLOYMENT.md

---

**You're all set! Your QuantFund AI website is ready to go! 🚀**
