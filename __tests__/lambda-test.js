import {test} from "./test-util.js";

export default function lambdaTest(wuttyi) {
    test(wuttyi, `
    
     (begin
      (def onClick (callback)
        (begin
          (var x 10)
          (var y 20)
          (callback (+ x y))))
      (onClick (lambda (data) (* data 10)))
    )

    
    `, 300)


//  Immediately invoked Lambda Expression  - IILE
    test(wuttyi, `
    (begin 
    ((lambda (x) (* x x)) 2)
    )
    `, 4)


    // variable function or closure
    test(wuttyi, `
    (begin 
    (var square (lambda (x) (* x x)))
    (square 2)
    )
    `, 4)


//     recursive
    test(wuttyi, `
    (begin
        (def factorial (x)
              (if (= x 1)
               1
               (* x (factorial (- x 1)))   
              )
              
        )
        
        (factorial 5)
    )
    `, 120)


}