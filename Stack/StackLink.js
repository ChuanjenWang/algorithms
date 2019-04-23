class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkList {
    constructor() {
        this.head = null;
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        let p = this.head;

        while(p) {
            if(!p.next) {
                p.next = new Node(data);
                return;
            }
            p = p.next;
        }
    }

    removeLast() {
        if (!this.head) return null;

        let p = this.head;

        while (p && p.next) {
            if (p.next.next === null) {
                const last = p.next;
                p.next = null;
                return last; 
            }
            p = p.next;
        }
    }

    getLast() {
        if (!this.head) return null;
        let p = this.head;

        while (p) {
            if (!p.next) {
                return p.data;
            }
            p = p.next;
        }
    }

    print() {
        if (!this.head) return;
        let p = this.head;
        let res = [];

        while (p) {
            res.push(p.data);
            p = p.next;
        }

        console.log(res.join('->'));
    }
}

class StackLink {
    constructor() {
        this.data = new LinkList();
    }
    
    push(data) {
        this.data.insertLast(data);
    }

    pop() {
        return this.data.removeLast();
    }

    peek() {
        return this.data.getLast();
    }

    printAll() {
        this.data.print();
    }
}

const a = new StackLink();

a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);
a.printAll();

console.log(a.pop());

a.printAll();

console.log('peek:' + a.peek());

a.printAll();