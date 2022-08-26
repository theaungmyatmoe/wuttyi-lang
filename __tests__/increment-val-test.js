import {test} from "./test-util.js";

export default function incrementValTest(wuttyi) {
    test(wuttyi,
        `
   
    (begin
      (var result 0)
      (+= result 5)
      result
    )

  `,
        5);
}