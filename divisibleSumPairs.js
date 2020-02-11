// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/divisible-sum-pairs/

function divisibleSumPairs(n, k, ar) {
    let counter = 0
    for(let i=0;i<ar.length;i++){
        for(let j=i;j<ar.length;j++){
            if(i<j && (ar[i]+ar[j])%k==0){
                counter++
            }
        }
    }
    return counter
}