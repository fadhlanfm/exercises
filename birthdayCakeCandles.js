// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/birthday-cake-candles/

function birthdayCakeCandles(ar) {
    let max = ar[0]
    for(let i=1;i<ar.length;i++){
        if(max<ar[i]){
            max=ar[i]
        }
    }

    let counter = 0
    for(let i=0;i<ar.length;i++){
        if(max===ar[i]){
            counter++
        }
    }
    return counter
}