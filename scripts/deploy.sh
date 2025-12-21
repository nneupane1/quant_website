#!/bin/bash

# QuantFund AI - Deployment Script
# This script builds and deploys the website

set -e

echo "🚀 Starting QuantFund AI deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check for errors
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📋 Next steps:"
echo "1. For local testing: npm run dev"
echo "2. For production: npm start"
echo "3. For Docker deployment: docker build -t quantfund-ai . && docker run -p 3000:3000 quantfund-ai"
echo ""
echo "🎉 Deployment complete!"
