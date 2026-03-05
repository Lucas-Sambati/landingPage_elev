import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // GitHub Pages custom domain: https://iniciar.elevhq.com/
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor: React core (compartilhado por todos os chunks)
          "vendor-react": ["react", "react-dom"],
          // Framer Motion isolado (maior dep)
          "vendor-motion": ["framer-motion"],
        },
      },
    },
    // Melhor compressão
    target: "es2020",
    cssCodeSplit: true,
  },
});
