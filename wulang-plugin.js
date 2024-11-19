const fs = require("fs").promises;

const transformWuLang = (code) => {
  const transformations = {
    "protect ya neck": "try",
    "gravel pit": "catch",
    bring: "throw",
    da: "new",
    ruckus: "Error",
    raw: "const",
    liquid: "let",
    rhyme: "console.log",
  };

  Object.entries(transformations).forEach(([wuLang, js]) => {
    code = code.replace(new RegExp(wuLang, "g"), js);
  });

  return code;
};

const wuLangPlugin = {
  name: "wu-lang",
  setup(build) {
    build.onLoad({ filter: /\.(wu|wulang)$/ }, async (args) => {
      const source = await fs.readFile(args.path, "utf8");
      const contents = transformWuLang(source);
      return { contents, loader: "js" };
    });
  },
};

module.exports = wuLangPlugin;
