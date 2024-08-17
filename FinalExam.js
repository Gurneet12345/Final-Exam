---------------------------------------------------- Question 1: -----------------------------------------------------


function reverseInteger(x) {
    const isNegative = x < 0;
    let reversedNum = parseInt(Math.abs(x).toString().split('').reverse().join(''));  // It should reverse the number
    
    if (isNegative) {
        reversedNum *= -1;                                                            // To preserve the Sign
    }
    
    return reversedNum;
}

// Test casesTest Case 1: Positive Number
console.log(reverseInteger(123));   // So the Output would be 321

// Test Case 2: Negative Number
console.log(reverseInteger(-456)); // So the Output would be -654


--------------------------------------------------- Question 2: -----------------------------------------------------


function searchingTheInsert(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
}


// Test Case 1: Target is in the array
console.log(searchingTheInsert([1, 3, 5, 6], 5));  // So the Output would be 2


// Test Case 2: Target is not in the array (insert position in between)
console.log(searchingTheInsert([1, 3, 5, 6], 2));  // So the Output would be 1


--------------------------------------------------- Question 3: -----------------------------------------------------

function deleteNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}

function printLinkedList(head) {
    let current = head;








--------------------------------------------------- Question 4: -----------------------------------------------------




function findingDuplicate(nums) {
    let EverySmallestDuplicate = null;

    for (let i = 0; i < nums.length; i++) {                                          		//The outer loop (i) goes through each element in the array.
        for (let j = i + 1; j < nums.length; j++) {                                  		//The inner loop (j) checks all the elements after the ith element to find duplicates.
            if (nums[i] === nums[j]) {                                               		
                if (EverySmallestDuplicate === null || nums[i] < EverySmallestDuplicate) {
                    EverySmallestDuplicate = nums[i];
                }
            }
        }
    }

    return EverySmallestDuplicate;                                                              //It should return smallestDuplicate.
}


//Test Case 1:
console.log(findingDuplicate([4, 10, 5, 1, 11, 5, 1, 4, 1]));  // So the Output would be 1

//Test Case 2:
console.log(findingDuplicate([1, 10, 1, -1, 10, -1]));         // So the Output would be -1


---------------------------------------------- Multiple Choice Questions --------------------------------------------



Question1: Which type of search is efficient on a sorted array?
Answer: B) Binary Search


What is the time complexity of inserting a new node at the
beginning of a singly linked list?
Answer: A) O(1)


In a binary search tree (BST), the left child of a node is always:
Answer: B) Smaller than the node


Which traversal of a BST visits nodes in ascending order?
Answer: C) In-order


In a doubly linked list, what does the prev pointer in the first node point to?
Answer: B) Null