class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

/**
 * DFS Solution
 */
function vaildBST(tree) {
    let arr = [];

    dfs_in(tree, item => arr.push(item));
    console.log(arr.join(','));
    let pre = arr[0];
    
    for(let i = 1; i < arr.length; i++) {
        if(pre > arr[i]) {
            return false;
        }
        pre = arr[i];
    }
    
    return true;
}

function dfs_in(node, fn) {
    if (!node) return;

    if(node.left) dfs_in(node.left, fn);
    fn(node.data);
    if(node.right) dfs_in(node.right, fn);
}

/**
 * Solution 2
 * Time: 
 * Space:
 */
function validBST2(tree, min = null, max = null) {
    if (min !== null && tree.data < min) return false;
    if (max !== null && tree.data > max) return false;
    if (!tree.left ) return true;
    if (!tree.right ) return true;

    let l = null;
    let r = null;

    //left
    l = validBST2(tree.left, min, tree.data);
    
    
    //right 
    r = validBST2(tree.right, tree.data, max);    
    
    return (l && r);
}


/**
 * For test use 
 */
const BTree = require('./BinaryTree');
const BST = new BTree();
const node2_left = new TreeNode(1);
const node2_right = new TreeNode(4);
const node1 = new TreeNode(5);

//node2_left.left = new TreeNode(5);
//node2_left.right = new TreeNode(25);
node2_right.left = new TreeNode(3);
node2_right.right = new TreeNode(6);

node1.left = node2_left;
node1.right = node2_right;

BST.root = node1;

//const a = BST.printAll();
const a = validBST2(BST.root);
console.log(a);

//console.log(a);