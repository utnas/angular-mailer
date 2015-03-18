"use strict";
var SafeString = require("../htmlbars-util").SafeString;

QUnit.module('htmlbars-util');

test("SafeString is exported", function(){
  ok(typeof SafeString === 'function', 'SafeString is exported');
});