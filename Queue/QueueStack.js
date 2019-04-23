class Stack {
    constructor() {
        this.data = [];
    }

    peek() {
        return this.data[this.data.length-1];
    }
    push(data) {
        this.data.push(data);
    }
    pop() {
        return this.data.pop();
    }
}

class QueueStack {
    constructor() {
        this.data = new Stack();
        this.helper = new Stack();
    }

    enqueue(data) {
        this.data.push(data);
    }

    dequeue() {
        while (this.data.peek()) {
            this.helper.push(this.data.pop());
        }
        const first = this.helper.pop();

        while (this.helper.peek()) {
            this.data.push(this.helper.pop());
        }

        return first;
    }

    peek() {
        while (this.data.peek()) {
            this.helper.push(this.data.pop());
        }
        const first = this.helper.pop();
        this.helper.push(first);

        while (this.helper.peek()) {
            this.data.push(this.helper.pop());
        }

        return first;
    }
}

const a = new QueueStack();

a.enqueue(1);
a.enqueue(2);
a.enqueue(3);
a.enqueue(4);

console.log('deQ:' + a.dequeue());
console.log('peekQ:' + a.peek());
console.log(a);