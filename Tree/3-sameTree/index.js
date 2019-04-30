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

function sameTree(a, b, des = '') {
    //console.log(`${des} a: ${a ? a.value : 'null'}, b: ${b ? b.value: 'null'}`);
    if(a === null && b === null) {
        //console.log('true');
        return true;
    } 
    if(a === null || b === null) {
        //console.log('false');
        return false;
    } 
    if(a.value !== b.value) {
        //console.log('false');
        return false;
    } 

    return  sameTree(a.left, b.left, 'left') && sameTree(a.right, b.right, 'right');
}

let treeNodeRootA = new Node(2);
//let treeNode1A = new Node(2);
let treeNode2A = new Node(4);

let treeNodeRootB = new Node(2);
let treeNode1B = new Node(3);
let treeNode2B = new Node(4);

//treeNodeRootA.left = treeNode1A;
treeNodeRootA.right = treeNode2A;

treeNodeRootB.left = treeNode1B;
treeNodeRootB.right = treeNode2B;

let BTA = new BTree();
let BTB = new BTree();

BTA.root = treeNodeRootA;
BTB.root = treeNodeRootB;

const a = sameTree(BTA.root, BTB.root);

console.log(a);