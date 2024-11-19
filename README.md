<div align="center">

![Wu-Lang Logo](assets/wu-lang-logo-300px.png)

</div>

# Wu-Lang

Straight from Shaolin, this esbuild plugin flips Wu-Tang slang into legit JavaScript. Built on the blazingly fast esbuild transpiler.

### C.R.E.A.M. (Code Rules Everything Around Me)

| Wu-Lang           | JavaScript    |
| ----------------- | ------------- |
| `protect ya neck` | `try`         |
| `gravel pit`      | `catch`       |
| `bring`           | `throw`       |
| `da`              | `new`         |
| `ruckus`          | `Error`       |
| `raw`             | `const`       |
| `liquid`          | `let`         |
| `rhyme`           | `console.log` |

### Enter The 36 Chambers

`input.wu`

```wu"
raw methodMan = 'M.E.T.H.O.D. Man';
liquid ghostface = 'Tony Starks';

protect ya neck {
    bring da ruckus('Wu-Lang Forever');
} gravel pit (error) {
    rhyme(error);
}
```

`output.js`

```js
const methodMan = "M.E.T.H.O.D. Man";
let ghostface = "Tony Starks";

try {
  throw new Error("Wu-Lang Forever");
} catch (error) {
  console.log(error);
}
```

### Join The Clan

If you're looking to bring da ruckus to Wu-Lang, you've come to the right place. We ain't nuthing ta f' wit, but we welcome all soldiers and killer bees to join our Wu-Tang sword style.

[Shaolin Manuscript](CONTRIBUTING.md)
