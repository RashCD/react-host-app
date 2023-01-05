import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import adaptiveModuleFederationPlugin from "./script/adaptiveModuleFederationPlugin";
import federation from "@originjs/vite-plugin-federation";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        remote_app: "http://localhost:4001/assets/remoteEntry.js",
        remote_app_b: "http://localhost:4002/assets/remoteEntry.js",
      },
      shared: {
        ...Object.entries(pkg.dependencies).reduce((acc, [key, version]) => {
          acc[key] = {
            requiredVersion: version,
          };
          return acc;
        }, {}),
      },
    }),
  ],
  server: {
    host: true,
    port: 4000,
  },
  preview: {
    port: 4000,
  },
  build: {
    sourcemap: true,
    target: "esnext",
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
