const esbuild = require("esbuild");
const wuLangPlugin = require("./wulang-plugin");

esbuild
  .build({
    entryPoints: ["./src/input.wu"],
    bundle: false,
    outfile: "./output/output.js",
    plugins: [wuLangPlugin],
  })
  .catch(() => process.exit(1));
