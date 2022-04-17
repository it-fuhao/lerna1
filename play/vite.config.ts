import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import styleImport from 'vite-plugin-style-import';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    vue(),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: "vant",
    //       esModule: true,
    //       resolveStyle: name => `vant/es/${name}/style`,
    //     },
    //   ],
    // }),
    styleImport({
      resolves: [
        VantResolve(), 
        {
          libraryName: "lerna1",
          ensureStyleFile: true
        }
      ],
    }),
  ],
  publicDir: '/'
});
