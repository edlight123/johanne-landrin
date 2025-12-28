# Vercel Deployment Configuration

## Environment Variables

Add these in your Vercel project settings (Settings → Environment Variables):

### Required Variables

```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=contact@johannelandrin.com
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### How to Add Environment Variables in Vercel

1. Go to your project on Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your Resend API key from https://resend.com
   - **Environments:** Select Production, Preview, and Development
   
4. Repeat for `CONTACT_EMAIL` and `NEXT_PUBLIC_SITE_URL`

### After Adding Variables

- Redeploy your project for changes to take effect
- Or trigger a new deployment by pushing to your repository

## Custom Domain Setup

1. Go to **Settings** → **Domains**
2. Add your custom domain (e.g., johannelandrin.com)
3. Follow Vercel's DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` to your custom domain
5. Redeploy

## Vercel Deployment Settings

### Build Settings (Auto-detected)
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` or `next build`
- **Output Directory:** `.next` (automatic)
- **Install Command:** `npm install`

### Root Directory
- Leave as `.` (root)

## Vercel Features Enabled

✅ **Automatic HTTPS** - SSL certificates managed by Vercel
✅ **Edge Network** - Global CDN for fast loading
✅ **Image Optimization** - Next.js Image component optimized
✅ **ISR Support** - Incremental Static Regeneration ready
✅ **API Routes** - Serverless functions for forms
✅ **Analytics** - Optional (can enable in Vercel dashboard)

## Post-Deployment Checklist

After your first successful deployment:

1. ✅ Visit your Vercel deployment URL
2. ✅ Test all pages load correctly
3. ✅ Test language switcher (FR/KR)
4. ✅ Test all 3 forms:
   - Booking form
   - Contact form
   - Workshop inquiry form
5. ✅ Verify emails are received
6. ✅ Test on mobile devices
7. ✅ Check Lighthouse score
8. ✅ Add custom domain (optional)
9. ✅ Update `NEXT_PUBLIC_SITE_URL` with final domain
10. ✅ Submit sitemap to Google Search Console

## Monitoring & Logs

### View Deployment Logs
1. Go to **Deployments** tab
2. Click on any deployment
3. View build logs and runtime logs

### View Function Logs (API Routes)
1. Go to **Logs** tab (if enabled)
2. Monitor API route executions
3. Debug form submission issues

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json
- Ensure TypeScript compilation passes locally

### Environment Variables Not Working
- Make sure they're set for all environments (Production, Preview, Development)
- Redeploy after adding variables
- Check variable names match exactly

### Forms Don't Send Emails
- Verify `RESEND_API_KEY` is correct
- Check Resend dashboard for send attempts
- View function logs in Vercel
- Ensure `CONTACT_EMAIL` is valid

### Images Not Loading
- Images in `/public` folder are served at `/filename.jpg`
- Use Next.js Image component for optimization
- Check image paths are correct

## Performance Optimization

### Automatic Optimizations by Vercel
- ✅ Gzip/Brotli compression
- ✅ HTTP/2 and HTTP/3
- ✅ Edge caching
- ✅ Image optimization
- ✅ Code splitting

### Additional Recommendations
- Enable Vercel Analytics (Settings → Analytics)
- Monitor Web Vitals
- Use Speed Insights for optimization tips

## Security

### HTTPS
- Automatically enabled
- Certificates auto-renewed
- HSTS headers included

### Headers
Already configured in Next.js:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection

## Continuous Deployment

### Automatic Deployments
- **Production:** Deploys on push to `main` branch
- **Preview:** Deploys on push to any branch or PR
- Each PR gets a unique preview URL

### Manual Deployment
1. Push to GitHub
2. Vercel automatically builds and deploys
3. Check deployment status in Vercel dashboard

## Rollback

If something goes wrong:
1. Go to **Deployments** tab
2. Find a previous successful deployment
3. Click **...** → **Promote to Production**

## Cost

- **Free Tier:** Perfect for this site
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic HTTPS
  - 100 serverless function executions/day per deployment

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables Guide](https://vercel.com/docs/projects/environment-variables)
- [Custom Domains](https://vercel.com/docs/projects/domains)

---

**🚀 Your site is deployed and ready!**

Check your deployment at: `https://your-project.vercel.app`
