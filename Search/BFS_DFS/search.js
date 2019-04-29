class TreeNode {
    constructor(val) {
        this.value = val;
        this.leaf = [];
    }
    insert(val) {
        this.leaf.push(new TreeNode(val));  
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    bfs() {
        if (!this.root) {
            console.log('The tree is empty!');
        }
        let queue = [this.root];
        
        while (queue.length) {
            let node = queue.shift();
            console.log(node.value);
            queue.push(...node.leaf);
        }
    }

    bfs_r(queue = [this.root]) {
        if (!queue.length) return;
        
        let node = queue.shift();
        console.log(node.value);
        queue.push(...node.leaf);
        
        this.bfs_r(queue);
    }

    dfs() {
        if (!this.root) {
            console.log('The tree is empty!');
        }
        let queue = [this.root];
        
        while (queue.length) {
            let node = queue.shift();
            console.log(node.value);
            queue.unshift(...node.leaf);
        }
    }
    dfs_in(node = this.root) {
        if (!node) return;
        if (node.leaf[0]) {
            this.dfs_in(node.leaf[0]);
        }
        console.log(node.value);

        if (node.leaf[1]) {
            this.dfs_in(node.leaf[1]);
        }
    }
    dfs_pre(node = this.root) {
        if (!node) return;
        console.log(node.value);

        if (node.leaf[0]) {
            this.dfs_pre(node.leaf[0]);
        }
        if (node.leaf[1]) {
            this.dfs_pre(node.leaf[1]);
        }
    }
    dfs_post(node = this.root) {
        if (!node) return;
        if (node.leaf[0]) {
            this.dfs_post(node.leaf[0]);
        }
        if (node.leaf[1]) {
            this.dfs_post(node.leaf[1]);
        }
        console.log(node.value);
    }
}

//      9
//    4   20
//   2 6 15 170
const t = new Tree();
t.root = new TreeNode(9);

t.root.insert(4);
t.root.insert(20);

t.root.leaf[0].insert(2);
t.root.leaf[0].insert(6);

t.root.leaf[1].insert(15);
t.root.leaf[1].insert(170);

t.dfs_post();



