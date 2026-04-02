import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: { port: 5174, host: true },
  base: command === "build" ? "/SKA/signin/" : "/",
}));
