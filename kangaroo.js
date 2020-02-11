// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/kangaroo/

function kangaroo(x1, v1, x2, v2) {
    //the constraint defines x1<x2, so v2 has to be greater than v1
    if(v1<=v2){
        return 'NO'
    }else{
        //since x1+(attempt*v1)=x2+(attempt*v2) 
        //or attempt=(x2-x1)/(v1-v2) equation has to be fulfilled so
        if((x2-x1)%(v1-v2)==0){
            return 'YES'
        }else{
            return 'NO'
        }
    }
}