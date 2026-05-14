# 🚀 Complete Render Deployment Guide

## Backend Deployment (Render)

### Step 1: Prepare Your Repository for Render

Ensure all files are committed to Git:

```bash
cd portfilo
git add .
git commit -m "Prepare for Render deployment"
git push -u origin main
```

### Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub (recommended)
3. Authorize Render to access your repositories

### Step 3: Connect Backend Service on Render

1. In Render Dashboard, click **New +** → **Web Service**
2. Select your `portfilo` repository
3. Fill in the following settings:

**Service Configuration:**
- **Name:** `portfolio-backend`
- **Runtime:** `Node`
- **Build Command:** `./build.sh`
- **Start Command:** `node backendportfolio/server.js`
- **Plan:** `Free` (or upgraded if needed)

### Step 4: Add Environment Variables

In the **Environment** tab, add these variables:

```
NODE_ENV=production
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=https://your-portfolio-domain.com
```

**How to get Gmail App Password:**
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Windows Computer"
3. Generate and copy the 16-character password
4. Use this as `EMAIL_PASS` (NOT your regular Gmail password)

### Step 5: Deploy

Click **Create Web Service** and wait for deployment to complete.

**Your backend URL will be:** `https://portfolio-backend-xxxxx.render.com`

---

## Frontend Deployment (Vercel)

### Step 1: Create .env.production

Create `frontendportfolio/.env.production`:

```
VITE_API_URL=https://portfolio-backend-xxxxx.render.com
```

Replace with your actual Render backend URL.

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Select your `portfilo` repository
5. Configure settings:
   - **Framework:** Vite
   - **Root Directory:** `./frontendportfolio`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### Step 3: Add Environment Variables

In Environment Variables:
```
VITE_API_URL=https://portfolio-backend-xxxxx.render.com
```

### Step 4: Deploy

Click **Deploy** and wait for completion.

**Your frontend URL will be:** `https://your-portfolio.vercel.app`

---

## Update Backend CORS

After frontend is deployed:

1. Go back to Render Dashboard
2. Select your backend service
3. Go to **Environment** tab
4. Update `FRONTEND_URL` to: `https://your-portfolio.vercel.app`
5. Click **Save** and the service will auto-redeploy

---

## Testing Deployment

### Test Backend Health
```bash
curl https://portfolio-backend-xxxxx.render.com/api/health
```

Should return:
```json
{"status":"Server is running","environment":"production"}
```

### Test Contact Form
1. Visit your frontend URL
2. Fill and submit the contact form
3. Check your email inbox for the message

---

## Troubleshooting

### ❌ Build Fails on Render

**Error:** `build.sh: command not found`
**Solution:** 
- Add build.sh to Git: `git add build.sh`
- Make sure it's executable

**Error:** `Cannot find module 'express'`
**Solution:**
- Check `backendportfolio/package.json` has all dependencies
- Run locally: `cd backendportfolio && npm install`

### ❌ Service Not Starting

**Check Render logs:**
1. Go to Render Dashboard
2. Select your service
3. Click **Logs** tab
4. Look for error messages

**Common issues:**
- PORT not set → Add PORT=5000 in Environment
- Missing .env variables → Add all required variables
- Wrong node version → Check package.json scripts

### ❌ CORS Errors

**Error:** "CORS policy: No 'Access-Control-Allow-Origin' header"
**Solution:**
- Update backend `FRONTEND_URL` to exact frontend domain
- Make sure frontend is using correct API URL
- Redeploy backend after updating FRONTEND_URL

### ❌ Emails Not Sending

**Steps to fix:**
1. Verify Gmail App Password is correct (16 characters)
2. Check Render logs for SMTP errors
3. Ensure 2FA is enabled on Gmail
4. Try generating a new App Password

---

## Local Testing Before Deployment

Before deploying to Render, test locally:

```bash
# Terminal 1: Start backend
cd backendportfolio
npm install
npm start

# Terminal 2: Start frontend
cd frontendportfolio
npm install
npm run dev
```

Visit `http://localhost:5174` and test the contact form.

---

## Quick Commands

```bash
# Check if backend is running
curl http://localhost:5000/api/health

# Test contact endpoint locally
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Your Name",
    "email": "your@email.com",
    "subject": "Test",
    "message": "Test message"
  }'

# View Render logs (after deployment)
# Use Render dashboard → Logs tab
```

---

## Important Notes

✅ **What's Ready:**
- Backend server configured for production
- CORS properly set up
- Health check endpoint added
- Environment variables configured
- Build scripts created

✅ **Local Testing:** Verified working
- Backend ✓ Email sending ✓
- Frontend build ✓
- API endpoints ✓

⚠️ **Before Deploying:**
- [ ] Have Gmail account with 2FA enabled
- [ ] Generate Gmail App Password
- [ ] Commit all changes to Git
- [ ] Have Render and Vercel accounts

📌 **After Deploying:**
- [ ] Test backend health endpoint
- [ ] Test contact form submission
- [ ] Verify email delivery
- [ ] Check browser console for errors

---

## Support

If issues persist:
1. Check Render Logs (Dashboard → Service → Logs)
2. Check Vercel Logs (Deployments → Logs)
3. Verify environment variables are set
4. Ensure all files are committed to Git
