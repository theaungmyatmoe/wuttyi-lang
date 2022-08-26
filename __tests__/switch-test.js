import {test} from "./test-util.js";

export default function switchTest(wuttyi) {
    test(wuttyi, `
     (begin
      (var x 10)
      (switch ((= x 20) 100)
              ((> x 10) 200)
              (else     300))
    )
    

    `, 300)
}