"use strict";
// inclusive of both nodes
function clear(parentNode, firstNode, lastNode) {
  if (!parentNode) { return; }

  var node = firstNode;
  var nextNode;
  do {
    nextNode = node.nextSibling;
    parentNode.removeChild(node);
    if (node === lastNode) {
      break;
    }
    node = nextNode;
  } while (node);
}

exports.clear = clear;function insertBefore(parentNode, firstNode, lastNode, _refNode) {
  var node = lastNode;
  var refNode = _refNode;
  var prevNode;
  do {
    prevNode = node.previousSibling;
    parentNode.insertBefore(node, refNode);
    if (node === firstNode) {
      break;
    }
    refNode = node;
    node = prevNode;
  } while (node);
}

exports.insertBefore = insertBefore;