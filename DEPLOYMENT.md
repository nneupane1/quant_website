# QuantFund AI - Deployment Guide

## Free Deployment Options

### 1. Vercel (Recommended - Easiest)

**Why Vercel:**
- Creators of Next.js
- One-click deployment
- Free tier with great features
- Automatic CI/CD
- Edge functions support

**Steps:**

1. **Sign up**: Go to [vercel.com](https://vercel.com) and create an account
2. **Connect GitHub**: Link your GitHub repository
3. **Deploy**: Vercel automatically deploys on every push
4. **Custom Domain**: Add your domain (quantfund-ai.com, etc.)

**Environment Variables:**
- Go to Project Settings → Environment Variables
- Add your `.env.local` variables:
  - `EMAIL_USER`
  - `EMAIL_PASSWORD`
  - `EMAIL_FROM`

### 2. Netlify (Alternative)

**Steps:**

1. **Sign up**: Go to [netlify.com](https://netlify.com)
2. **Deploy**: Connect your Git repo
3. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 3. Railway (Free with Card)

**Steps:**

1. Sign up at [railway.app](https://railway.app)
2. Create new project
3. Connect GitHub
4. Set environment variables
5. Deploy

### 4. Self-Hosted (AWS, DigitalOcean, etc.)

**Using Docker:**

```bash
# Build Docker image
docker build -t quantfund-ai:latest .

# Run container
docker run -p 3000:3000 \
  -e EMAIL_USER=your-email \
  -e EMAIL_PASSWORD=your-pass \
  quantfund-ai:latest
```

## Pre-Deployment Checklist

- [ ] Test locally: `npm run dev`
- [ ] Build test: `npm run build && npm run start`
- [ ] Update email credentials
- [ ] Add custom domain
- [ ] Configure analytics (optional)
- [ ] Test contact form
- [ ] Update social links
- [ ] Add favicon
- [ ] Update metadata

## Environment Variables Needed

```env
# Email (Gmail recommended)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=app-specific-password

# Email sender name
EMAIL_FROM=noreply@quantfund-ai.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=

# API base URL
NEXT_PUBLIC_API_URL=https://your-domain.com/api
```

## Gmail Setup for Emails

1. **Enable 2-Factor Authentication** on your Google account
2. **Create App Password**:
   - Go to myaccount.google.com
   - Security → App passwords
   - Select "Mail" and "Windows Computer" (or your OS)
   - Copy the generated password
3. **Use as EMAIL_PASSWORD** in your env variables

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records (Vercel provides them)

### For Netlify:
1. Go to Domain settings
2. Add domain
3. Update DNS nameservers

### DNS Records (Most registrars):

```
Type: CNAME
Name: www
Value: (provided by hosting service)

Type: A
Name: @
Value: (provided by hosting service)
```

## Performance Optimization

### Image Optimization
- Already optimized with Next.js Image component
- WebP format support
- Responsive images

### Caching
- Browser caching (1 year for static assets)
- CDN caching (Vercel edge network)
- Revalidation: 60 seconds (ISR)

### Monitoring

Monitor your deployment with:
- **Vercel Analytics**: Built-in
- **Google Analytics**: Add GA ID
- **Error tracking**: Sentry (optional)

```js
// Add to app/layout.jsx for Google Analytics
<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
<script dangerouslySetInnerHTML={{__html: `...`}} />
```

## Troubleshooting

### Email not sending
- Verify credentials
- Check app-specific password (Gmail)
- Test with `curl` or Postman
- Check logs in deployment dashboard

### 404 errors
- Verify page exists in `app/` folder
- Check file naming conventions
- Rebuild and redeploy

### Performance issues
- Check Network tab in DevTools
- Use Lighthouse audit
- Optimize images
- Enable compression

## Post-Deployment

1. **Test all pages** on production URL
2. **Test contact form** with real email
3. **Check SEO** with tools:
   - Google Search Console
   - Bing Webmaster Tools
4. **Monitor analytics** regularly
5. **Update content** as needed

## Monitoring & Maintenance

### Weekly
- Check error logs
- Monitor analytics
- Test core functionality

### Monthly
- Review performance metrics
- Update dependencies: `npm audit`
- Backup data/configs

### Quarterly
- Update Node.js version
- Security audit
- Performance optimization

## Additional Features to Consider

### Email Newsletter
- Use SendGrid or Mailchimp
- Add subscription form

### Blog
- Add MDX support
- SEO optimization

### Analytics Dashboard
- Integrate real QuantFund data
- Live charts with Plotly/Chart.js

### Authentication
- NextAuth.js for user accounts
- GitHub OAuth

## Support

For deployment issues:
- Check Vercel/Netlify docs
- Review error logs
- Ask on Discord communities
- Contact hosting support

---

**Your QuantFund AI website is now deployment-ready!**
