// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/two-strings/

function twoStrings(s1, s2) {
    let map = {}
    let result = 'NO'
    for(let i=0; i<s1.length; i++){
        if(!map[s1[i]]){
            map[s1[i]] = 1
        }
    }

    for(let i=0; i<s2.length; i++){
        if(map[s2[i]]){
            result = 'YES'
        }
    }

    return result

}