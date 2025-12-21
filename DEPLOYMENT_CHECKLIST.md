# QuantFund AI - Deployment Checklist

## Pre-Deployment (Local Testing)

- [ ] **Run Development Server**
  ```bash
  npm run dev
  ```
  - [ ] Visit http://localhost:3000
  - [ ] Check home page loads
  - [ ] Check all navigation links work

- [ ] **Test All Pages**
  - [ ] Home page - all sections visible
  - [ ] About page - renders correctly
  - [ ] Research page - content displays
  - [ ] Engine page - information clear
  - [ ] Privacy page - loads without issues
  - [ ] Terms page - loads without issues

- [ ] **Test Responsive Design**
  - [ ] Desktop (1920x1080)
  - [ ] Tablet (768px)
  - [ ] Mobile (375px)
  - [ ] Use Chrome DevTools for testing

- [ ] **Test Contact Form**
  - [ ] Form fields validate
  - [ ] Submit button works
  - [ ] Success message displays
  - [ ] (Optional) Check email received

- [ ] **Performance Check**
  - [ ] Run: `npm run build`
  - [ ] Check build completes without errors
  - [ ] Run: `npm start`
  - [ ] Test production build locally

---

## Pre-Deployment (Configuration)

- [ ] **Update Environment Variables**
  - [ ] Copy `.env.example` to `.env.local`
  - [ ] Update EMAIL_USER
  - [ ] Update EMAIL_PASSWORD
  - [ ] Update EMAIL_FROM
  - [ ] Keep NEXT_PUBLIC_API_URL correct

- [ ] **Update Content**
  - [ ] Check company name is correct
  - [ ] Verify email address
  - [ ] Update social media links (if needed)
  - [ ] Check footer information

- [ ] **SEO Optimization**
  - [ ] Verify metadata in layout.jsx
  - [ ] Check sitemap.xml exists
  - [ ] Check robots.txt exists
  - [ ] Verify favicon displays

- [ ] **Git Setup**
  - [ ] Initialize: `git init`
  - [ ] Add remote: `git remote add origin <your-repo>`
  - [ ] Create .gitignore (already exists)
  - [ ] Commit: `git add . && git commit -m "Initial commit"`

---

## Deployment (Vercel - Easiest)

- [ ] **Create Vercel Account**
  - [ ] Go to https://vercel.com
  - [ ] Sign up with GitHub

- [ ] **Create New Project**
  - [ ] Click "New Project"
  - [ ] Import GitHub repository
  - [ ] Vercel auto-detects Next.js

- [ ] **Configure Environment Variables**
  - [ ] Project Settings → Environment Variables
  - [ ] Add EMAIL_USER
  - [ ] Add EMAIL_PASSWORD
  - [ ] Add EMAIL_FROM
  - [ ] Add NEXT_PUBLIC_API_URL

- [ ] **Deploy**
  - [ ] Click "Deploy"
  - [ ] Wait for build (usually < 5 minutes)
  - [ ] Get deployment URL

- [ ] **Test Production**
  - [ ] Visit deployment URL
  - [ ] Test all pages
  - [ ] Test contact form
  - [ ] Check mobile responsive

- [ ] **Add Custom Domain** (optional)
  - [ ] Settings → Domains
  - [ ] Add your domain
  - [ ] Update DNS records
  - [ ] Wait for verification (5-48 hours)

---

## Deployment (Docker)

- [ ] **Build Docker Image**
  ```bash
  docker build -t quantfund-ai:latest .
  ```

- [ ] **Run Docker Container**
  ```bash
  docker run -p 3000:3000 \
    -e EMAIL_USER=your-email \
    -e EMAIL_PASSWORD=your-password \
    -e EMAIL_FROM=noreply@quantfund-ai.com \
    quantfund-ai:latest
  ```

- [ ] **Test Container**
  - [ ] Visit http://localhost:3000
  - [ ] Check all pages
  - [ ] Test contact form

- [ ] **Push to Registry** (optional)
  ```bash
  docker tag quantfund-ai:latest your-registry/quantfund-ai:latest
  docker push your-registry/quantfund-ai:latest
  ```

---

## Deployment (Traditional Server)

- [ ] **SSH into Server**
  ```bash
  ssh user@your-server.com
  ```

- [ ] **Clone Repository**
  ```bash
  git clone <your-repo>
  cd quantfund-ai
  ```

- [ ] **Install Dependencies**
  ```bash
  npm install
  ```

- [ ] **Build Project**
  ```bash
  npm run build
  ```

- [ ] **Configure Environment**
  - [ ] Create .env.local
  - [ ] Add all environment variables

- [ ] **Install PM2** (process manager)
  ```bash
  npm install -g pm2
  pm2 start npm --name "quantfund" -- start
  pm2 startup
  pm2 save
  ```

- [ ] **Configure Web Server** (Nginx/Apache)
  - [ ] Proxy requests to port 3000
  - [ ] Set up SSL/TLS certificate
  - [ ] Configure domain

- [ ] **Test Production Server**
  - [ ] Visit your domain
  - [ ] Check all pages
  - [ ] Test contact form
  - [ ] Monitor logs: `pm2 logs`

---

## Post-Deployment

- [ ] **Verify Everything Works**
  - [ ] All pages load
  - [ ] Navigation works
  - [ ] Contact form sends emails
  - [ ] Mobile responsive
  - [ ] No console errors

- [ ] **Setup Analytics** (optional)
  - [ ] Create Google Analytics account
  - [ ] Add GA_ID to .env
  - [ ] Track conversions

- [ ] **Setup Monitoring**
  - [ ] Monitor uptime
  - [ ] Monitor performance
  - [ ] Setup error alerts

- [ ] **Document Setup**
  - [ ] Save deployment URL
  - [ ] Document any custom configurations
  - [ ] Create runbook for team

- [ ] **Announce Launch**
  - [ ] Share with team
  - [ ] Share on social media
  - [ ] Send to newsletter
  - [ ] Tell your friends!

---

## Monitoring

- [ ] **Daily**
  - [ ] Check if site is up
  - [ ] Monitor error logs
  - [ ] Check traffic

- [ ] **Weekly**
  - [ ] Review analytics
  - [ ] Check performance metrics
  - [ ] Test contact form

- [ ] **Monthly**
  - [ ] Update dependencies: `npm update`
  - [ ] Review security updates: `npm audit`
  - [ ] Check Lighthouse score

---

## Troubleshooting

### Common Issues & Solutions

**Site not loading?**
- Check server status
- Check DNS configuration
- Check firewall rules
- Check logs: `npm run dev` or `pm2 logs`

**Email not sending?**
- Verify EMAIL_USER in .env
- Check EMAIL_PASSWORD is app-specific password
- Check email service is enabled
- Test with real email address

**Slow performance?**
- Run: `npm run build`
- Check bundle size
- Optimize images
- Enable caching

**Deployment failed?**
- Check build logs
- Verify all environment variables
- Check Node.js version (18+)
- Try again: sometimes temporary issues

---

## Success Criteria

✅ Site is live and accessible
✅ All pages load correctly
✅ Contact form works
✅ Mobile responsive
✅ Fast performance (< 2s load)
✅ No console errors
✅ SSL/HTTPS enabled
✅ SEO basics configured

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Docker Docs**: https://docs.docker.com/
- **Next.js Docs**: https://nextjs.org/docs
- **Stack Overflow**: Search your specific issue

---

**Congratulations! Your site is live! 🎉**
