class DoublyListNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 插入头部
  insertHead(value) {
    const newNode = new DoublyListNode(value, this.head, null);
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  // 插入尾部
  insertTail(value) {
    const newNode = new DoublyListNode(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  // 删除头部
  deleteHead() {
    if (!this.head) return;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
  }

  // 删除尾部
  deleteTail() {
    if (!this.tail) return;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
  }

  // 查找
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // 正向遍历
  traverse(callback) {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }

  // 反向遍历
  reverseTraverse(callback) {
    let current = this.tail;
    while (current) {
      callback(current.value);
      current = current.prev;
    }
  }
}

// 创建一个新的双链表实例
const doublyList = new DoublyLinkedList();

// 插入元素到链表头部
doublyList.insertHead(1); // 链表现在是： 1 <-> null
doublyList.insertHead(2); // 链表现在是： 2 <-> 1 <-> null

// 插入元素到链表尾部
doublyList.insertTail(3); // 链表现在是： 2 <-> 1 <-> 3 <-> null

// 正向遍历链表并打印每个元素的值
doublyList.traverse((value) => {
  console.log(value);
});
// 输出： 2 1 3

// 反向遍历链表并打印每个元素的值
doublyList.reverseTraverse((value) => {
  console.log(value);
});
// 输出： 3 1 2

// 查找链表中的元素
const node = doublyList.find(1);
if (node) {
  console.log('找到了节点，值为:', node.value);
} else {
  console.log('没找到节点');
}
// 输出：找到了节点，值为: 1

// 删除链表头部元素
doublyList.deleteHead(); // 链表现在是： 1 <-> 3 <-> null

// 删除链表尾部元素
doublyList.deleteTail(); // 链表现在是： 1 <-> null

// 再次正向遍历链表并打印每个元素的值
doublyList.traverse((value) => {
  console.log(value);
});
// 输出： 1
