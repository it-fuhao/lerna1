
import path from "path";
import { defineConfig, build } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";

const outputDir = "dist"; // 构建产物文件夹名称

// 打包的入口文件
console.log(1, __dirname);
console.log(path.resolve(__dirname));
console.log(path.resolve(__dirname, '../packages'));
console.log(process.argv);
const packageName = process.argv[2].split("=")[1];
const entryDir = path.resolve(__dirname, `../packages/${packageName}`);
console.log(entryDir);
// 出口文件夹
const outDir = path.resolve(__dirname, `../packages/${packageName}/${outputDir}`);
console.log("outDir", outDir);
// vite基础配置
const baseConfig = defineConfig({
  // configFile: false,
  publicDir: false,
  plugins: [
    vue(), 
    vueJsx(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false,
    }),
  ]
})
// rollup配置
const rollupOptions = {
  // 确保外部化处理那些你不想打包进库的依赖
  external: [
    'vue'
  ],
  output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    global: {
      vue: 'Vue'
    }
  }
}
// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      // rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: packageName, // umd的变量名
        fileName: (format) => `index.${format}.js`, // 输出文件名
        formats: ['es', 'umd'],
      },
      outDir
    },
  })
}
const buildComponent = async () => {
  await buildAll()
}
buildComponent()
