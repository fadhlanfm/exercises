// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/mini-max-sum/

function miniMaxSum(arr) {
    let min = arr[0]
    let minIndex = 0
    let max = arr[0]
    let maxIndex = 0

    for(let i =0; i<arr.length;i++){
        if(min>=arr[i]){
            min = arr[i]
            minIndex = i
        }

        if(max<arr[i]){
            max = arr[i]
            maxIndex = i
        }
    }

    let minSum = 0
    let maxSum = 0
    for(let i =0;i<arr.length;i++){
        if(i==minIndex){
            minSum += arr[i]
        }else if(i==maxIndex){
            maxSum += arr[i]
        }else{
            maxSum += arr[i]
            minSum += arr[i]
        }
    }
    console.log(''+minSum+' '+maxSum+'')
}