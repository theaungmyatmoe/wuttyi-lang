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

}