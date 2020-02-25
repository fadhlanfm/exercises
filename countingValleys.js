// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/counting-valleys/

function countingValleys(n, s) {
    let level = 0
    let counter = 0
    for (let i = 0; i < s.length; i++){
        if(s[i]=='U'){
            level++
        }else if(s[i]=='D'){
            level--
        }

        if(level==0 && s[i]=='U'){
            counter++
        }
    }
    return counter
}