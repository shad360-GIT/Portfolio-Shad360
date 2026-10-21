# Zero-Downtime Deployment & Hostinger DNS Configuration Guide

This repository is engineered for **continuous, zero-downtime deployment (CI/CD)** with full compatibility for **Hostinger DNS**, **GitHub Pages**, **Vercel**, and **Hostinger Cloud/Web Hosting**.

---

## 1. Permanent Fix for the `ERESOLVE` Peer Dependency Issue

The root cause of `npm error code ERESOLVE` during deployment is npm 7+ strict peer-dependency checks conflicting between modern React versions and tooling dependencies. 

This repository fixes this permanently across all environments:
1. **Repository `.npmrc` configured**: Contains `legacy-peer-deps=true` so any automated runner (`npm install` or `npm ci`) on Vercel, Hostinger, GitHub Actions, or local machine automatically resolves dependencies without crashing.
2. **`vercel.json` override**: Explicitly sets `"installCommand": "npm install --legacy-peer-deps"`.
3. **`package.json` dependency alignment**: `esbuild` aligned to `^0.28.0` matching `vite@8.3.x`.
4. **GitHub Actions Workflow**: Uses `npm ci --legacy-peer-deps || npm install --legacy-peer-deps`.

No manual console overrides or command adjustments are required on your hosting provider anymore.

---

## 2. Zero-Downtime Deployment Architecture

### What is Zero Downtime?
In traditional FTP or git pulls directly into `public_html/`, files are overwritten sequentially over 30 to 90 seconds. Visitors browsing during that window experience **blank white screens**, **404 chunk errors**, and **broken layouts**.

### How Zero Downtime is Achieved Here:
- **Strategy 1: Atomic CDN Edge Deployment (Vercel / GitHub Pages)**
  Every deployment generates an immutable content-addressed build. Automated health checks verify the build. Once verified, the edge router updates DNS/routing pointers atomically in **0 milliseconds**. The previous build continues serving traffic until the new build is 100% active.
- **Strategy 2: POSIX Atomic Symlink Swap (Hostinger Web / VPS Hosting)**
  When deploying directly to a Linux server or Hostinger hosting via SSH/CI:
  1. Build artifacts are uploaded to an isolated release folder: `~/releases/<commit-sha>/` (Green environment).
  2. While files are uploading, `~/public_html` continues pointing to the previous release (Blue environment).
  3. Once all files are fully uploaded, an atomic symlink swap executes:
     ```bash
     ln -sfn ~/releases/<commit-sha> ~/public_html_swap
     mv -Tf ~/public_html_swap ~/public_html
     ```
  4. The swap is instantaneous at the filesystem inode level—zero dropped requests.

---

## 3. Hostinger DNS Setup (Step-by-Step)

Depending on where you choose to host your application, configure your Hostinger DNS Zone as follows:

### Option A: Hosting on Vercel (Recommended for Best Zero-Downtime & Global Edge Performance)
1. Push your repository to GitHub.
2. Import the repository in your [Vercel Dashboard](https://vercel.com/new). Vercel detects Vite and uses our automated `vercel.json`.
3. In Vercel Project Settings -> **Domains**, add your custom domain (e.g. `yourdomain.com` and `www.yourdomain.com`).
4. Log into **Hostinger hPanel** -> **Domains** -> **DNS / Nameservers**:
   - Add/Edit **A Record**:
     - **Name / Host**: `@`
     - **Points to / IP**: `76.76.21.21`
     - **TTL**: `14400` (or `300` for fast propagation)
   - Add/Edit **CNAME Record**:
     - **Name / Host**: `www`
     - **Points to**: `cname.vercel-dns.com`
     - **TTL**: `14400`
5. DNS propagates within 5-15 minutes, and SSL certificates are issued automatically.

---

### Option B: Hosting on GitHub Pages with Hostinger DNS
1. In your GitHub repository:
   - Go to **Settings** -> **Pages**.
   - Under **Build and deployment**, select **Source: GitHub Actions**.
   - In **Custom domain**, enter your domain (e.g. `yourdomain.com`) and check **Enforce HTTPS**.
2. Log into **Hostinger hPanel** -> **DNS / Nameservers**:
   - Add 4 **A Records** for apex `@`:
     - `@` -> `185.199.108.153`
     - `@` -> `185.199.109.153`
     - `@` -> `185.199.110.153`
     - `@` -> `185.199.111.153`
   - Add 1 **CNAME Record** for `www`:
     - `www` -> `<your-github-username>.github.io`

---

### Option C: Hosting Directly on Hostinger Web / Cloud Hosting
1. Log into **Hostinger hPanel** -> **Websites** -> **Manage** -> **Git**:
   - Repository: `https://github.com/<your-username>/<your-repo>`
   - Branch: `main`
   - Install directory: `public_html`
   - Automated deployment: **Enabled**
2. In Hostinger Web Hosting, the included `public/.htaccess` automatically configures:
   - Client-side Single Page Application (SPA) URL rewrites to `index.html`.
   - Immutable cache headers for all Vite CSS/JS chunks.
   - Brotli and Gzip compression.
   - HTTPS enforcement.

---

## 4. Git Push Commands (To Deploy to GitHub)

Run the following commands in your terminal to push this project to your new GitHub repository:

```bash
# 1. Stage all deployment files
git add .

# 2. Create the initial production commit
git commit -m "feat: complete production CI/CD setup with zero-downtime deployment, Hostinger DNS readiness, and ERESOLVE resolution"

# 3. Add your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPOSITORY-NAME>.git

# 4. Push to main branch
git push -u origin main
```

Once pushed, the automated GitHub Actions workflow will trigger immediately, run verification tests, and execute the zero-downtime deployment!
