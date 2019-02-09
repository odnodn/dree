'use strict';
const expect = require('chai').expect;
const fs = require('fs');
const dree = require('../lib/index');
const args = process.argv;

describe('Dree module tests', () => {

    const path = 'test/sample';
    require('./scan/scan.test')(expect, fs, dree, path, args.find(arg => arg === '--scan'));
    require('./parse/parse.test')(expect, dree, path);
    require('./parseTree/parseTree.test')(expect, dree, path);
});


