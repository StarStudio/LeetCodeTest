/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	if(n <= 2) return 0;
	n = n - 2;
	var prime = [], res = 1;
	for(var i = 0; i < n>>1; i++){
		prime.push(true);
	}
	var k = n>>1, m = parseInt(Math.sqrt(n));
	for(i = 0; i <= m; i++){
		if(prime[i]){
			for(var j = 2*i*i+6*i+3; j<=k; j+=2*i+3){
				prime[j] = false;
			}
		}
	}
	for(i = 0; i < n>>1; i++){
		if(prime[i] === true){
			res++;
		}
	}
	return res;
};