---
name: Imported project checks
description: Verification caveats for the imported clinic project and its bundled Replit artifact templates.
---

The project’s Vite path plugin scans `.local/skills/artifacts` template TypeScript configs, which can emit missing-extends warnings even when the app’s own production bundle succeeds. The imported ESLint setup also applies Prettier checks across untouched legacy files, so avoid broad formatting churn when validating focused changes.

**Why:** Verification showed the application build and preview were healthy while tool output included unrelated template-config warnings and a large pre-existing formatting baseline.

**How to apply:** Treat the project’s own `vite build`, running preview, and focused diff checks as the meaningful release gates unless the user specifically asks to repair the imported tooling baseline.