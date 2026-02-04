#!/bin/bash

# Twin City Endo Deployment Script
# Deploy to Vercel or Netlify

echo "🚀 Twin City Endo Deployment"
echo "============================"

# Option 1: Deploy to Vercel (requires Vercel CLI)
echo ""
echo "Option 1: Deploy to Vercel"
echo "1. Install Vercel CLI: npm i -g vercel"
echo "2. Login: vercel login"
echo "3. Deploy: vercel --prod"

# Option 2: Deploy to Netlify (alternative)
echo ""
echo "Option 2: Deploy to Netlify"
echo "1. Install Netlify CLI: npm i -g netlify-cli"
echo "2. Login: netlify login"
echo "3. Deploy: netlify deploy --prod --dir=dist"

# Option 3: GitHub Integration (recommended)
echo ""
echo "Option 3: GitHub Integration (Easiest)"
echo "1. Go to: https://vercel.com/new"
echo "2. Import your repo: cyborg5000/twincityendocomsg"
echo "3. Configure: Framework Preset = Vite"
echo "4. Deploy!"

echo ""
echo "Current Build Status:"
echo "- Build: ✅ Successful"
echo "- Files: All pages created"
echo "- Images: 15 assets downloaded"
echo "- Commit: 717b779"

echo ""
echo "🌐 After deployment, your site will be available at:"
echo "   https://twincityendocomsg.vercel.app"
