import Environment from "../src/Environment.js";
import Wuttyi from "../src/Wuttyi.js";
import selfTest from "./self-test.js";
import mathTest from "./math-test.js";
import variableTest from './variable-test.js'
import blockTest from "./block-test.js";
import ifTest from "./if-test.js";
import whileTest from "./while-test.js";
import buitInFunctionTest from "./buit-in-function-test.js";
import userDefinedFunctionTest from "./user-defined-function-test.js";
import lambdaTest from "./lambda-test.js";
import switchTest from "./switch-test.js";
import incrementTest from "./inc-test.js";
import decrementTest from "./de-test.js";
import incrementValTest from "./increment-val-test.js";
import decrementValTest from "./decrement-val-test.js";
import forTest from "./for-test.js";
import classTest from "./class-test.js";

const wuttyi = new Wuttyi();

selfTest(wuttyi);
mathTest(wuttyi);
variableTest(wuttyi);
blockTest(wuttyi);
ifTest(wuttyi);
whileTest(wuttyi);
buitInFunctionTest(wuttyi);
userDefinedFunctionTest(wuttyi)
lambdaTest(wuttyi);
switchTest(wuttyi);
incrementTest(wuttyi);
decrementTest(wuttyi);
incrementValTest(wuttyi);
decrementValTest(wuttyi);
forTest(wuttyi)
classTest(wuttyi);