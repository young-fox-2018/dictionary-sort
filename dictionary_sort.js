const readline = require('readline');
// your code here to initialize the program and take user input
function Dictionary(array){

  for(let i =0 ; i<array.length;i++){
    for(let j=0; j<i;j++){
      if(array[j]>array[i]){
        temp =array[i]
        array[i]=array[j]
        array[j]=temp
      }
    }
  }
  console.log(String(array))
  return String(array)
}

Dictionary(['tida','ab','zikri','ac','aa','deny'])
module.exports = Dictionary
