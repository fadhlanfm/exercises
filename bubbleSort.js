function bubbleSort(array){
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                var tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
        }
    }
    return array
}