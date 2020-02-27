// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/ctci-ransom-note/

function checkMagazine(magazine, note) {
    let map = {}
    let result = 'Yes'

    for(let i=0; i<note.length; i++){
        if(!map[note[i]]){
            map[note[i]] = 1
        }else{
            map[note[i]]++
        }
    }

    for(let i=0; i<magazine.length; i++){
        if(map[magazine[i]]){
            map[magazine[i]]--
        }
    }

    for(let i in map){
        if(map[i]>0){
            result = 'No'
            break
        }
    }
    console.log(result)
}