# Deployment Instructions

## Quick Deploy to Render.com (Recommended - Free Tier Available)

1. Go to https://render.com and sign up/login (can use GitHub)
2. Click "New +" → "Web Service"
3. Connect your GitHub account and select the `hello-world-api` repository
4. Configure:
   - **Name**: hello-world-api (or any name you prefer)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
5. Click "Create Web Service"
6. Wait ~2-3 minutes for deployment
7. You'll get a URL like: `https://hello-world-api-xxxx.onrender.com`
8. Test at: `https://your-app-url.onrender.com/hello`

## Alternative: Deploy to Railway.app

1. Go to https://railway.app and sign up with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `hello-world-api`
4. Railway auto-detects Node.js and deploys
5. Click "Generate Domain" to get a public URL
6. Test at: `https://your-app.railway.app/hello`

## Alternative: Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel` in the project directory
3. Follow prompts (login with GitHub)
4. Get instant deployment URL
5. Test at: `https://your-app.vercel.app/hello`

## GitHub Repository

The code is available at: https://github.com/xcud/hello-world-api
