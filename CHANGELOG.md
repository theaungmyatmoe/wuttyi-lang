# v1.0.0 (zoro)

* Imperative, Functional and Object-Oriented paradigms
* Number, String, Common Math Operators, Comparison Operators and Logical Operators
* Variable, Scope and Scope Chain, Lexical Scoping
* Function, Closure, HoFs, Lambda, Immediately Invoked Function Expression (IIFE) and Immediately Invoked Lambda
  Expression ( IILE)
* Control Flows
* Class and Inheritance
* Module System

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