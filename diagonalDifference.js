// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/diagonal-difference/

function diagonalDifference(arr) {
  let diagonalA = 0;
  let diagonalB = 0;
  for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr[i].length; j++){
        if(j==i){            
          diagonalA += arr[i][j]
        }

        if(j+i==arr.length-1){
          diagonalB += arr[i][j]  
        }
    }
  }

  return Math.abs(diagonalB - diagonalA)
}