class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkList {
    constructor() {
        this.head = null;
    }
    insert(val) {
        if (!this.head) {
            this.head = new Node(val);
            return;
        }
        let p = this.head;

        while (p) {
            if (!p.next) {
                p.next = new Node(val);
                return;
            }
            p = p.next;
        }
    }
    print() {
        if (!this.head) return;

        let p = this.head;
        let res = [];

        while (p) {
            res.push(p.val);
            p = p.next;
        }
        console.log(res.join('=>'));
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let p1 = headA;
    let p2 = headB;
    let hash = new Map();

    while (p1 !== null) {
        if (hash.has(p1)) {
            return p1;
        } else {
            hash.set(p1, true);
        }
        p1 = p1.next;
    }
    while (p2 != null) {
        if (hash.has(p2)) {
            return p2;
        } 
        // else {
        //     hash.set(p2, true);
        // }
        p2 = p2.next;
    }

    return null;
};

//[4,1,8,4,5]
//[5,0,1,8,4,5]
const l1 = new LinkList();
const l2 = new LinkList();
l1.insert(4);
l1.insert(1);
l1.insert(8);
l1.insert(4);
l1.insert(5);

l2.insert(5);
l2.insert(0);
l2.insert(1);
l2.insert(8);
l2.insert(4);
l2.insert(5);

const a = getIntersectionNode(l1.head,l2.head);
console.log(a);



