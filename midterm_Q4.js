

// Determine if it has cycle in a linkedlist

class Node
{
    constructor(value)
    {
        this.val = value;
        this.next = null;
    }
}


// The Time Complexity is O(n)
function checkIfCycleExists(headNode)
{
    let fastPointer = headNode;
    let slowPointer = headNode;
    let atStart = true;

    while(atStart ||
            (fastPointer &&
             fastPointer.val != slowPointer.val))
    {
       if (fastPointer.next)
       {
            fastPointer = fastPointer.next.next;
            slowPointer = slowPointer.next;
       }
       else
       {
            return false;
       }
       atStart = false;
    }
      
    return (fastPointer.next &&
            fastPointer.val === slowPointer.val);
}

let nodeA = new Node("A");
let nodeB = new Node("B");
let nodeC = new Node("C");

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeA;

// Case 1
console.log("1 - " + checkIfCycleExists(nodeA));


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

// Case 2
node1.next = node2;
node2.next = node3;
console.log("2 - " + checkIfCycleExists(node1));

// Case 3
node3.next = node1;
console.log("3 - " + checkIfCycleExists(node1));