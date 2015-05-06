/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	var prev = null,
		next = null;
	while(head !== null){
		next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}
	return prev;
};