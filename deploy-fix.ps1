# 💖 Step 1: Check and fix Git remote
Write-Host "🔍 Checking current Git remote..."
$remote = git remote get-url origin 2>$null

if ($remote -ne "https://github.com/gurjardurgesh88/Text-editor-app.git") {
    Write-Host "❌ Wrong remote found. Fixing it now..."
    git remote remove origin
    git remote add origin https://github.com/gurjardurgesh88/Text-editor-app.git
    Write-Host "✅ Remote fixed!"
} else {
    Write-Host "✅ Remote is already correct!"
}

# 💾 Step 2: Commit and push
git add .
git commit -m "🚀 Auto update via deploy script" 2>$null
git push origin main

# 🔨 Step 3: Build React app
Write-Host "🛠️ Building React app..."
npm run build

# 🚀 Step 4: Deploy to GitHub Pages
Write-Host "🌐 Deploying to gh-pages..."
npx gh-pages -d build --dotfiles

# ✅ Done
Write-Host "🎉 Deployed! Visit: https://gurjardurgesh88.github.io/Text-editor-app"
Start-Process "https://gurjardurgesh88.github.io/Text-editor-app"