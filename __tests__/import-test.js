import {test} from "./test-util.js";

export default async function (wuttyi) {


    await test(wuttyi,
        `
      (import Math)
      ((prop Math abs) (- 10))
    `,
        10);

    await test(wuttyi,
        `
        
      (var abs (prop Math abs))
      (abs (- 10))
    `,
        10);

    await test(wuttyi,
        `
      (prop Math MAX_VALUE)
    `,
        1000);


}