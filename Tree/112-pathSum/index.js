class Node {
    constructor(val) {
        this.val = val
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    add_BST(val) {
        if (!this.root) {
            this.root = new Node(val);
            return;
        }
        let p = this.root;

        while (p) {
            if (val > p.val) {
                if (!p.right) {
                    p.right = new Node(val);
                    return;
                } 
                p = p.right;
            } else {
                if (!p.left) {
                    p.left = new Node(val);
                    return;
                }
                p = p.left;
            }
        }
    }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Iterate solution
 * 
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum2 = function(root, sum) {
    if (!root || sum === 0) return false;

    let queue = [root];
    let accum = [root.val];

    while (queue.length > 0) {
        let node = queue.shift();
        let counter = accum.shift();
        
        if (node.right !== null) {
            queue.unshift(node.right);
            accum.unshift(node.right.val + counter);
        }

        if (node.left !== null) {
            queue.unshift(node.left);
            accum.unshift(node.left.val + counter);
        }
        
        if (node.left === null && node.right === null) {
            if (counter === sum) {
                return true;
            } 
        } 
    }

    return false;
};

/**
 * Recursive solution
 * 
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) return false;
    if(!root.left && !root.right && sum === root.val) return true;

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}

let treeRoot = new Tree();

treeRoot.add_BST(1);
treeRoot.add_BST(2);
// treeRoot.add_BST(5);
// treeRoot.add_BST(25);
// treeRoot.add_BST(40);
// treeRoot.add_BST(30);
// treeRoot.add_BST(50);


const a = hasPathSum(treeRoot.root, 3);

console.log(a);