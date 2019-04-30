// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

class Node {
    constructor(val) {
        this.value = val;
        this.leaf = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}

function levelWidth(root) {
    let queue = [root, -1];
    let res = [0];
    let counter = 0;
    
    while (queue.length > 0) {
        if (queue.length === 1 && queue[0] === -1) return res;
        if (queue[0] === -1) {
            res.push(counter);
            counter = 0;
            queue.shift();
            queue.push(-1);
        }
        let node = queue.shift();
        counter += node.leaf.length;
        queue.push(...node.leaf);
    }    
}

let treeNodeRoot = new Node(0);
let treeNode1 = new Node(1);
let treeNode2 = new Node(2);
let treeNode3 = new Node(3);

let treeNode11 = new Node(1);
let treeNode12 = new Node(2);
let treeNode21 = new Node(3);
let treeNode22 = new Node(4);
let treeNode31 = new Node(5);
let treeNode32 = new Node(6);

let treeNode121 = new Node(9);

treeNode12.leaf = [treeNode121];

treeNode1.leaf = [treeNode11, treeNode12];
treeNode2.leaf = [treeNode21, treeNode22];
treeNode3.leaf = [treeNode31, treeNode32];
treeNodeRoot.leaf = [treeNode1, treeNode2, treeNode3];

const a = levelWidth(treeNodeRoot);

console.log(a);
