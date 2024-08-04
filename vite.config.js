import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/icfai_fc/", // Replace <repository-name> with your repo name
});
