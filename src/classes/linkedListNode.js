class Node {
  constructor(value = null, nextNode = null) {
    this._value = value;
    this._nextNode = nextNode;
  }

  set nextNode(node) {
    this._nextNode = node;
  }

  set value(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  get nextNode() {
    return this._nextNode;
  }
}

export { Node };
