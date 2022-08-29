# Object Oriented Programming

OOP is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of
fields, and code, in the form of procedures. A common feature of objects is that procedures are attached to them and can
access and modify the object's data fields.

## Class

`wuttyi` uses same style of `rust`'s `self`. So, you need to pass `instance` object explicitly.

**Syntax**

```
(class <class_name> (null|parent)
        (begin
            (func constructor (this <prop_name> ... <prop_name_n>)
                (set (prop this <prop_name>) name)
                
                (begin
                    ((prop (super <parent>) constructor) this <prop_name> ... <prop_name_n>))
                    (set (prop this z) z)
                )
            )
            
            (func <method_name> (this)
                (prop this <prop_name>)
                ((prop (super <parent>) <method>) this)
            )
        )
)

(var <instance> (new <class_name> <arg1> <arg2> ... <arg_n>))
((prop <instance> <method>) <instance>)

```

## Example

```lisp
// class

(class Person null
    (begin
        (func constructor (this name)
            (set (prop this name) name)
        )

        (func getName (this)
            (prop this name)
        )
    )
)

(var person (new Person "Aung Myat Moe"))
(print ((prop person getName) person))
```

## Inheritance

```lisp

(class Point null
      (begin
        (def constructor (this x y)
          (begin
            (set (prop this x) x)
            (set (prop this y) y)))
        (def calc (this)
          (+ (prop this x) (prop this y)))))
    (var p (new Point 10 20))
    ((prop p calc) p)

     (class Point3D Point
          (begin

            (def constructor (this x y z)

              (begin
                ((prop (super Point3D) constructor) this x y)
                (set (prop this z) z)))

            (def calc (this)
              (+ ((prop (super Point3D) calc) this)
                 (prop this z)))))
        (var p (new Point3D 10 20 30))
        (print ((prop p calc) p))
```
