/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var col = [], res = true;
	for(var i = 0; i < s.length; i++){
		if(s[i] === '{' || s[i] === '(' || s[i] === '['){
			col.push(s[i]);
		}else{
			switch(s[i]){
				case '}': res = col.pop() === '{'; break;
				case ']': res = col.pop() === '['; break;
				case ')': res = col.pop() === '('; break;
				default : return false;
			}
			if(!res) return false;
		}
	}
	return col.length === 0;
};