import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import tailwindcss from "tailwindcss";
import postcss from "rollup-plugin-postcss";

export default async () =>
  defineConfig({
    input: "src/main.ts",
    output: {
      dir: "dist"
    },
    plugins: [
      typescript(),
      postcss({
        plugins: [tailwindcss()],
      }),
    ],
  });
