class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class DoubleNode {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class LinkList {
    constructor(data) {
        if (data) {
            this.head = new Node(data);
        } else {
            this.head = null;
        }
    }

    insertLast(n) {
        if (!this.head) {
            this.head = new Node(n);
            return;
        }

        let p = this.head;
        let node = new Node(n);

        while (p) {
            if(p.next === null) {
                p.next = node;
                return;
            }
            p = p.next;
        }
    }

    insertFirst(n) {
        if (!this.head) {
            this.head = new Node(n);
        } 

        let dummy = new Node(n, this.head);
        this.head = dummy;
    }

    insertAt(index, data) {
        if (!this.head) {
            this.head = new Node(n);
        }
        if (index === 0) {
            const dummy = new Node(data, this.head);
            this.head = dummy;
            return;
        } 

        let p = this.head;
        let counter = 0;
        
        while(p && p.next) {
            //if (!p.next) return;
            if (index - 1 === counter) {
                p.next = new Node(data, p.next);
            }
            counter++;
            p = p.next;
        }
        if (index > counter) {
            p.next = new Node(data);
        }
    }

    removeAt(index) {
        if (!this.head) return;

        if(index === 0) {
            this.head = this.head.next;
        }
        
        let p = this.head;
        let counter = 0;
        
        while (p && p.next) {
            if(index - 1 === counter) {
                p.next = p.next.next;
            }
            p = p.next;
            counter++;
        } 
    }

    reverse() {
        if (!this.head) return;
        let p = this.head;
        let p2 = null;

        while (p) {
            p2 = new Node(p.data, p2);
            p = p.next;
        }
        this.head = p2;
    }

    // 1->2->3->4->null
    // 1->null
    // pre
    reverse2() {
        if (!this.head) return;
        let p = this.head;
        let pre = null;

        while (p) {
            const temp = p.next;
            p.next = pre;
            pre = p;
            p = temp;
        }
        this.head = pre;
    }

    print() {
        if (!this.head) {
            console.log(null);
        }

        let p = this.head;
        let res = [];

        while (p) {
            res.push(p.data);
            p = p.next;
        }
        res.push('null');
        console.log(res.join('->'));
    }
}

class DoubleLinkList {
    constructor(data) {
        this.head = new DoubleLinkList(data);
    }
}

const a = new LinkList();
a.insertLast(1);
a.insertLast(2);
a.insertLast(3);
a.insertLast(4);
a.insertLast(5);
//a.insertFirst(9);
//a.removeAt(6);
a.reverse2();

a.print();