import assert from "assert";
import {test} from "./test-util.js";

export default function userDefinedFunctionTest(wuttyi) {


    test(wuttyi, `
  (begin
  
  (def square (x)
    (* x x)
  )
  
  (square 2)
   
  )
  `, 4)


    test(wuttyi, `
      (begin
      (def calc (x y)
        (begin
          (var z 30)
          (+ (* x y) z)
        ))
      (calc 10 20)
    )
    `, 230)
}