import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Keep path discovery scoped to this app; bundled Replit artifact
    // templates under .local are separate projects with their own configs.
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
  },
});
