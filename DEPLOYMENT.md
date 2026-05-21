# FullRange Supply - Vercel Deployment Guide

## Overview

This guide provides complete instructions for deploying FullRange Supply (AMZ Global Sourcing) to Vercel with optimized performance, SEO, and monitoring.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Vercel account (sign up at https://vercel.com)
- Git repository initialized
- GitHub, GitLab, or Bitbucket account

## Pre-Deployment Checklist

### Performance Optimization
- [ ] Bundle size analyzed and optimized
- [ ] Code splitting implemented
- [ ] Lazy loading configured
- [ ] Assets compressed and optimized
- [ ] Lighthouse score: 90+
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] INP < 200ms

### SEO & Accessibility
- [ ] Meta tags verified
- [ ] Open Graph images added
- [ ] JSON-LD schemas validated
- [ ] robots.txt configured
- [ ] sitemap.xml created
- [ ] hreflang tags for multilingual support
- [ ] WCAG AA compliance verified
- [ ] Focus-visible states implemented
- [ ] Form labels properly associated
- [ ] SVG icons have aria-hidden or aria-label

### Security
- [ ] Security headers configured
- [ ] Content Security Policy set
- [ ] API endpoints protected
- [ ] Environment variables secured
- [ ] HTTPS enforced
- [ ] No sensitive data in source code

### Content & Configuration
- [ ] contact.json verified
- [ ] content.json complete
- [ ] social media links updated
- [ ] Analytics IDs configured
- [ ] Error tracking setup
- [ ] CDN for images considered

## Step-by-Step Deployment

### 1. Local Build Verification

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run preview
```

Verify:
- No console errors
- All pages load correctly
- Navigation works smoothly
- Contact form functions
- Responsive design works

### 2. Environment Variables Setup

Create `.env.local` file for local development:

```bash
VITE_API_URL=https://api.amzglobalsourcing.com
VITE_GA_ID=UA-XXXXXXXXX-X
VITE_ENV=development
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_TRACKING=true
VITE_ENABLE_FORM_SUBMISSION=true
```

For production on Vercel, configure in Project Settings:
- Project Settings > Environment Variables
- Add same variables with production values
- Ensure VITE_ prefix for client-side access

### 3. Prepare for Deployment

```bash
# Update package.json version
npm version patch  # or minor/major as needed

# Create deployment branch
git checkout -b deploy/production

# Verify all changes are committed
git status

# Push to remote
git push -u origin deploy/production
```

### 4. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (first time)
vercel

# Follow prompts:
# - Link to existing project or create new
# - Set project name: "fullrange-supply" or "amz-sourcing"
# - Set Framework: React
# - Set Build Command: npm run build
# - Set Output Directory: dist

# For subsequent deployments
vercel --prod
```

#### Option B: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click "Add New..." > "Project"
3. Select your Git repository
4. Configure settings:
   - **Framework**: React
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Configure Environment Variables
6. Click "Deploy"

#### Option C: GitHub Integration (Automatic)

1. Connect GitHub to Vercel
2. Select repository
3. Settings auto-detected
4. Each push to main/production branch auto-deploys
5. Preview deployments for pull requests

### 5. Post-Deployment Configuration

#### Production URLs

Update these in index.html and content files:

```
Production: https://your-domain.com
Preview: https://your-project.vercel.app
```

#### Configure Custom Domain

1. Go to Project Settings > Domains
2. Add custom domain: `amzglobalsourcing.com`
3. Configure DNS records (provided by Vercel)
4. Wait for DNS propagation (up to 48 hours)

#### SSL Certificate

Vercel auto-configures Let's Encrypt SSL. Verify:
- HTTPS enforced
- Certificate valid
- No mixed content warnings

### 6. Performance Monitoring Setup

#### Google Analytics

1. Create Google Analytics 4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to environment variable:
   ```
   VITE_GA_ID=G-XXXXXXXXXX
   ```
4. Verify tracking events in GA dashboard

#### Sentry Error Tracking (Optional)

1. Create Sentry project
2. Get DSN
3. Add to environment:
   ```
   VITE_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
   ```
4. Monitor errors in real-time

#### Vercel Analytics

- Automatically enabled for all projects
- View in Vercel Dashboard > Analytics
- Track:
  - Web Vitals
  - Response times
  - Bandwidth usage

### 7. SEO & Indexing

#### Search Console

1. Add property in Google Search Console
2. Submit sitemap: `https://your-domain.com/sitemap.xml`
3. Verify robots.txt: `https://your-domain.com/robots.txt`
4. Monitor indexation status

