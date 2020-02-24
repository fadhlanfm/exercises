// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/sock-merchant/

function sockMerchant(n, ar) {
    let type = {}
    let matchCounter = 0
    for(let i = 0; i < ar.length; i++){
        if(type[ar[i]]){
            matchCounter++
            type[ar[i]] = 0
        }else{
            type[ar[i]] = 1
        }
    }
    return matchCounter
}