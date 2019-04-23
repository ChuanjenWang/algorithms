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

    removeFirst() {
        if(!this.head) return;
        
        const first = this.head;
        this.head = this.head.next;

        return first.data;
    }

    getFirst() {
        if(!this.head) return;

        return this.head.data;
    }

}

class QueueLink {
    constructor() {
        this.data = new LinkList();
    }

    enqueue(data) {
        this.data.insertLast(data);
    }

    dequeue() {
        return this.data.removeFirst();
    }

    peek() {
        return this.data.getFirst();
    }
}

const a = new QueueLink();

a.enqueue(1);
a.enqueue(2);
a.enqueue(3);
a.enqueue(4);

console.log('dequeue: ' + a.dequeue());
console.log(a);

console.log('peek: ' + a.peek());
console.log(a);