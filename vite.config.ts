import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { VarletUIResolver } from "unplugin-vue-components/resolvers";
import components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [VarletUIResolver({ autoImport: true })],
        // 自动导入vue、vue-router、pinia相关函数
        imports: ["vue", "vue-router", "pinia"],
        dts: "src/auto-import.d.ts", // 生成 `auto-import.d.ts` 全局声明
      }),
      components({
        resolvers: [VarletUIResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"), // 路径别名
      },
      extensions: [".js", ".json", ".ts", ".mjs"], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    server: {
      https: false,
      // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
      // 默认为 'localhost'，即仅能本机访问
      host: "0.0.0.0",
      // 启动端口
      port: 7015,
      // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
      strictPort: false,
      // HMR 连接配置（用于 HMR websocket 必须使用不同的 http 服务器地址的情况，或者禁用 hmr 模块），一般省略
      hmr: {},
      // 配置启动时是否自动打开网页，是字符串时表示打开某个特定路径
      open: false,
      // 自定义代理规则，用来配合后端服务进行接口调用等。
      // 默认使用 [http-proxy](https://github.com/http-party/node-http-proxy) 模块，完整配置见官方仓库
      proxy: {
        "/police": {
          target: loadEnv(mode, process.cwd()).VITE_BASE_URL,
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/police/, "/police"),
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/style/main.scss";',
        },
      },
    },
  });
