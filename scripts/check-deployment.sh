#!/bin/bash

# Vercel Deployment Pre-Check Script
# Run this before deploying to catch common issues

echo "🔍 Checking deployment readiness..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

echo "✅ Project structure OK"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules not found. Run: npm install"
    exit 1
fi

echo "✅ Dependencies installed"

# Check for TypeScript errors
echo ""
echo "📝 Checking TypeScript..."
npx tsc --noEmit
if [ $? -eq 0 ]; then
    echo "✅ TypeScript checks passed"
else
    echo "❌ TypeScript errors found. Fix them before deploying."
    exit 1
fi

# Check for linting issues
echo ""
echo "🔧 Running linter..."
npm run lint
if [ $? -eq 0 ]; then
    echo "✅ Linting passed"
else
    echo "⚠️  Linting warnings found. Review them."
fi

# Try to build
echo ""
echo "🏗️  Testing production build..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed. Fix errors before deploying."
    exit 1
fi

# Check for .env.local (should not be committed)
if [ -f ".env.local" ]; then
    echo ""
    echo "⚠️  .env.local found - make sure it's in .gitignore"
    if grep -q "^\.env\.local$" .gitignore; then
        echo "✅ .env.local is in .gitignore"
    else
        echo "❌ Add .env.local to .gitignore!"
    fi
fi

# Check for required files
echo ""
echo "📋 Checking required files..."
required_files=(
    "src/lib/siteConfig.ts"
    "src/lib/i18n/dictionaries.ts"
    ".env.example"
    "README.md"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

# Vercel Environment Variables reminder
echo ""
echo "📌 VERCEL DEPLOYMENT CHECKLIST:"
echo ""
echo "Before deploying to Vercel, make sure you've:"
echo ""
echo "1. ✅ Set environment variables in Vercel dashboard:"
echo "   - RESEND_API_KEY"
echo "   - CONTACT_EMAIL"
echo "   - NEXT_PUBLIC_SITE_URL"
echo ""
echo "2. ✅ Updated personal info in src/lib/siteConfig.ts"
echo ""
echo "3. ✅ Tested all forms locally"
echo ""
echo "4. ✅ Reviewed content in dictionaries.ts"
echo ""
echo "5. ✅ Committed all changes to git"
echo ""
echo "📚 For detailed instructions, see:"
echo "   - VERCEL-DEPLOYMENT.md"
echo "   - DEPLOYMENT-CHECKLIST.md"
echo ""
echo "🚀 Ready to deploy to Vercel!"
