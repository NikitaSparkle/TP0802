var darr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 0], [2, 3, 4, 5, 6], [3, 4, 5, 6, 7], [4, 5, 6, 7, 8]];
for (var i in darr) {
    var str = '';
    for (var j in darr[i]) {
        str = str + darr[i][j].toString();
    }
    console.log(str);
    str = '';
}
var sum = 0;
for (var i = 0; i < darr.length; i++) {
    // console.log(darr[i][i], ' ',  darr[i][darr[i].length-1-i])
    sum += darr[i][i];
    sum += darr[i][darr[i].length - 1 - i];
}
console.log('sum', sum);
var arr = [].concat.apply([], darr);
var count = 0;
var asum = 0;
for (var i = 1; i < arr.length; i += 2) {
    asum += arr[i];
    count++;
}
// console.log(asum,' ', count)
console.log('asum', asum / count);
//# sourceMappingURL=index.js.map