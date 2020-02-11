// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/apple-and-orange/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCounter = 0
    let orangesCounter = 0
    for(let i=0;i<apples.length;i++){
        if(a+apples[i]>=s && a+apples[i]<=t){
            applesCounter++
        }
    }

    for(let i=0;i<oranges.length;i++){
        if(b+oranges[i]>=s && b+oranges[i]<=t){
            orangesCounter++
        }
    }
    
    console.log(applesCounter)
    console.log(orangesCounter)

}