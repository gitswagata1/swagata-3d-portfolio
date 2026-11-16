import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  server: { fs: { strict: false } },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Split the heavy 3D libs into their own cached chunks
        manualChunks: {
          three: ["three"],
          r3f: ["@react-three/fiber", "@react-three/drei"],
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
