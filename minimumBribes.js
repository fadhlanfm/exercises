// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/new-year-chaos/

// Still a brute force algorithm
// Cant satisfy the max complexity requirement for n=10^5

function minimumBribes(q) {
    
    let chaosFounded = false
    let bribes = 0;

    for(let i=0; i<q.length; i++){
        if(q[i] - i > 3){
            chaosFounded = true
        }
        for(let j = i; j<q.length; j++){
            if(q[i] > q[j]){
                bribes++
            }
        }
    }
     
    if(chaosFounded){
        console.log("Too chaotic")
    }else{
        console.log(bribes)
    }
    
}