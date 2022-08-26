# Wuttyi Language

> Everything is expression ✨

LISP (or) Schema like imperative, functional and OO based programming language.

## Expression

```lisp
100
-200
```

## String

```lisp
"Hello, World 👻"
"Women ☕"
```

## Operators

### Math Operators

```lisp
(+ 1 2)
(- 10 20)
(* 5 2)
(/ 10 2)
(% 12 5)
(+ (- 10 5) 20)
```

### Comparison Operators

```lisp
(< 5 10)
(> 10 5)
(= 2 2)
```

### Logical Operators

```lisp
(or foo default)
(and x y)

(not isTrue)
```

## Variable

### Initialization and Accessing Variable

```lisp
(var love "Ma Ma 🥺")
love // Ma Ma 🥺

(var x 10)
(var foo (* x 20))
```

### Variable Reassigning

We use `set` to assign variable.

```lisp
(var x 10)
(set x 1500)
```

## Scope

`Wuttyi` is block scoped language.

### Syntax

`(begin <sequence|statements>)`

### Global and Local Scope

```lisp
(begin
// global 

    (begin
        // local 
        (var y 10)
    )
    
)
```

## Scope (Advanced)

### Scope Chain

```lisp
(begin
    // global 
    (var x 10)

        // local
        (begin
            (var x 20) 
            x // 20
        )   
        
    x // 10

)
```

## Control Flows

### If Statement

```lisp
(var x 10)
(if (> x 10)
   (begin
       (print "True 👻")
       (print "False 😭")
   )
)
```

### Switch Statement

#### Syntax

```
switch (<cond1><block1>)
       (<cond2><block2>)
       ...
       (<condN><blockN>)
       (else <alternate>)
```

```lisp
(switch ((> x 1) 100)
        ((= x 1) 200))
        (else 0))
```