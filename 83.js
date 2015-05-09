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
var deleteDuplicates = function(head) {
	if(head === null){
		return null;
	}
	var node = head;
	while(node.next !== null){
		if(node.val === node.next.val){
			node.next = node.next.next;
		}else{
			node = node.next;
		}
	}
	return head;
};