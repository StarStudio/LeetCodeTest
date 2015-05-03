/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	var row = [1];
	rowLength = rowIndex >> 1;
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