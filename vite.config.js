import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "projects/counter-elements/src/main.ts",
      name: "CounterPlugin",
      fileName: "counter-plugin",
      formats: ["umd", "es"]
    }
  }
});