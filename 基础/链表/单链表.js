class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // 插入头部
  insertHead(value) {
    const newNode = new ListNode(value, this.head);
    this.head = newNode;
  }

  // 插入尾部
  insertTail(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // 删除头部
  deleteHead() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  // 删除尾部（稍复杂，需要找到尾部和倒数第二个节点）
  deleteTail() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    current.next = null;
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

  // 遍历
  traverse(callback) {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }
}

// 创建一个新的单链表实例
const list = new SinglyLinkedList();

// 插入元素到链表头部
list.insertHead(1); // 链表现在是： 1 -> null
list.insertHead(2); // 链表现在是： 2 -> 1 -> null

// 插入元素到链表尾部
list.insertTail(3); // 链表现在是： 2 -> 1 -> 3 -> null

// 遍历链表并打印每个元素的值
list.traverse((value) => {
  console.log(value);
});
// 输出： 2 1 3

// 查找链表中的元素
const node = list.find(1);
if (node) {
  console.log('找到了节点，值为:', node.value);
} else {
  console.log('没找到节点');
}
// 输出：找到了节点，值为: 1

// 删除链表头部元素
list.deleteHead(); // 链表现在是： 1 -> 3 -> null

// 删除链表尾部元素
list.deleteTail(); // 链表现在是： 1 -> null

// 再次遍历链表并打印每个元素的值
list.traverse((value) => {
  console.log(value);
});
// 输出： 1
