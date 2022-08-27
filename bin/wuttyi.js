#!/usr/bin/env node

import wuttyiParser from '../src/parser/wuttyiParser.cjs';
import Wuttyi from "../src/Wuttyi.js";
import fs from "fs";


function evalGlobal(src, wuttyi) {
    const exp = wuttyiParser.parse(`(begin ${src})`);
    return wuttyi.evalGlobal(exp);
}

function main(argv) {
    const [_node, _path, mode, exp] = argv;

    const wuttyi = new Wuttyi();

    // Direct expression
    if (mode === '-e') {
        return evalGlobal(exp, wuttyi);
    }

    if (mode) {
        // File
        const src = fs.readFileSync(mode, 'utf-8');
        return evalGlobal(src, wuttyi);
    }
}

main(process.argv)