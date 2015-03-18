"use strict";
var compile = require("./htmlbars-compiler/compiler").compile;
var compileSpec = require("./htmlbars-compiler/compiler").compileSpec;
var template = require("./htmlbars-compiler/compiler").template;

exports.compile = compile;
exports.compileSpec = compileSpec;
exports.template = template;