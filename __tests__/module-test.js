import {test} from "./test-util.js";

export default function (wuttyi) {
    test(wuttyi,
        `
    (module Math
      (begin
        (def abs (value)
          (if (< value 0)
              (- value)
              value))
        (def square (x)
          (* x x))
        (var MAX_VALUE 1000)
      )
    )
    ((prop Math abs) (- 10))
  `,
        10);

    test(wuttyi,
        `
    (var abs (prop Math abs))
    (abs (- 10))
  `,
        10);

    test(wuttyi,
        `
    (prop Math MAX_VALUE)
  `,
        1000);
}