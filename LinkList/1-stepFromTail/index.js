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
    //1-2-3-4-5
    //
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

    stepFromTail(n) {
        if (this.head === null) return null;
        let fast = this.head;
        let slow = this.head;

        while (n >= 0) {
            fast = fast.next;
            n--;
        }

        while (fast) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow.val;
    }
}

const ls = new LinkList();

ls.insert(1);
ls.insert(2);
ls.insert(3);
ls.insert(4);
ls.insert(5);

const a = ls.stepFromTail(2);
console.log(a);

//ls.printAll();



