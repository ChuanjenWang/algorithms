/**
 * Leet Code 110 Balance Tree 
 *
 * @author: Spencer
 * updated: 2019/05/17 
 */

 class Node {
    constructor(val) {
        this.val = val;
        this.left        
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
}

function insertNodeWithArray(arr, root ,i) {
    if (i > arr.length) return null;
    if (arr[i] === null) return null;
    let node = new Node(arr[i]);
    root = node;
    
    root.left = insertNodeWithArray(arr, root.left, 2 * i + 1);
    
    root.right = insertNodeWithArray(arr, root.right, 2 * i + 2);

    return root;
}

function printTree(root) {
    if (!root) {
        console.log('null');
        return;
    }
    
    let queue = [root];
    
    while (queue.length > 0) {
        let node = queue.shift();
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        console.log('node.val:' + node.val);
        console.log('node.left:' + node.left);
        console.log('node.right:' + node.right);
        
        //console.log(node.val);
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;
    let arr = [root];
    let path = [1];
    let max = 0;
    let min = 0;

    while (arr.length > 0) {
        let node = arr.shift();
        let pathCount = path.shift();

        if (node.left) {
            arr.push(node.left);
            path.push(pathCount + 1);
        }
        if (node.right) {
            arr.push(node.right);
            path.push(pathCount + 1);
        }
        console.log('node.val:' + node.val);
        console.log('node.left:' + node.left);
        console.log('node.right:' + node.right);

        if (node.left === null && node.right === null) {
            min = min === 0 ? pathCount : Math.min(min, pathCount);
            max = max === 0 ? pathCount : Math.max(max, pathCount);
            console.log('Path Count: ' + pathCount);
        }
        console.log('min:' + min);
        console.log('max:' + max);
    }
    if (max - min > 1) {
        return false;
    }
    return true;
};


//const arr = [1,2,2,3,3,null,null,4,4];
const arr = [1, null, 2, null, 3];
const t = new Tree();

t.root = insertNodeWithArray(arr, t.root, 0);

printTree(t.root);
//const re = isBalanced(t.root);

//console.log('result: ' + re);
