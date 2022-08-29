# Scope

Same concept in JS block scope.

**Syntax**

```
(begin <expr|sequence>)
```

## Access Variable from Global Scope

Every `built-in` function and variable is scoped globally.

## Example

```lisp
(print __VERSION__) /* global variable */
```

## Global vs. Local Scope

Defining variable and function without `begin` block scope. All of them will be registered to
the `Global Execution Context` Same in JS.

```lisp
// global

(var x 10)
(begin
    // local outer scope
    (var y 20)
    (print x)

    (begin
        // local inner scope
        (print x)
        (print y)
    )
)
```
