# Vercel deployment

1. Add the approved `public/brand/phishguard-logo.png` asset.
2. Push the repository to GitHub.
3. Import it into Vercel; framework preset: Vite.
4. Build command: `npm run build`; output directory: `dist`.
5. Set `VITE_APP_VERSION` only if desired; it is not a secret.
6. Deploy. `vercel.json` rewrites routes to `index.html` so deep links work.

No backend hosting is needed for this static demo. A production backend needs a managed database and a server-side authentication provider; configure its secrets only in Vercel project settings (never client-exposed variables).
