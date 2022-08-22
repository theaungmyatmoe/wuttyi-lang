---
title: Docs with VitePress
editLink: true
---

# Wuttyi Language

> Everything is expression ✨

LISP (or) Schema like imperative, functional and OO based programming language.

# Language Specification

## Variable

### Declaration

To initialize variable, you can use traditional `var` keyword.

```lisp
(var x 10)
```

### Re Assigning

`Wuttyi` uses `set` to re assign the value of variable.

```lisp
(var x 0)
(set x 100)
```

## Control Flows

### If

```lisp
(var x 0)
(if (x < 10) 
        (print "ok 👻")
        (print "err 😭")
 )
```

### While

```lisp
(var result 0)
(var counter 0)
(while (counter < 10)
        (begin (
                (set counter (+ counter 1))
                (set result (+ result 1))
            )
        )
 )
```