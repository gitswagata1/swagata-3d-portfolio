import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  // Keep paths as-is so the dev server works when launched through a
  // directory junction (the workspace's 3d-portfolio -> "SB Website 3D").
  resolve: { preserveSymlinks: true },
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
