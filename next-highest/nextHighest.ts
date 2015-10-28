function nextHighest(n: number):any {
	var strPerms:string[] = permutations(n.toString());
	var permsDupes:number[] = toNum(strPerms) // process into sorted array of nums
	var perms:number[] = removeDuplicates(permsDupes); // remove duplicates
	var nIndex = perms.indexOf(n);
	
	if (nIndex !== perms.length - 1) {
		return perms[nIndex + 1];
	}
	else {
		return false;
	} 
	
	/* computes all the permutations of the input string */
	function permutations(str: string): string[] {
		if (str.length <= 1) {return [str];}
		
		var perms:string[] = permutations(str.slice(1));
		var currentChar:string = str[0];
		var result:string[] = [];
		
		perms.forEach(function(perm) {
			for (var i = 0; i <= perm.length; i++) {
				var out = perm.slice(0, i) + currentChar + perm.slice(i);
				result.push(out);
			}
		});
		
		return result;
	}
	
	/* converts the array of strings to numbers
	 * courtesy of Lance Powers 
	 */
	function toNum(result:string[]) {
		var numResult:number[] = [];
		result.forEach(function (perm:string) {
			numResult.push(parseInt(perm))
		});
		return numResult.sort(function(a:number, b:number) {return a-b;});
	}
	
	/* removes duplicate values from the input array */
	function removeDuplicates(numArr:number[]):number[] {
		var wrk:number[] = numArr.slice(0);
		var output:number[] = [];
		
		for (var i = 0; i < wrk.length; i++) {
			if (output.indexOf(wrk[i]) === -1) {
				output.push(wrk[i]);
			}
		}
		
		return output;
	}
}

module.exports = nextHighest;