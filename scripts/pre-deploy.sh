#!/bin/bash

# FullRange Supply - Pre-Deployment Validation Script
# This script performs critical checks before deployment to Vercel

set -e

echo "=================================="
echo "FullRange Supply - Build Validation"
echo "=================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
PASSED=0
FAILED=0
WARNINGS=0

# Helper functions
pass() {
  echo -e "${GREEN}[PASS]${NC} $1"
  ((PASSED++))
}

fail() {
  echo -e "${RED}[FAIL]${NC} $1"
  ((FAILED++))
}

warn() {
  echo -e "${YELLOW}[WARN]${NC} $1"
  ((WARNINGS++))
}

info() {
  echo -e "${BLUE}[INFO]${NC} $1"
}

# Step 1: Check Node and npm versions
echo "Step 1: Checking Node.js and npm versions..."
NODE_VERSION=$(node -v)
NPM_VERSION=$(npm -v)
echo "Node.js: $NODE_VERSION"
echo "npm: $NPM_VERSION"
pass "Node.js and npm installed"
echo ""

# Step 2: Check dependencies
echo "Step 2: Checking dependencies..."
if npm list > /dev/null 2>&1; then
  pass "Dependencies installed"
else
  fail "Dependencies not installed or outdated"
  npm install
fi
echo ""

# Step 3: Check for required files
echo "Step 3: Checking required configuration files..."
REQUIRED_FILES=(
  "vercel.json"
  ".env.example"
  "vite.config.js"
  "index.html"
  "package.json"
  "src/main.jsx"
  "src/App.jsx"
  "public/robots.txt"
  "public/sitemap.xml"
)

for file in "${REQUIRED_FILES[@]}"; do
  if [ -f "$file" ]; then
    pass "Found $file"
  else
    fail "Missing $file"
  fi
done
echo ""

# Step 4: Check for console.log statements
echo "Step 4: Checking for console statements..."
CONSOLE_COUNT=$(find src -name "*.jsx" -o -name "*.js" | xargs grep -l "console\." | wc -l)
if [ "$CONSOLE_COUNT" -gt 0 ]; then
  warn "Found $CONSOLE_COUNT files with console statements - remove before production"
else
  pass "No console statements found"
fi
echo ""

# Step 5: Check for TODO/FIXME comments
echo "Step 5: Checking for TODO/FIXME comments..."
TODO_COUNT=$(find src -name "*.jsx" -o -name "*.js" | xargs grep -i "TODO\|FIXME" | wc -l)
if [ "$TODO_COUNT" -gt 0 ]; then
  warn "Found $TODO_COUNT TODO/FIXME comments - review before production"
else
  pass "No TODO/FIXME comments"
fi
echo ""

# Step 6: Check ESLint
echo "Step 6: Running ESLint..."
if npm run lint > /dev/null 2>&1; then
  pass "ESLint passed"
else
  fail "ESLint issues found"
  npm run lint
fi
echo ""

# Step 7: Build optimization check
echo "Step 7: Checking vite.config.js for optimization settings..."
if grep -q "minify.*terser" vite.config.js; then
  pass "Minification configured"
else
  warn "Minification not configured"
fi

if grep -q "manualChunks" vite.config.js; then
  pass "Code splitting configured"
else
  warn "Code splitting not configured"
fi
echo ""

# Step 8: Environment variables check
echo "Step 8: Checking environment variables..."
if [ -f ".env.example" ]; then
  pass "Found .env.example"
  ENV_VARS=$(grep -c "VITE_" .env.example || true)
  if [ "$ENV_VARS" -gt 0 ]; then
    pass "Found $ENV_VARS Vite environment variables"
  fi
else
  warn "No .env.example file"
fi
echo ""

# Step 9: Check SEO files
echo "Step 9: Checking SEO configuration..."
if grep -q "sitemap.xml" public/robots.txt; then
  pass "robots.txt references sitemap"
else
  warn "robots.txt doesn't reference sitemap"
fi

if grep -q "<?xml" public/sitemap.xml; then
  pass "sitemap.xml is valid XML"
