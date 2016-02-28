'use strict';

import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';

var asyncFs = Promise.promisifyAll(fs);

const normalizeFilename = filename => path.isAbsolute(filename) ? filename : path.join(process.cwd(), filename);

export const readFile = filename => asyncFs.readFileAsync(normalizeFilename(filename));

export const parseIntoLines = (file, start, end) => {
  return file
    .toString()
    .split('\n')
    .slice(start - 1, end - 1)
    .join('\n')
};
