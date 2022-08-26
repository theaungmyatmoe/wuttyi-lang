import {test} from "./test-util.js";

export default function incTest(wuttyi) {
    test(wuttyi,
        `
    (begin
      (var result 0)
      (++ result)
      result
    )

  `,
        1);
}