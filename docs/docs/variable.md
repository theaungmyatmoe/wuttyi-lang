
::: tip Quote
Programming language without variable construct is nothing.

— Me
:::



# Variable

**Syntax**

```
(var <identifier> <value|expr>)
(set <identifier> <value|expr>)
<identifier>
```

## Variable Declaration (Initialization in fact)

To declare variable you just need to use `var`.

```lisp
(var name "Mg Mg")
```

## Access to The Variable Value

To get variable value, just type the name of variable.

```lisp
(var name "Mg Mg")
name
``` 

## Variable Reassigning

Use `set` as assignment operator.

```lisp
(var name "Mg Mg")

(set name "Ma Ma")

(print name) 
```
