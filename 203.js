/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	while(head !== null){
		if(head.val !== val) break;
		head = head.next;
	}
	if(head === null) return head;
	var temp = head;
	while(temp.next !== null){
		if(temp.next.val === val){
			temp.next = temp.next.next;
		}else{
			temp = temp.next;
		}
	}
	return head;
};