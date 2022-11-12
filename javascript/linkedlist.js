// =========== 3. Classes & Pointers
/*
class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie("green");

console.log(cookieOne); // Cookie {color: 'green'}

console.log(cookieOne.getColor()); // green

console.log(cookieOne.setColor("yellow"));

console.log(cookieOne.getColor()); // yellow

let cookieTwo = new Cookie("blue");

console.log(cookieTwo); // Cookie {color: 'blue'}

console.log(cookieTwo.getColor()); // blue



class LinkedList {
  constructor(value) {}
  push(value) {}
  unshift(value) {}
  insert(index, value) {}
  remove(index) {}
  pop() {}
  shift() {}
}


let obj1 = {
  value: 11,
};
let obj2 = obj1;

console.log(obj2.value); // 11

obj1.value = 2;

console.log(obj1.value); // 2

console.log(obj2.value); // 2
*/

// ===================== 4. Data Structures Linked Lists

// head                 tail
//  ||                   ||
//  11 => 3 => 23 => 7 => 4 => null

/*
                      {
            head:       value:11,
                        next: {
                            value:3,
                            next: {
                              value:23,
                              next: {
                                value:7,
                                next: {
                                  value:4,
                    tail:         next:null
                              }
                            }
                          }
                        }
}
*/
/*

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


//const newNode = new Node(4);

//console.log(newNode); // Node {value: 4, next: null}

//************* Push & pop Methode **************

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4); // length = 2
myLinkedList.push(5); // length = 3
myLinkedList.pop(); // length = 2
myLinkedList.unshift(1); // length = 2
myLinkedList.shift();

console.log(myLinkedList);

*/
