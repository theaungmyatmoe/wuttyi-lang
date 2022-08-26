import {test} from "./test-util.js";

export default function decrementValTest(wuttyi) {
    test(wuttyi,
        `
   
    (begin
      (var result 5)
      (-= result 5)
      result
    )


  `,
        0);
}