# Function

A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a
function.

## Built-in Function

In `wuttyi`, `+, -, *, /, %, etc` are function.

## User Defined Function

**Syntax**

```
(<func|def> <func_name> (<params>)
    <single_expr|block>
)

(func_name <args>) 
```

## Example

```lisp
(func greet (name)
    (print name)
)

(greet "Mg Mg")
```

**Output**

```
Mg Mg
```

## Multiple Params and Arguments

```lisp
// multi params and args

(func get_fullname(first_name last_name)
    (print first_name last_name)
)

(get_fullname "Aung Myat" "Moe")
```

**Output**

```
Aung Myat Moe
```

## Recursive Function

`wuttyi` can handle multiple stack frames.

## Classic Factorial Example

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

**Output**

```
120
```

## Implicit Return Value

`wuttyi` return every evaluated value OOTB. So, you can use this language as `rust`.

## Example

```lisp
// Implicit Return Value

(func sayHi ()
    "Hi" // return value
)

(print (sayHi))
```

**Output**

```
Hi
```


## Closure

```lisp
// closure

(var value 100)

(func calc (x y)
    (begin
        (var z (+ x y))
        (func inner (foo)
        (+ (+ foo z) value))
        inner
    )
)

(var fn (calc 10 20))
(print  (fn 30))
```

**Output**

```
160
```