// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/staircase/

function staircase(n){
  for(let i = 0; i<n; i++){
    let output = ''
    for(let j=n-1;j>=0;j--){
      if(j>i){
        output += ' '
      }else{
        output+= '#'
      }
    }
    console.log(output)
  }
}