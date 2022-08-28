# Lambda

In computer programming, an anonymous function is a function definition that is not bound to an identifier. Anonymous
functions are often arguments being passed to higher-order functions or used for constructing the result of a
higher-order function that needs to return a function.

**Syntax**

```
(lambda (<param1> <param2> ... <pram_n>) <expr>)
```

## Lambda Basic

```lisp
(var sayHi
    (lambda () "Hi")
)

(print (sayHi))
```

## Output

```
Hi
```

## HoFs Example

```lisp
// HoFs exmaple
(func on_click (sayHi)
    (sayHi)
)

(on_click (lambda () (print "Hey, Ma Ma 👻")))
```


## Output

```
Hey, Ma Ma 👻
```