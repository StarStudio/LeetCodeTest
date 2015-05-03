/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	var numCol = [],
		temp = [],
		left,
		right;
	for(var i = 0; i < numRows; i++){
		left = temp[0];
		for(var j = 1; j < i; j++){
			right = temp[j];
			temp[j] = left + right;
			left = right;
		}
		temp.push(1);
		numCol.push(temp.concat());
	}
	return numCol;
};