# Control Flows

In computer science, control flow (or flow of control) is the order in which individual statements, instructions or
function calls of an imperative program are executed or evaluated. The emphasis on explicit control flow distinguishes
an imperative programming language from a declarative programming language.

# if

Don't miss out the `<alternate>` aka `else` branch in single expression statement.

**Syntax**

```
(if <test>
    <sequence>
    <alternate>
)
```

```lisp
(var isTrue true)

(if (not isTrue)
    (print "True")
    (print "False")
) 
```

**Output**

```shell
False
```

## if and block

Multiple expressions must be written in the block.

```lisp
(var isAuth true)
(if isAuth
    (begin
        (var name "Ma Ma")
        (print (+ name " is logged in"))
    )

    (begin
        (print "Auth Failed 😭")
    )

)
```

**Output**

```shell
Ma Ma is logged in
```

## Switch (or) Match

**Syntax**

```
(<switch|match) <block1>
                <block2>
                ...
                <block_n>
                <else_block>
)

(<switch|match) (<cond1> <result1>)
                (<cond2> <result2>)
                ...
                (<cond_n><result_n>)
                (else <result>)
)

```

## Example

```lisp

(var x 10)
(switch ((= x 10) (print "x is 100))
        ((= x 20) (print "x is 200))
        (else (print "Nothing"))
)

```

**Output**

```shell
x is 100
```

## while loop

**Syntax**

```
(while <test>
    (begin
        <increase_counter>
    )
)
```

## Example

```lisp
(var counter 0)
(var limit 100)
(var result 0)

(while (< counter 100)
    (begin
        (set counter (+ counter 1))
        (set result (+ result 1))
    )
)

(print result) 
```

**Output**

```shell
100
```

## For Loop

**Syntax**

```
(for <init> <test> <increment>
    <block|expr>
)
```

## Example

**Default**

```lisp
(var sum 0)
(for
    (var i 0)
    (< i 100)
    (set i (+ i 1))
    (set sum (+ sum i))
)

(print sum)
```

**Syntactic Sugar**

```lisp
// for loop (sugar)
(var sum 0)
(for
    (var i 0)
    (< i 100)
    (++ i)

    (+= sum i)
)

(print sum)

```

**Output**

```shell
4950
```