#### Bing Webmaster Tools

1. Add site in Bing Webmaster Tools
2. Submit sitemap
3. Monitor performance

#### Schema Markup Validation

- Test with https://schema.org/validator
- Validate all JSON-LD schemas
- Check Knowledge Panel eligibility

### 8. Performance Optimization

#### Core Web Vitals

Monitor in Vercel Dashboard:

- **LCP (Largest Contentful Paint)**: < 2.5s ✓
- **INP (Interaction to Next Paint)**: < 200ms ✓
- **CLS (Cumulative Layout Shift)**: < 0.1 ✓

#### Optimization Techniques

```bash
# Run Lighthouse audit
npm install -g lighthouse
lighthouse https://your-domain.com --view
```

Optimize further:
- Compress images (use WebP)
- Code splitting (already configured)
- Caching headers (vercel.json configured)
- CDN for static assets
- Remove unused dependencies
- Minify CSS/JS (automated)

### 9. Security Headers

Vercel.json already configured with:

- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=()

Verify in Response Headers:

```bash
curl -i https://your-domain.com
```

### 10. Backup & Rollback

#### Create Backup Before Deploy

```bash
# Tag release
git tag -a v1.0.0 -m "Production release"
git push origin v1.0.0

# Vercel automatically keeps previous deployments
# Access via Deployments tab
```

#### Rollback to Previous Deployment

1. Go to Vercel Dashboard > Deployments
2. Find previous successful deployment
3. Click "..." menu
4. Select "Promote to Production"

## Continuous Deployment

### GitHub Actions (Optional CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main, production]

jobs:
  Deploy-Production:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          production: true
```

### Pull Request Previews

- Create preview deployment on each PR
- Share preview URL for team review
- Merge to main when approved
- Auto-deploys to production

## Monitoring & Maintenance

### Daily Tasks

- Monitor error logs (Sentry/Vercel)
- Check Web Vitals
- Review user analytics
- Monitor uptime

### Weekly Tasks

- Review performance metrics
- Check Lighthouse scores
- Monitor SEO rankings
- Review user feedback

### Monthly Tasks

- Security audit
- Dependency updates
- Performance optimization
- Content updates

## Troubleshooting

### Build Failures

```bash
# Clear cache
vercel build --no-cache

# Check logs
vercel logs --prod

# Rebuild from CLI
vercel --prod --force
```

### Performance Issues

1. Check Vercel Analytics for bottlenecks
2. Review Network tab in DevTools
3. Analyze bundle size: `npm run build -- --report`
4. Check for memory leaks
5. Optimize database queries

### SEO Not Indexing

1. Verify robots.txt allows crawling
2. Check Google Search Console
3. Submit sitemap manually
4. Check for 404 errors
5. Verify meta robots tag

### Security Issues

1. Update dependencies: `npm audit fix`
2. Review environment variables
3. Check CORS configuration
4. Enable WAF if needed
5. Review API endpoints

## Advanced Configurations

### Custom Build Script

Modify `vercel.json`:

```json
{
  "buildCommand": "npm run build:prod",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Webhook Integration

For CI/CD or notifications:

```json
{
  "GitHub": "https://your-webhook-url"
}
```

### Geographic Routing

Vercel auto-routes to nearest region. View in:
- Vercel Dashboard > Analytics > Regions

### Rate Limiting (Pro+)

Configure in Vercel Settings for API protection

## Cost Optimization

- **Hobby tier**: $0/month, 100 deployments/month
- **Pro tier**: $20/month, unlimited deployments
- **Enterprise**: Custom pricing

Estimate at: https://vercel.com/pricing

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- React Documentation: https://react.dev
- Vite Documentation: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion

## Deployment Completed

Once deployed, verify:

- [ ] Domain loads correctly
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Contact form functional
- [ ] Analytics tracking
- [ ] SEO indexed
- [ ] HTTPS working
- [ ] Performance metrics good
- [ ] No console errors
- [ ] Mobile responsive

## Post-Launch

### First 48 Hours

- Monitor error logs closely
- Check analytics setup
- Verify email notifications working
- Test contact form
- Monitor uptime

### First Week

- Review user feedback
- Optimize based on analytics
- Monitor SEO indexing progress
- Verify all features working
- Prepare marketing announcement

### Ongoing

- Regular security updates
- Performance monitoring
- SEO optimization
- User feedback integration
- Feature additions based on data
