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
      filename: "remoteEntry.js",
      remotes: {
        host_app: "https://react-host-app.vercel.app/assets/remoteEntry.js",
        remote_app:
          "https://react-micro-app-a.vercel.app/assets/remoteEntry.js",
        remote_app_b:
          "https://react-micro-app-b.vercel.app/assets/remoteEntry.js",
      },
      exposes: {
        "./GlobalStateProvider": "./src/GlobalStateProvider.jsx",
        "./store": "./src/store.js",
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
