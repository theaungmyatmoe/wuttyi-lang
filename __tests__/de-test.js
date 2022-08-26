import {test} from "./test-util.js";

export default function deTest(wuttyi) {
    test(wuttyi,
        `
     (begin
      (var result 1)
      (-- result)
      result
    )

  `,
        0);
}