// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/

function jumpingOnClouds(c) {
    let counter = 0
    let step = 0
    while(step < c.length-1){
        if(c[step + 2] == 0){
            counter++
            step += 2
        }else{
            counter++
            step++
        }
    }

    return counter
}