'use strict';
import LinkedList from './component.js';
import { createNode, genChainedNodes } from '../../util/helper.js';
import { partialRight, partial, _has, isTruthy } from '../../util/utility.js';
import Node from '../node/node.js';

const configS = (_this) => {
  _this.next = null;
};

const NodeConstruct = partialRight(Node.of, configS);
const createChainedNode = partial(
  genChainedNodes().configure({
    Node: NodeConstruct,
    isDouble: false,
    count: 0,
  }).start
);

const setUpNode = partialRight(createNode, NodeConstruct, createChainedNode);

class SinglyLinkedList extends LinkedList {
  constructor(item, needTail) {
    super(needTail);
    this._TYPE = 'singlyLinked';
    this.setUp = setUpNode;

    isTruthy(item) && this.append(item);

    return this;
  }
}

export default SinglyLinkedList;
