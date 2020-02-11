// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/grading/

function gradingStudents(grades) {
    for(let i =0; i<grades.length;i++){
        if(grades[i] >= 38 && grades[i] % 5!==0){
          if((grades[i]+1) % 5 ==0){
              grades[i] += 1
          }else if((grades[i]+2) % 5 ==0){
              grades[i] += 2
          }
        }
    }
    return grades
}