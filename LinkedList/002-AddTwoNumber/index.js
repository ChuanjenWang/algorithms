/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   
};

// bellow main function is for backup
function main() {
    let num1 = [];
    let num2 = [];
    let p1 = l1;
    let p2 = l2;
    let res = [];
    
    num1 = LinkedListToArray(p1);
    num2 = LinkedListToArray(p2);
    
    //console.log(`num1: ${num1}, num2: ${num2}`);
    res = calSumArray(num1, num2);
    console.log(`res ${res}`);
    
    let counter = 0;
    let head = null;
    let p = null;
    
    //compose result linkedlist
    if (res.length > 0) {
        counter = 0;
        head = new ListNode(res[counter]);
        p = head;
        counter++;
    }
    
    while (counter < res.length) {
        p.next = new ListNode(res[counter]); 
        p = p.next;
        counter ++;
    }
    
    return head;
}


function LinkedListToArray(p) {
    let num = [];
    
    while (p) {
        num.push(p.val);
        p = p.next;
    }
    
    return num;
};

function calSumArray(num1, num2) {
    if (num1.length === 1 && num1[0] === 0) return num2;
    if (num2.length === 1 && num2[0] === 0) return num1;
    let res = [];
    let len = num1.length > num2.length ? num1.length -1 : num2.length -1;
    let carry = 0;
    
    while (len >= 0) {
        let a = num1[len] || 0;
        let b = num2[len] || 0;
        //console.log(`a ${a}, b ${b}`);
        let temp = a + b + carry;
        
        if (temp >= 10) {
            temp -=10;
            carry = 1;
        } else {
            carry = 0;
        }
        res.push(temp);
        len -=1;
    }
    
    if (carry > 0) {
        res.push(1);
    }
    
    return res;
}

