class StackArray {
    constructor(data) {
        this.data = [];
    }

    push(data) {
        this.data.push(data);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length-1];
    }
}

const a = new StackArray();

a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);

console.log('pop:' + a.pop());
console.log('peek' + a.peek());

console.log(a);