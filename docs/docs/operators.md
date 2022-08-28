# Operators

An operator is something that takes one or more values (or expressions, in programming jargon) and yields another
value (so that the construction itself becomes an expression).

**Syntax**

```
(<operator> <left> <right>)
```

# Basic

Basic Math operators are supported.

````
+, -, *, /, %
````

## Addition

```lisp
(+ 10 20) // → 30
```

## Subtraction

```lisp
(- 10 20) // → -10
```

## Multiplication

```lisp
(* 10 20) // → 20
```

## Division

```lisp
(/ 100 20) // → 5
```

## Modulus

```lisp
(% 11 2) // → 1
```

## Nested

```lisp
(var x 100)
(var y 10)
(var z 5)

(* (+ x y) z) // -> 550
```

# Comparison Operators

Basic comparison operators are supported.

```lisp
>, <, >=, <=, = 
```

## Example

```lisp
(> 10 5) // true
(< 10 5) // false
(>= 10 5) // true
(<= 10 5) // false
(= 10 5) // false
```