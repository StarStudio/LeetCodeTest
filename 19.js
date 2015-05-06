/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	var temp = head,
		pos = head,
		count = 0;
	while(temp.next !== null){
		temp = temp.next;
		count++;
		if(count === n) break;
	}
	if(count !== n){
		head = head.next;
		return head;
	}
	while(temp.next !== null){
		temp = temp.next;
		pos = pos.next;
	}
	if(pos.next === null) return null;
	pos.next = pos.next.next;
	return head;
};