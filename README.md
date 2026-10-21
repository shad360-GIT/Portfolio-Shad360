# Portfolio & Web Application

Production-grade web application built with React 19, TypeScript, Tailwind CSS, and Vite. Configured for zero-downtime CI/CD deployment via GitHub Actions, Vercel, and Hostinger DNS.

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run type check and linting
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Production Deployment & CI/CD

This application is ready to deploy to GitHub and Hostinger DNS with:
- **Zero-Downtime Deployment Strategy**: Atomic CDN Edge deployments & POSIX Symlink swap workflows in `.github/workflows/deploy.yml`.
- **Permanent ERESOLVE Fix**: `.npmrc` configured with `legacy-peer-deps=true` and explicit install command configurations.
- **Hostinger & LiteSpeed SPA Support**: Production `public/.htaccess` ensuring seamless client-side routing, compression, and security headers.
- **Vercel Zero-Config Deployment**: Optimized `vercel.json` with cache controls and clean URLs.

👉 **For complete step-by-step instructions and DNS records, see [HOSTINGER_DNS_SETUP.md](./HOSTINGER_DNS_SETUP.md).**
