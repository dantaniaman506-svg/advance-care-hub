---
name: Vercel registry compatibility
description: External Vercel builds must not depend on Replit-only npm registry URLs.
---

When deploying this imported project through Vercel, dependency installation must use the public npm registry. Replit-generated lockfiles may contain internal package-firewall URLs that are unreachable from Vercel.

**Why:** A Vercel build cloned an older commit and failed during `npm install` with `npm error Exit handler never called`; local inspection found Replit-only resolved package URLs in the lockfile.

**How to apply:** Keep the project registry explicitly set to `https://registry.npmjs.org/` for external builds, avoid committing lockfiles that contain Replit-only hosts, and validate with a clean install plus `npm run build` before redeploying.