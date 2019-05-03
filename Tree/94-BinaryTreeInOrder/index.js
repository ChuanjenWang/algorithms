/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = [];
    let res = [];
    let p = root;
    
    while (p || arr.length > 0) {
        while (p) {
            arr.push(p);
            p = p.left;
        }
        p = arr.pop();
        res.push(p.val);
        //console.log(res);
        p = p.right; 
    }
    
    return res;
};