const fs = require("fs").promises;

const transformWuLang = (code) => {
  const transformations = {
    // keyword controls
    "protect ya neck": "try",
    "gravel pit": "catch",
    "shimmy shimmy ya": "finally",
    bring: "throw",
    // keyword operators
    da: "new",
    //
    Ruckus: "Error",
    // storage types
    raw: "const",
    liquid: "let",
    // support functions
    spit: "console",
    rhyme: "log",
    wisdom: "info",
    venom: "warn",
    fire: "error",
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
