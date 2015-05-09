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
	var ptrA = headA,
		ptrB = headB;

	if(headA === null || headB === null) return null;
	while(ptrA.next !== null){
		ptrA = ptrA.next;
	}

	while(ptrB.next !== null){
		ptrB = ptrB.next;
	}

	if (ptrA !== ptrB) return null;

	ptrA = headA;
	ptrB = headB;

	while(ptrA !== ptrB){
		ptrA = ptrA.next || headB;
		ptrB = ptrB.next || headA;
	}

	return ptrA;
};