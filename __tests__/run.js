import Environment from "../Environment.js";
import Wuttyi from "../Wuttyi.js";
import selfTest from "./self-test.js";
import mathTest from "./math-test.js";
import variableTest from './variable-test.js'
import blockTest from "./block-test.js";
import ifTest from "./if-test.js";
import whileTest from "./while-test.js";
import buitInFunctionTest from "./buit-in-function-test.js";
import userDefinedFunctionTest from "./user-defined-function-test.js";
import lambdaTest from "./lambda-test.js";

const wuttyi = new Wuttyi();

selfTest(wuttyi);
mathTest(wuttyi);
variableTest(wuttyi);
blockTest(wuttyi);
ifTest(wuttyi);
whileTest(wuttyi);
buitInFunctionTest(wuttyi);
userDefinedFunctionTest(wuttyi)