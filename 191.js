/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
	if(n === 0) return 0;
	var count = 1;
	while((n & (n - 1)) !== 0){
		n &= n - 1;
		count++;
	}
	return count;
};