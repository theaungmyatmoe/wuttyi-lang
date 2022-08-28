---
title: What's Wuttyi
editLink: true
---

# What's Wuttyi?

::: tip Core Feature
Everything is expression 👻
:::

I just developed this tiny programming language because of boring in higher level programming construct.

::: danger BE AWARE
The name `Wuttyi` is not the name of girl. I don't even have a girl friend.
:::

## Motivation


![Don't give up! Try your best - Banana](/banana.jpg)

:::tip Motivation
Don't give up! Try your best.
:::


## Language Features

Wuttyi supported modern programming language construct :tada:

::: warning Acknowledgement
This language is not intended to be production ready language. It might miss out of language design and other features
that you had seen in other programming languages.
:::

- Imperative, Functional and Object-Oriented paradigms
- Number, String, Common Math Operators, Comparison Operators and Logical Operators
- Variable, Scope and Scope Chain, Lexical Scoping
- Function, Closure, HoFs, Lambda, Immediately Invoked Function Expression (IIFE)  and Immediately Invoked Lambda
  Expression (
  IILE)
- Control Flows
- Class and Inheritance
- Module System

## Basic Example

```lisp
// module system
(import Math)

(var abs (prop Math abs))

// math operation
(var x (- 10))

// echo out to the console
(print (abs x))

// class
(class Point null
  (begin

    (def constructor (this x y)
      (begin
        (set (prop this x) x)
        (set (prop this y) y)))

    (def calc (this)
      (+ (prop this x) (prop this y)))))

// class with inheritance
(class Point3D Point
      (begin
        (def constructor (this x y z)
          (begin
            ((prop (super Point3D) constructor) this x y)
            (set (prop this z) z)))
        (def calc (this)
          (+ ((prop (super Point3D) calc) this)
             (prop this z)))))
             
     // class instance
    (var p (new Point3D 10 20 30))
    ((prop p calc) p)
```

:::warning Many Parenthesis?
Be a LISP developer 👻
:::

**Execute the program**

```bash
pnpm install -g wuttyi
wuttyi run filename.wuttyi
```



