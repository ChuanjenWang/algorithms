class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkList {
    constructor() {
        this.head = null;
    }

    insert(val) {
        if (this.head === null) {
            this.head = new Node(val);
        }
        let p = this.head;

        while (p) {
            if (p.next === null) {
                p.next = new Node(val);
                return;
            }
            p = p.next;
        }
    }

    insertNode(node) {
        if (!this.head) {
            this.head = node;  
            return;  
        }
        let p = this.head;

        while (p) {
            if (!p.next) {
                p.next = node;
                return;
            }
            p = p.next;
        }
    }
   
    printAll() {
        if (!this.head) {
            console.log('null');
        }
        let p = this.head;
        let res = [];

        while (p) {
            res.push(p.val);
            p = p.next;
        }
        console.log(res.join('->'));
    }

    print20() {
        if (!this.head) {
            console.log('null');
        }
        let p = this.head;
        let res = [];
        let counter = 20;

        while (counter > 0) {
            res.push(p.val);
            p = p.next;
            counter--;
        }
        console.log(res.join('->'));
    }

    circular() {
        let fast = this.head;
        let slow = this.head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;

            if (fast === slow) {
                return true;
            }
        }

        return false;
    }
}

const ls = new LinkList();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node1;

ls.insertNode(node1);

const a = ls.circular();

console.log(a);




