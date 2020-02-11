// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/

function breakingRecords(scores) {
    let min = scores[0]
    let max = scores[0]
    let minCounter = 0
    let maxCounter = 0

    for(let i = 1;i<scores.length;i++){
        if(scores[i]<min){
            min = scores[i]
            minCounter++
        }else if(scores[i]>max){
            max = scores[i]
            maxCounter++
        }
    }

    return [maxCounter, minCounter]

}