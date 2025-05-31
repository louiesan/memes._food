import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "./",
  plugins: [
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "sections/*",
          dest: "sections",
        },
        {
          src: "src/*",
          dest: "src",
        },
      ],
    }),
  ],
});
