import {dirname} from 'path';
import {fileURLToPath} from 'url';
import * as path from "path";
import fs from "fs";

export const readFile = (name) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const filepath = path.join(__dirname, '..', 'modules/Math.wuttyi');

    const text = fs.readFileSync(filepath, 'utf-8')

    return text;
}