else
  fail "sitemap.xml is not valid XML"
fi

if grep -q "json.*ld" index.html; then
  pass "JSON-LD schema found in index.html"
else
  warn "JSON-LD schema not found"
fi
echo ""

# Step 10: Vercel configuration check
echo "Step 10: Checking Vercel configuration..."
if grep -q "buildCommand" vercel.json; then
  pass "Build command configured"
  BUILD_CMD=$(grep "buildCommand" vercel.json | head -1)
  echo "  $BUILD_CMD"
fi

if grep -q "outputDirectory" vercel.json; then
  pass "Output directory configured"
  OUT_DIR=$(grep "outputDirectory" vercel.json | head -1)
  echo "  $OUT_DIR"
fi

if grep -q "routes" vercel.json; then
  pass "Routes configured"
fi

if grep -q "headers" vercel.json; then
  pass "Security headers configured"
fi
echo ""

# Step 11: Build the project
echo "Step 11: Building project..."
if npm run build > /tmp/build.log 2>&1; then
  pass "Build successful"

  # Check build output size
  if [ -d "dist" ]; then
    BUILD_SIZE=$(du -sh dist | cut -f1)
    info "Build size: $BUILD_SIZE"

    BUNDLE_SIZE=$(ls -lh dist/assets/*.js 2>/dev/null | awk '{print $5, $9}')
    if [ ! -z "$BUNDLE_SIZE" ]; then
      info "Bundle sizes:"
      echo "$BUNDLE_SIZE" | while read size file; do
        echo "  $file: $size"
      done
    fi
  fi
else
  fail "Build failed"
  cat /tmp/build.log
fi
echo ""

# Step 12: Check build output
echo "Step 12: Verifying build output..."
if [ -f "dist/index.html" ]; then
  pass "dist/index.html exists"

  if grep -q "type=\"module\"" dist/index.html; then
    pass "Module script tag found"
  fi
else
  fail "dist/index.html not found"
fi

if [ -d "dist/assets" ]; then
  JS_FILES=$(find dist/assets -name "*.js" 2>/dev/null | wc -l)
  CSS_FILES=$(find dist/assets -name "*.css" 2>/dev/null | wc -l)
  pass "Found $JS_FILES JS files and $CSS_FILES CSS files"
else
  fail "dist/assets directory not found"
fi
echo ""

# Step 13: Check for accessibility
echo "Step 13: Checking accessibility features..."
if grep -q "focus-visible" src/index.css src/components/*.jsx; then
  pass "Focus-visible states configured"
else
  warn "Focus-visible states not configured"
fi

if grep -q "aria-label\|aria-labelledby" src/components/Contact.jsx; then
  pass "ARIA labels found in forms"
else
  warn "ARIA labels may be missing in forms"
fi
echo ""

# Step 14: Git status check
echo "Step 14: Checking Git status..."
if git rev-parse --git-dir > /dev/null 2>&1; then
  UNCOMMITTED=$(git status --porcelain | wc -l)
  if [ "$UNCOMMITTED" -eq 0 ]; then
    pass "No uncommitted changes"
  else
    warn "Found $UNCOMMITTED uncommitted changes"
    git status --short
  fi
else
  warn "Not a Git repository"
fi
echo ""

# Step 15: Summary
echo "=================================="
echo "Validation Summary"
echo "=================================="
echo -e "Passed: ${GREEN}$PASSED${NC}"
echo -e "Failed: ${RED}$FAILED${NC}"
echo -e "Warnings: ${YELLOW}$WARNINGS${NC}"
echo ""

if [ "$FAILED" -eq 0 ]; then
  echo -e "${GREEN}Ready for deployment!${NC}"
  echo ""
  echo "Next steps:"
  echo "1. Review warnings above"
  echo "2. Commit all changes: git commit -m 'Prepare for Vercel deployment'"
  echo "3. Push to remote: git push origin main"
  echo "4. Deploy: vercel --prod"
  exit 0
else
  echo -e "${RED}Fix errors before deploying!${NC}"
  exit 1
fi
