import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // Para GitHub Pages: se o repositório for https://usuario.github.io/nome-repo/
  // altere para: base: "/nome-repo/"
  // Se for https://usuario.github.io/ (repo principal), use: base: "/"
  base: "/landingPage_elev",
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
});
