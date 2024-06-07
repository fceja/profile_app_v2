import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@common": path.resolve(__dirname, "./src/ts/common"),
      "@components": path.resolve(__dirname, "./src/ts/components"),
      "@content": path.resolve(__dirname, "./src/ts/content"),
      "@hooks": path.resolve(__dirname, "./src/ts/hooks"),
      "@pages": path.resolve(__dirname, "./src/ts/pages"),
      "@scss": path.resolve(__dirname, "./src/scss"),
    }
  }
})
