# Module

Modular programming is a software design technique that emphasizes separating the functionality of a program into
independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the
desired functionality.

## Built Module

You can access built-in module by `import` and access prop via `prop`.

**Syntax**

```
(import <module_name>)
(module <module_name>
        <block>
)

(prop <module_name> <identifier>)
```

## Example

```lisp
// access built-in module

(begin
    (import Math)


      (var abs (prop Math abs))
      (abs (- 10))
)

```

## User Defined Module

You can access module via `prop`.
Same concept in JS.

**Syntax**

```
(module <module_name>
        <block>
)

(prop <module_name> <identifier>)
```

```lisp{13,15}
(module Math
    (begin
        (var x 10)
        
        (func square (x)
            (begin
                (* x x)
            )
        )
    )
)

(print (prop Math x))

(print  ((prop Math square) 2))
```