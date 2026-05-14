# 🎯 Deployment Quick Reference

## ✅ Current Status
- ✓ Backend: Ready for Render
- ✓ Frontend: Ready for Vercel
- ✓ Local Testing: All working

## 📋 Environment Variables Checklist

### Backend (Render)
```
NODE_ENV=production
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=16-char-app-password
FRONTEND_URL=https://your-frontend.com
```

### Frontend (Vercel)
```
VITE_API_URL=https://portfolio-backend-xxxxx.render.com
```

## 🚀 Deployment Steps (5 minutes)

### 1️⃣ Commit to Git
```bash
git add .
git commit -m "Ready for deployment"
git push -u origin main
```

### 2️⃣ Deploy Backend on Render (2 mins)
- Go to render.com → New Web Service
- Select repository
- Build Command: `./build.sh`
- Start Command: `node backendportfolio/server.js`
- Add environment variables
- Click "Create Web Service"

### 3️⃣ Deploy Frontend on Vercel (2 mins)
- Go to vercel.com → Add New Project
- Select repository
- Root Directory: `./frontendportfolio`
- Add `VITE_API_URL` env var with Render URL
- Click "Deploy"

### 4️⃣ Link Them (1 min)
- Update Render backend `FRONTEND_URL` to Vercel domain
- Redeploy backend

## 🔗 Important URLs (after deployment)

```
Backend:  https://portfolio-backend-xxxxx.render.com
Frontend: https://your-portfolio.vercel.app
Gmail Password: myaccount.google.com/apppasswords
```

## ✔️ Testing Commands

```bash
# Backend health
curl https://portfolio-backend-xxxxx.render.com/api/health

# Test email (after deployment)
# Fill form on website and submit
# Check email inbox
```

## 🆘 If Something Breaks

1. **Check Render Logs** → Dashboard → Service → Logs
2. **Check Vercel Logs** → Deployments → Logs
3. **Verify Environment Variables** → All 5 backend + 1 frontend
4. **Test Locally First** → `npm run dev` + `npm start`
5. **Common Fix** → Redeploy both services

## 📱 Post-Deployment

- [ ] Test health endpoint
- [ ] Fill contact form
- [ ] Check email receives message
- [ ] Check console for errors
- [ ] Share deployed link

---

**Next Step:** Follow RENDER_SETUP_GUIDE.md for detailed instructions
