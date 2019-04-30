class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BTree {
    constructor() {
        this.root = null;
    }
     /**
     * Breath First Search Method
     */
    printAll() {
        if (!this.root) return;
        
        this.traverseBF((item) => {
            console.log(item);
        })
    }

    traverseBF(fn) {
        const arr = [this.root];

        while (arr.length) {
            let node = arr.shift();

            if (node.left) arr.push(node.left);
            if (node.right) arr.push(node.right);

            fn(node.value);
        }
    }
} 

/**
 * 
 */
function reverse(root) {
    if (!root) return;

    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    reverse(root.right);
    reverse(root.right);
}

function swap(a, b) {
    const temp = a;
    a = b;
    b = temp;
}

let treeNodeRoot = new Node(0);
let treeNode1 = new Node(1);
let treeNode2 = new Node(2);

let treeNode11 = new Node(3);
let treeNode12 = new Node(4);
let treeNode21 = new Node(5);
let treeNode22 = new Node(6);

treeNode1.left = treeNode11;
treeNode1.right = treeNode12;

treeNode2.left = treeNode21;
treeNode2.right = treeNode22;

treeNodeRoot.left = treeNode1;
treeNodeRoot.right = treeNode2;

let BT = new BTree();
BT.root = treeNodeRoot;

reverse(BT.root);

BT.printAll();
