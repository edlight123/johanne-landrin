# 🚀 Vercel Deployment - Quick Reference

## ⚡ 3 Steps to Go Live

### 1. Set Environment Variables in Vercel
**Location:** Project Settings → Environment Variables

Add these 3 variables (copy-paste ready):

```
Variable Name: RESEND_API_KEY
Value: [Get from resend.com]
Environments: ✓ Production ✓ Preview ✓ Development
```

```
Variable Name: CONTACT_EMAIL
Value: contact@johannelandrin.com
Environments: ✓ Production ✓ Preview ✓ Development
```

```
Variable Name: NEXT_PUBLIC_SITE_URL
Value: https://[your-project-name].vercel.app
Environments: ✓ Production ✓ Preview ✓ Development
```

### 2. Wait for Auto-Deploy
Vercel is already deploying your site automatically! Check:
- Vercel Dashboard → Deployments tab
- Watch build logs in real-time
- ETA: 2-3 minutes

### 3. Test Your Live Site
Once deployed, test:
- ✅ Visit your `.vercel.app` URL
- ✅ Try booking form
- ✅ Try contact form
- ✅ Switch languages (FR/KR)
- ✅ Test on mobile

## 📌 Important Links

**Your GitHub Repo:**
https://github.com/edlight123/johanne-landrin

**Vercel Dashboard:**
https://vercel.com/dashboard

**Get Resend API Key:**
https://resend.com/api-keys

## 🔧 What's Already Configured

✅ **Next.js Config** - Optimized for production
✅ **Security Headers** - HTTPS, XSS protection, etc.
✅ **Image Optimization** - Automatic WebP/AVIF
✅ **SEO** - Sitemap, robots.txt, JSON-LD
✅ **Forms** - 3 working forms with validation
✅ **Bilingual** - French + Haitian Creole
✅ **Responsive** - Mobile-first design
✅ **Git** - Pushed to GitHub ✓

## 📝 After First Deployment

1. **Get Your URL**
   - Check Vercel dashboard
   - Copy production URL
   - Test all pages

2. **Update Site URL**
   - Go back to Environment Variables
   - Update `NEXT_PUBLIC_SITE_URL` with actual Vercel URL
   - Trigger redeploy (or wait for next push)

3. **Test Forms**
   - Fill out booking form
   - Check if email arrives
   - If no email: verify `RESEND_API_KEY` is correct

4. **Add Custom Domain** (Optional)
   - Vercel Settings → Domains
   - Add your domain (e.g., johannelandrin.com)
   - Follow DNS setup instructions
   - Update `NEXT_PUBLIC_SITE_URL` again

## 🆘 Troubleshooting

### Build Fails
**Check:** Build logs in Vercel
**Likely cause:** Missing environment variables
**Fix:** Add all 3 variables listed above

### Forms Don't Work
**Check:** Function logs in Vercel
**Likely cause:** Invalid `RESEND_API_KEY`
**Fix:** Get new key from resend.com

### 404 Errors
**Check:** URL path
**Likely cause:** Old cache
**Fix:** Do hard refresh (Ctrl+Shift+R)

### Environment Variables Not Working
**Check:** All environments selected?
**Fix:** Must check ✓ Production, ✓ Preview, ✓ Development

## 📊 Monitor Your Site

**Vercel Dashboard provides:**
- 📈 Real-time analytics
- 🔍 Build logs
- ⚡ Function logs (API routes)
- 📊 Performance metrics
- 🌍 Geographic traffic data

## 💡 Pro Tips

1. **Custom Domain is Free**
   - No extra cost on Vercel
   - Automatic HTTPS included
   - Configure in 5 minutes

2. **Every Push = New Deploy**
   - Push to GitHub
   - Vercel auto-deploys
   - Get preview URL for branches

3. **Preview Deployments**
   - Create a branch
   - Push changes
   - Get unique preview URL
   - Test before merging to main

4. **Rollback Anytime**
   - Deployments → Previous deployment
   - Click "Promote to Production"
   - Instant rollback!

## 🎯 Performance Targets

Your site should score:
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 95+

Test at: https://pagespeed.web.dev

## 📚 Documentation

**Full Guides:**
- `VERCEL-READY.md` - You are here! ⬅️
- `VERCEL-DEPLOYMENT.md` - Detailed Vercel guide
- `DEPLOYMENT-CHECKLIST.md` - Complete checklist
- `QUICKSTART.md` - Content editing guide
- `README.md` - Technical docs

## ✅ Final Checklist

- [ ] Pushed to GitHub ✓ (Done!)
- [ ] Set 3 environment variables in Vercel
- [ ] Wait for deployment (2-3 min)
- [ ] Test live site
- [ ] Test all forms
- [ ] Check email delivery
- [ ] Test on mobile
- [ ] Add custom domain (optional)
- [ ] Submit sitemap to Google

## 🎉 You're Live!

Your professional psychology website is now deployed and serving clients worldwide! 🌍

**What's Next?**
1. Update personal info in `/src/lib/siteConfig.ts`
2. Add your bio and photos
3. Share your URL!
4. Monitor form submissions

---

**Questions?** Check the docs above or Vercel support.

**🚀 Happy deploying!**
