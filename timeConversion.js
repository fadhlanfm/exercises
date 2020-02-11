// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/time-conversion/

function timeConversion(s) {
  let output = ''
  if(s[s.length-2]=='A'){
      if(s[0]=='1' && s[1]=='2'){
        for(let i = 0;i<s.length-2;i++){
          if(i==0 || i==1){
            output += '0'
          }else{
            output += s[i]
          }
        }
      }else{
        for(let i = 0;i<s.length-2;i++){
          output += s[i]
        }
      }
      
  }else{
      let hour = parseInt(s[0]+s[1])
      if(hour==12){
          hour = 12
      }else{
          hour += 12
      }
      output += hour
      for(let i = 2;i<s.length-2;i++){
          output += s[i]
      }
  }
  return output
}