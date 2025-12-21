#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('\n🚀 QuantFund AI - Quick Start Setup\n');
console.log('=' .repeat(50));

// Check Node version
const nodeVersion = process.version;
console.log(`✓ Node.js ${nodeVersion}`);

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log('\n📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✓ Dependencies installed\n');
  } catch (error) {
    console.error('❌ Failed to install dependencies');
    process.exit(1);
  }
} else {
  console.log('✓ Dependencies already installed\n');
}

// Check environment file
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('⚠️  Creating .env.local file...');
  const exampleEnv = `# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=noreply@quantfund-ai.com

# Public API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=

# Environment
NODE_ENV=development
`;
  fs.writeFileSync(envPath, exampleEnv);
  console.log('✓ .env.local created\n');
}

console.log('=' .repeat(50));
console.log('\n📋 Setup Complete!\n');
console.log('Next steps:\n');
console.log('1. Start development server:');
console.log('   npm run dev\n');
console.log('2. Open your browser:');
console.log('   http://localhost:3000\n');
console.log('3. Build for production:');
console.log('   npm run build\n');
console.log('💡 Tip: Configure .env.local with your email settings for contact form\n');
