---
title: CLI Usage
---

# CLI Usage

Copy the following `wuttyi` source code to the file named `hello-world.wuttyi` or `hello-world.lisp` for better syntax
and semantic
highlighting.

::: warning
This `wuttyi` implementation is not compatible with `Common LISP` syntax. Just for the highlighting.
:::

**hello-world.wuttyi**

```lisp
(var greet "Hello, World 👻")
(print greet)
```

## CLI Usage

```bash
wuttyi <arg>|<filename> <expression>
```

- `-e` → Eval the source code
- `<filename>` → Run from source file

Following example is running from source code.

```shell
wuttyi hello-world.wuttyi # → Hello, World 👻
```

### Eval in CLI

```bash
wuttyi -e "(var x 10) (print x)" // → 10
```