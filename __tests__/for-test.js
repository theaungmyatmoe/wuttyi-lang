import {test} from "./test-util.js";

export default function forTest(wuttyi) {
    test(wuttyi,
        `
   
   (begin
      (var result 0)
      (for (var i 0) (< i 5) (set i (+ i 1))
        (set result (+ result i)))
      result
    )

  `,
        10);
}