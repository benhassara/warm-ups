function nextHighest(n) {
    var strPerms = permutations(n.toString());
    var permsDupes = toNum(strPerms); // process into sorted array of nums
    var perms = removeDuplicates(permsDupes);
    var nIndex = perms.indexOf(n);
    // console.log('n: ', n);
    // console.log('perms: ', perms);
    // console.log('nIndex: ', nIndex);
    // console.log('perms[nIndex]: ', perms[nIndex]);
    if (nIndex !== perms.length - 1) {
        return perms[nIndex + 1];
    }
    else {
        return false;
    }
    function permutations(str) {
        if (str.length <= 1) {
            return [str];
        }
        var perms = permutations(str.slice(1));
        var currentChar = str[0];
        var result = [];
        perms.forEach(function (perm) {
            for (var i = 0; i <= perm.length; i++) {
                var out = perm.slice(0, i) + currentChar + perm.slice(i);
                result.push(out);
            }
        });
        return result;
    }
    function toNum(result) {
        var numResult = [];
        result.forEach(function (perm) {
            numResult.push(parseInt(perm));
        });
        return numResult.sort(function (a, b) { return a - b; });
    }
    function removeDuplicates(numArr) {
        var wrk = numArr.slice(0);
        var output = [];
        for (var i = 0; i < wrk.length; i++) {
            if (output.indexOf(wrk[i]) === -1) {
                output.push(wrk[i]);
            }
        }
        return output;
    }
}
module.exports = nextHighest;
