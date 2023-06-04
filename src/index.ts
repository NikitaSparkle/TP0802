let darr:number[][]=[[1,2,3,4,5],[6,7,8,9,0], [2,3,4,5,6], [3,4,5,6,7], [4,5,6,7,8]]
for (let i in darr){
    let str:string = '';
    for (let j in darr[i]){
        str = str + darr[i][j].toString()
    }
    console.log(str)
    str = ''
}
let sum:number = 0;
for(let i = 0; i< darr.length; i++){
    // console.log(darr[i][i], ' ',  darr[i][darr[i].length-1-i])
    sum += darr[i][i]
    sum += darr[i][darr[i].length-1-i]
}
console.log('sum', sum)
let arr:number[] = [].concat(...darr);
let count:number = 0;
let asum:number = 0;
for(let i = 1; i< arr.length; i+=2) {
    asum+=arr[i];
    count++;
}
// console.log(asum,' ', count)
console.log('asum', asum/count)
