import assert from "assert";
import {test} from "./test-util.js";

export default function buitInFunctionTest(wuttyi) {
    test(wuttyi, `(+ 5 6)`, 11);
    test(wuttyi, `(+  (+ 2 3) 5)`, 10);
    test(wuttyi, `(+  (* 2 3) 5)`, 11);

    test(wuttyi, `(> 1 5)`, false);
    test(wuttyi, `(< 1 5 )`, true);

    test(wuttyi, `(>= 5 5)`, true);
    test(wuttyi, `(<= 5 5)`, true);
    test(wuttyi, `(= 5 5)`, true);
}