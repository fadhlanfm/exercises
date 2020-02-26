// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/ctci-array-left-rotation/

function oneRotation(arr){
    let temp = arr[0]
    for(let i=0;i<arr.length;i++){
        if(i==arr.length-1){
            arr[i]=temp
        }else{
            arr[i]=arr[i+1]
        }
    }
    return arr
}

function rotLeft(a, d) {
    for(let i=0;i<d;i++){
        a = oneRotation(a)
    }
    return a
}