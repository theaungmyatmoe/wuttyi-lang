import Environment from "../Environment.js";
import Wuttyi from "../Wuttyi.js";
import selfTest from "./self-test.js";
import mathTest from "./math-test.js";
import variableTest from './variable-test.js'
import blockTest from "./block-test.js";
import ifTest from "./if-test.js";
import whileTest from "./while-test.js";

// set the predefined variable
const wuttyi = new Wuttyi(new Environment({
    true: true, false: false, null: null, version: '1.0.0',
}));

selfTest(wuttyi);
mathTest(wuttyi);
variableTest(wuttyi);
blockTest(wuttyi);
ifTest(wuttyi);
whileTest(wuttyi);
