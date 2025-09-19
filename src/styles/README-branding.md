# Branding quick start
- Put your logo at `/public/logo.svg` and it will auto-appear in the cc NavBar.
- Tweak colors via Tailwind config or CSS variables in `globals.css`.


---

### What we're *salvaging* from your template
- App Router + TS + Tailwind + Motion + Grid + SEO; we don't replace them, we add a safe, isolated UI-first slice under `/cc`.
- Your heavy all-in-one SaaS boilerplate (`evolution-x`) stays out until you're ready; we avoid auth/DB/Sentry/etc. now to keep builds fast.

### Branding
- Yes—supported. Drop `/public/logo.svg` to brand the Nav; fallback text until then. We can also wire brand tokens next (colors/typography) without touching components.

**a.** Want me to also add a tiny `/api/users` (Next Route Handler) + Zustand store so "real mode" works while keeping mock as default?  
**b.** Want a one-click PR diff (git patch) you can apply to `evolution-template`?