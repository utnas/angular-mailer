"use strict";
var TemplateVisitor = require("./template-visitor")["default"];
var processOpcodes = require("./utils").processOpcodes;
var getAttrNamespace = require("../htmlbars-util").getAttrNamespace;
var forEach = require("../htmlbars-util/array-utils").forEach;

function FragmentOpcodeCompiler() {
  this.opcodes = [];
}

exports["default"] = FragmentOpcodeCompiler;

FragmentOpcodeCompiler.prototype.compile = function(ast) {
  var templateVisitor = new TemplateVisitor();
  templateVisitor.visit(ast);

  processOpcodes(this, templateVisitor.actions);

  return this.opcodes;
};

FragmentOpcodeCompiler.prototype.opcode = function(type, params) {
  this.opcodes.push([type, params]);
};

FragmentOpcodeCompiler.prototype.text = function(text) {
  this.opcode('createText', [text.chars]);
  this.opcode('appendChild');
};

FragmentOpcodeCompiler.prototype.comment = function(comment) {
  this.opcode('createComment', [comment.value]);
  this.opcode('appendChild');
};

FragmentOpcodeCompiler.prototype.openElement = function(element) {
  this.opcode('createElement', [element.tag]);
  forEach(element.attributes, this.attribute, this);
};

FragmentOpcodeCompiler.prototype.closeElement = function() {
  this.opcode('appendChild');
};

FragmentOpcodeCompiler.prototype.startProgram = function() {
  this.opcodes.length = 0;
  this.opcode('createFragment');
};

FragmentOpcodeCompiler.prototype.endProgram = function() {
  this.opcode('returnNode');
};

FragmentOpcodeCompiler.prototype.mustache = function() {
  this.pushMorphPlaceholderNode();
};

FragmentOpcodeCompiler.prototype.component = function() {
  this.pushMorphPlaceholderNode();
};

FragmentOpcodeCompiler.prototype.block = function() {
  this.pushMorphPlaceholderNode();
};

FragmentOpcodeCompiler.prototype.pushMorphPlaceholderNode = function() {
  this.opcode('createComment', [""]);
  this.opcode('appendChild');
};

FragmentOpcodeCompiler.prototype.attribute = function(attr) {
  if (attr.value.type === 'TextNode') {
    var namespace = getAttrNamespace(attr.name);
    this.opcode('setAttribute', [attr.name, attr.value.chars, namespace]);
  }
};

FragmentOpcodeCompiler.prototype.setNamespace = function(namespace) {
  this.opcode('setNamespace', [namespace]);
};