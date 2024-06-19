import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://react.dev/learn/react-compiler#what-does-the-compiler-do
const ReactCompilerConfig = {}

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react({
        babel: {
          plugins: [
            ["babel-plugin-react-compiler", ReactCompilerConfig],
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@common": path.resolve(__dirname, "./src/ts/common"),
        "@components": path.resolve(__dirname, "./src/ts/components"),
        "@content": path.resolve(__dirname, "./src/ts/content"),
        "@fonts": path.resolve(__dirname, "./src/fonts"),
        "@hooks": path.resolve(__dirname, "./src/ts/hooks"),
        "@pages": path.resolve(__dirname, "./src/ts/pages"),
        "@scss": path.resolve(__dirname, "./src/scss"),
        "@utils": path.resolve(__dirname, "./src/ts/utils"),
      }
    }, server: {
      port: 3002,
    }
  };
});
