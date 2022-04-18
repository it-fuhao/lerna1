import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import styleImport from 'vite-plugin-style-import';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [
        VantResolve()
      ],
    }),
  ],
  publicDir: '/'
});
