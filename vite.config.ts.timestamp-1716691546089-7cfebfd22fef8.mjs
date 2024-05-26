// vite.config.ts
import { defineConfig } from "file:///D:/project/th-ui/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.12_less@4.2.0/node_modules/vite/dist/node/index.js";
import { vitepressDemo } from "file:///D:/project/th-ui/node_modules/.pnpm/vite-plugin-vitepress-demo@2.2.1_typescript@5.4.5_vitepress@1.2.2/node_modules/vite-plugin-vitepress-demo/dist/index.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///D:/project/th-ui/vite.config.ts";
var baseUrl = fileURLToPath(new URL(".", __vite_injected_original_import_meta_url));
var vite_config_default = defineConfig({
  plugins: [
    vitepressDemo({
      glob: ["**/demos/*.vue"]
    })
  ],
  resolve: {
    alias: [
      {
        find: /^th-ui/,
        replacement: path.resolve(baseUrl, "packages/th-ui/src")
      },
      {
        find: /^@th-ui\/utils/,
        replacement: path.resolve(baseUrl, "packages/utils/src")
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXHRoLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXHRoLXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0L3RoLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbi8vIGltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgdml0ZXByZXNzRGVtbyB9IGZyb20gJ3ZpdGUtcGx1Z2luLXZpdGVwcmVzcy1kZW1vJ1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuXG5jb25zdCBiYXNlVXJsID0gZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuJywgaW1wb3J0Lm1ldGEudXJsKSlcblxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZpdGVwcmVzc0RlbW8oe1xuICAgICAgZ2xvYjogWycqKi9kZW1vcy8qLnZ1ZSddXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IC9edGgtdWkvLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKGJhc2VVcmwsICdwYWNrYWdlcy90aC11aS9zcmMnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IC9eQHRoLXVpXFwvdXRpbHMvLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKGJhc2VVcmwsICdwYWNrYWdlcy91dGlscy9zcmMnKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdPLFNBQVMsb0JBQW9CO0FBRXJRLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUorRyxJQUFNLDJDQUEyQztBQU05TCxJQUFNLFVBQVUsY0FBYyxJQUFJLElBQUksS0FBSyx3Q0FBZSxDQUFDO0FBSTNELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFBQSxNQUNaLE1BQU0sQ0FBQyxnQkFBZ0I7QUFBQSxJQUN6QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLFNBQVMsb0JBQW9CO0FBQUEsTUFDekQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxTQUFTLG9CQUFvQjtBQUFBLE1BQ3pEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
