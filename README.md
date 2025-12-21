# QuantFund AI — Professional Trading Platform

A cinematic, institutional-grade website for QuantFund AI trading platform built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 **Cinematic UI**: Neon-themed dark mode with smooth animations and glassmorphism effects
- ⚡ **High Performance**: Optimized Next.js with fast page loads and smooth transitions
- 📱 **Responsive**: Mobile-first design that works seamlessly across all devices
- 🔒 **Production-Ready**: Security headers, input validation, and error handling
- 📧 **Contact System**: Email integration with form validation
- 🎯 **SEO Optimized**: Metadata, structured data, and semantic HTML
- 🎬 **Interactive**: Smooth scroll, hover effects, and dynamic animations

## Tech Stack

- **Frontend**: React 18, Next.js 14
- **Styling**: Tailwind CSS, Custom CSS Animations
- **3D Graphics**: Three.js, React Three Fiber (ready to integrate)
- **Forms**: Zod validation
- **Email**: Nodemailer
- **Deployment**: Ready for Vercel, Netlify, or self-hosted

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/quantfund-ai.git
cd quantfund-ai

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your configuration
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev

# Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start

# Static export (for static hosting)
npm run export
```

## Project Structure

```
quantfund-ai/
├── app/                      # Next.js app directory
│   ├── layout.jsx           # Root layout
│   ├── page.jsx             # Home page
│   ├── about/               # About page
│   ├── research/            # Research page
│   ├── engine/              # Engine page
│   ├── (static)/            # Static pages (privacy, terms)
│   └── api/                 # API routes
├── components/              # React components
│   ├── navigation/          # Nav component
│   ├── hero/               # Hero section
│   ├── sections/           # Content sections
│   ├── footer/             # Footer
│   ├── ui/                 # Reusable UI components
│   └── animations/         # Animation components
├── r3f/                     # Three.js/React Three Fiber components
├── constants/              # Constants & metadata
├── config/                 # Configuration files
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities & helpers
├── schemas/               # Validation schemas
├── public/                # Static assets
├── styles/                # Global styles
└── data/                  # Data files (JSON, etc)
```

## Key Components

### Navigation (`components/navigation/Navigation.jsx`)
- Responsive navigation with mobile menu
- Smooth scroll behavior
- Sticky header on scroll

### Hero Section (`components/hero/HeroSection.jsx`)
- Animated background grid
- Glowing orbs with mouse tracking
- Smooth typography animations

### Features Section (`components/sections/FeaturesSection.jsx`)
- Grid layout of features
- Hover effects and animations
- Responsive design

### Contact Form (`components/sections/ContactForm.jsx`)
- Zod validation
- Email integration
- Error and success states

## Environment Variables

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@quantfund-ai.com

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Analytics
NEXT_PUBLIC_GA_ID=your-ga-id
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel login
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify login
netlify deploy --build --prod
```

### Docker

```bash
docker build -t quantfund-ai .
docker run -p 3000:3000 quantfund-ai
```

## Customization

### Change Colors

Edit `tailwind.config.js` to customize neon colors and themes:

```js
colors: {
  neon: {
    blue: '#00f0ff',
    cyan: '#00d4ff',
    pink: '#ff006e',
    // ... more colors
  }
}
```

### Add New Pages

1. Create a new folder in `app/`
2. Add `page.jsx` file
3. Export metadata and default component
4. Update navigation constants if needed

### Integrate 3D Graphics

The `r3f/` folder is ready for React Three Fiber components:

```jsx
// Example: Add 3D scene
import { Canvas } from '@react-three/fiber';
import { TradingEngine } from '@/r3f/TradingEngine';

<Canvas>
  <TradingEngine />
</Canvas>
```

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS with Tailwind for minimal bundle
- Optimized fonts with system fallbacks
- Middleware for security headers

## Security

- CSRF protection ready
- XSS prevention with CSP headers
- SQL injection prevention (API design)
- Input validation with Zod
- Security headers via middleware

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email contact@quantfund-ai.com or open an issue on GitHub.

## Roadmap

- [ ] Integrate Three.js 3D visualizations
- [ ] Add Streamlit dashboard links
- [ ] Implement real-time data widgets
- [ ] Add authentication system
- [ ] Multi-language support
- [ ] Dark/light mode toggle
- [ ] Advanced analytics dashboard

---

**Built with ❤️ for institutional traders and quant researchers**
