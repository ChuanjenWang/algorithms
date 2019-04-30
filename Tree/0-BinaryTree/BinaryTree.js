class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    
    insertOrder(data) {
        if (!this.root) {
            this.root = new TreeNode(data);
            return;
        }
        let p = this.root;

        while (p) { 
            if (!p.left) {
                p.left = new TreeNode(data);
                return;
            } else if (!p.right) {
                p.right = new TreeNode(data);
                return;
            } else {
                if (p.left) {
                    p = p.left;
                } else if (p.right) {
                    p = p.right;
                }
            }
        
        }   
    }

    insert(data) {
        if (!this.root) {
            this.root = new TreeNode(data);
            return;
        }

        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift();

            if (data < node.data) {
                if (node.left) {
                    arr.push(node.left);
                } else {
                    node.left = new TreeNode(data);
                    return;
                }
            }
            if (data > node.data) {
                if (node.right) {
                    arr.push(node.right);
                } else {
                    node.right = new TreeNode(data);
                    return;
                }
            }
        }
    }

    insert2(data) {
        if (!this.root) {
            this.root = new TreeNode(data);
            return;
        }

        let p = this.root;

        while (p) { 
            if (data < p.data) {
                if (!p.left) {
                    p.left = new TreeNode(data);
                    return;
                } 
                p = p.left;
            } else {
                if (!p.right) {
                    p.right = new TreeNode(data);
                    return;
                } 
                p = p.right;
            }   
        }
    }

    lookup(data) {
        if (!this.root) return false;

        let p = this.root;

        while (p) {
            if (p.data === data) return true;
            if (data < p.data) p = p.left;
            if (data > p.data) p = p.right;
        }
        return false;
    }

    remove(data) {
        
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

            fn(node.data);
        }
    }
}

const a = new BinaryTree();

//a.insert(50);
//a.insert(60);
//a.insert(20);
//a.insert(40);
//a.insert(55);

//a.insert2(10);
//a.insert2(9);
//a.insert2(20);
//a.insert2(1);

//console.log('lookup:' + a.lookup(20));

//a.printAll();

module.exports = BinaryTree 