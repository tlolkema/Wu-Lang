<div align="center">

![Wu-Lang Logo](assets/wu-lang-logo-300px.png)

</div>

# Wu-Lang

Straight from Shaolin, this esbuild plugin flips Wu-Tang slang into legit JavaScript.

Built on the blazingly fast esbuild transpiler.

### Become A Wu-Lang Master

1. Start by installing the Wu-Lang plugin in your project.

   ```bash
   npm install wu-lang
   ```

2. Create `.wu` files with your Wu-Lang code.

   ```wu
   raw shaolin = 'Enter the 36 Chambers';
   ```

3. Use the Wu-Lang plugin with esbuild to transpile your code.

   ```javascript
   const esbuild = require("esbuild");
   const wuLangPlugin = require("wu-lang");

   esbuild
     .build({
       entryPoints: ["./src/input.wu"],
       bundle: false,
       outfile: "./output/output.js",
       plugins: [wuLangPlugin],
     })
     .catch(() => process.exit(1));
   ```

### C.R.E.A.M. (Code Rules Everything Around Me)

| Wu-Lang            | JavaScript      |
| ------------------ | --------------- |
| `protect ya neck`  | `try`           |
| `gravel pit`       | `catch`         |
| `shimmy shimmy ya` | `finally`       |
| `bring`            | `throw`         |
| `da`               | `new`           |
| `ruckus`           | `Error`         |
| `raw`              | `const`         |
| `liquid`           | `let`           |
| `spit.fire`        | `console.error` |
| `spit.rhyme`       | `console.log`   |
| `spit.venom`       | `console.warn`  |
| `spit.wisdom`      | `console.info`  |

### Enter The 36 Chambers

`input.wu`

```wu"
liquid ghostface = 'Tony Starks';

raw methodman = () => {
    spit.venom('Wu-Lang ain\'t nothin\' to f*** with');
    protect ya neck {
        bring da ruckus('Wu-Lang Forever');
    } gravel pit (error) {
        spit.fire(error);
    } shimmy shimmy ya {
        spit.rhyme('Wu-Lang is for the children!')
        spit.wisdom('Wu-Lang is forever');
    }
}

methodman();
```

`output.js`

```js
let ghostface = "Tony Starks";

const methodman = () => {
  console.warn("Wu-Tang Clan ain't nothin' to f*** with");
  try {
    throw new Error("Wu-Lang Forever");
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Wu-Lang is for the children!");
    console.info("Wu-Lang is forever");
  }
};

methodman();
```

### Join The Clan

If you're looking to bring da ruckus to Wu-Lang, you've come to the right place. We ain't nuthing ta f' wit, but we welcome all soldiers and killer bees to join our Wu-Tang sword style.

[Shaolin Manuscript](CONTRIBUTING.md)
