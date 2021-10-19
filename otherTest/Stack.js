class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }
  push(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else {
      let currentNode = this.head;
      let secondToLastNode = this.head;
      while (currentNode.next) {
        secondToLastNode = currentNode;
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length -= 1;
      if (this.isEmpty()) {
        this.head = null;
        this.tail = null;
      }
      return currentNode.data;
    }
  }

  size() {
    return this.length;
  }
}

const myStack = new Stack();

// myStack.push(1)
// myStack.push(2)
// myStack.push(3)
// myStack.pop()

// console.log(`myStack:`, myStack.pop())