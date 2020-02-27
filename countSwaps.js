// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/ctci-bubble-sort/

function countSwaps(a) {
    let counter = 0
    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length-i-1; j++){
            if(a[j]>a[j+1]){
                let tmp = a[j+1]
                a[j+1] = a[j]
                a[j] = tmp
                counter++
            }
        }
    }

    console.log('Array is sorted in '+counter+' swaps.')
    console.log('First Element: '+a[0])
    console.log('Last Element: '+a[a.length-1])

}