import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",

    setupFiles: ["./tests/setup.js"],

    include: ["tests/**/*.test.js"],

    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      reportsDirectory: "./coverage",
      exclude: ["tests/**", "src/server.js", "node_modules/**"],
    },
  },
});
