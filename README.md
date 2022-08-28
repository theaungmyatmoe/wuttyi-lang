# What's Wuttyi?

> Everything is expression 👻

I just developed this tiny programming language because of boring in higher level programming construct.

## Motivation

<img src="docs/public/banana.jpg" align="center">

> Don't give up! Try your best.

## Acknowledgement

This language is not intended to be production ready language. It might miss out of language design and other features
that you had seen in other programming languages.

## Language Features

Wuttyi supported modern programming language construct :tada:

- Imperative, Functional and Object-Oriented paradigms
- Number, String, Common Math Operators, Comparison Operators and Logical Operators
- Variable, Scope and Scope Chain, Lexical Scoping
- Function, Closure, HoFs, Lambda, Immediately Invoked Function Expression (IIFE)  and Immediately Invoked Lambda
  Expression (
  IILE)
- Control Flows
- Class and Inheritance
- Module System

## Example

```lisp

// factorial
(func factorial (x)
    (begin
        (if (= x 1)
            1 // true
            (begin
               (* x (factorial (- x 1)))
            )
        )

    )
)

(print (factorial 5))
```

**Many Parenthesis?**
> Be a LISP developer 👻

**Execute the program**

```bash
pnpm install -g wuttyi
wuttyi run filename.wuttyi
```