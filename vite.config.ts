import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5000,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },

    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },

  // =========================
  // 🧪 TEST FIX (IMPORTANT)
  // =========================
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globals: true,
  },

  build: {
    // ⚡ Modern but safe target
    target: "es2018",

    sourcemap: false,

    // 📦 important for your bundle size (~300kb)
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // 🔥 Smart code splitting (BIG performance win)
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            if (id.includes("@tanstack")) return "query-vendor";
            if (id.includes("framer-motion")) return "motion-vendor";
            return "vendor";
          }
        },
      },
    },

    minify: "esbuild",
  },

  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-query"],
  },
}));