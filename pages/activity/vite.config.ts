import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 项目站地址为 https://<user>.github.io/SKA/，构建产物需带 /SKA/ 前缀
export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: { port: 5173, host: true },
  base: command === "build" ? "/SKA/activity/" : "/",
}));
