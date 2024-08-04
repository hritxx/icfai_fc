import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mui/material/utils": path.resolve(
        __dirname,
        "node_modules/@mui/material/utils"
      ),
      "@mui/material/SvgIcon": path.resolve(
        __dirname,
        "node_modules/@mui/material/SvgIcon"
      ),
      "@mui/utils/esm": path.resolve(__dirname, "node_modules/@mui/utils/esm"),
      "@mui/system/esm": path.resolve(
        __dirname,
        "node_modules/@mui/system/esm"
      ),
      "@mui/styled-engine": path.resolve(
        __dirname,
        "node_modules/@mui/styled-engine"
      ),
      // Add other necessary aliases
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "mui-utils": ["@mui/material/utils"],
          "mui-svg-icon": ["@mui/material/SvgIcon"],
          // Add other manual chunks as necessary
        },
      },
      commonjsOptions: {
        include: [/node_modules/],
      },
    },
  },
  base: "/icfai_fc/", // Replace <repository-name> with your repo name
});
