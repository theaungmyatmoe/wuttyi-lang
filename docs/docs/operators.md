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
>, <, >=, <=, =, neq (not equal to)
```

## Example

```lisp
(> 10 5) // true
(< 10 5) // false
(>= 10 5) // true
(<= 10 5) // false
(= 10 5) // false
(neq 10 5) //true
```

## Logical Operators

```lisp
and, or, not
```

```lisp
(and true true) // true
(or true or false) // true
(not true) // false
(not (not true)) // true
```

## Auto Increment and Decrement

**Syntax**

```
(<++|--> <expr>)
```

## Example

```lisp
(var i 10)

(++ i) // 11
(-- i) // 10
```


## Increment and Decrement with custom value

**Syntax**

```
(<+=|-=> <expr>)
```

## Example

```lisp
(var i 10)

(+= i 10) // 20
(-= i 10) // 10
```