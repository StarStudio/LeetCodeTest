/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var numCol = [];
    for(var k = 0; k < numRows; k++){
    	numCol.push(getRow(k));
    }
    return numCol;
};

var getRow = function(rowIndex) {
	var row = [];
	rowLength = parseInt(rowIndex / 2);
	row.push(1);
	for(var i = 1; i <= rowLength; i++){
		row.push( row[i - 1] * (rowIndex - i + 1) / i);
	}
	if(rowIndex % 2 == 1){
		for(i--; i >= 0; i--){
			row.push(row[i]);
		}
	}else{
		for(i -= 2; i >= 0; i--){
			row.push(row[i]);
		}
	}
	return row;
};