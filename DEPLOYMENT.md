# Deployment Guide - Haseeb Portfolio

## 🚀 Quick Start

Your portfolio has been successfully pushed to GitHub at: https://github.com/HaseebUllah312/Portfolio

### Build Status
✅ **Build Test: PASSED** - The project compiles successfully with no errors.

## Deployment Options

### 1. **Vercel (Recommended - 5 minutes)**
Vercel is the best platform for Next.js applications as it's created by the Next.js team.

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "Add New..." → "Project"
5. Find and select `HaseebUllah312/Portfolio` repository
6. Click "Import"
7. Environment variables are optional (leave as is for now)
8. Click "Deploy"

**That's it!** Your site will be live in ~2-3 minutes at `portfolio-[random].vercel.app`

**To set a custom domain:**
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain (e.g., yourdomain.com)
4. Follow the DNS configuration instructions

---

### 2. **Netlify (Alternative - 5 minutes)**

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign Up with GitHub"
3. Authorize and connect your GitHub account
4. Click "New site from Git"
5. Choose GitHub and select the Portfolio repository
6. Build settings should auto-detect:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy site"

---

### 3. **AWS Amplify**

**Steps:**
1. Go to [AWS Amplify Console](https://us-east-1.console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Select GitHub
4. Choose the Portfolio repository
5. Accept default build settings
6. Click "Save and deploy"

---

### 4. **Self-Hosted (VPS/Server)**

**Requirements:**
- Node.js 18+ installed
- npm or yarn package manager

**Steps:**
```bash
# 1. SSH into your server
ssh user@your-server.com

# 2. Clone the repository
git clone https://github.com/HaseebUllah312/Portfolio.git
cd Portfolio

# 3. Install dependencies
npm install

# 4. Build the project
npm run build

# 5. Start the server (using PM2 recommended)
npm install -g pm2
pm2 start npm --name "portfolio" -- start

# 6. Make it persistent
pm2 startup
pm2 save
```

**Using Nginx as reverse proxy:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📝 Environment Variables

Copy `.env.example` to `.env.local` and fill in any required variables:

```bash
cp .env.example .env.local
```

**For contact form to work, you may need to configure an email service.** Check your contact form implementation for details.

---

## 📦 Project Structure

- `/app` - Next.js App Router pages
- `/components` - React components
- `/posts` - MDX blog posts
- `/public` - Static assets (images, certificates, projects)
- `/lib` - Utility functions
- `/utils` - Helper functions

---

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run type-check # TypeScript type checking
```

---

## ✅ Pre-Deployment Checklist

- [x] Git repository initialized and pushed
- [x] Build test passed successfully
- [x] `.env.example` created for reference
- [x] `vercel.json` configured
- [x] `next.config.js` properly configured
- [x] All dependencies listed in `package.json`
- [x] TypeScript configuration ready

---

## 🐛 Troubleshooting

**Build fails with "Module not found"**
- Run `npm install` to ensure all dependencies are installed

**Environment variables not working**
- Make sure you've created `.env.local` in the root directory
- Restart the development server after adding variables

**Contact form not sending emails**
- Set up your email service credentials in `.env.local`
- Update the API route in `/app/api/subscribe/route.ts` with your service details

---

## 📞 Support

For issues with:
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment**: Check your platform's documentation
- **Code issues**: Review the GitHub repository

---

**Happy Deploying! 🎉**
