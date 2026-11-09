## How does the tsc command work?

### Introduction

Browsers cannot read TypeScript directly, so when we run the `tsc` command, the TypeScript compiler converts it into plain JavaScript. We use `tsconfig.json` to control how this conversion happens.

### How tsc works

`tsc` works in a few main stages:

1. **Parsing:** source code is turned into an Abstract Syntax Tree (AST).
2. **Binding and type checking:** symbols are connected, and every expression is checked against its type. This is where errors are reported.
3. **Emitting:** types are removed and JavaScript is generated. Newer syntax is rewritten for older targets if needed.

**TypeScript (before):**

```ts
const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier == 0) {
    return 0;
  } else if (multiplier) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};
```

**JavaScript (after):**

```js
const multiplyValue = (value, multiplier) => {
    if (multiplier == 0) {
        return 0;
    }
    else if (multiplier) {
        return value * multiplier;
    }
    else {
        return value * 2;
    }
};
```

In the code example, we can see that the types are gone. TypeScript doesn't exist at runtime.

### tsconfig.json

`tsconfig.json` marks the root of a project and tells `tsc` how to compile it:

```jsonc
{
  "compilerOptions": {
    "module": "esnext",
    "target": "esnext",
    "types": [],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  }
}
```

- `target` sets the JavaScript version to output.
- `module` controls the module system (ES modules or CommonJS).
- `strict` turns on the strongest type checks.
- `outDir` / `rootDir` define where files go and where they come from.

### Conclusion

`tsc` converts TypeScript into JavaScript, and `tsconfig.json` defines the rules for that conversion.
