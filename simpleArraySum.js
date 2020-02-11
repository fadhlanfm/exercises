// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/simple-array-sum/

function simpleArraySum(ar) {
    let result = 0
    for(let i = 0;i<ar.length;i++){
        result += ar[i]
    }
    return result
}