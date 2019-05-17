/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    return findMinDepth(root, 1);
};

/**
 * Recrusive version
 * 
 * @param {*} root 
 * @param {*} path 
 */
function findMinDepth(root, path) {
    if (!root) return 10000;
    if (!root.left && !root.right) return path;
    
    path = Math.min(findMinDepth(root.left, path + 1) ,findMinDepth(root.left, path + 1));

    return path;
}

/**
 * Iterate version
 * 
 * @param {*} root 
 * @param {*} path 
 */
function findMinDepth(root, path) {
    let arr = [root];
    let data = [1];

    while (arr.length > 0) {
        let node = arr.shift();
        let pathSum = data.shift();

        if (node.right) {
            arr.unshift(node.right);
            data.unshift(pathSum + 1);
        }
        if (node.left) {
            arr.unshift(node.left);
            data.unshift(pathSum + 1);
        }
        if (!node.left && !node.right) {
            path = Math.min(pathSum, path);
        }
    }

    return path;

}


