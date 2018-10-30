const readline = require('readline');

function dictionary(input){
 
  // var result = []
  // var tampung ;

  // for(var i = 0 ; i < input.length ; i++){
  //   tampung = input[i]
  //   result.push(tampung)
  //   if(input[i+1] < tampung){
  //     result.push(input[i+1])
  //   }
  // }
  // return result
  var str ;
  var index = 0 ;

  for(var i = 0 ; i < input.length ; i++){
    str = input[i];
    index = i-1;

    while(index >= 0 && input[index] > str){
      input[index+1] = input[index];
      index = index-1
    }

    input[index+1] = str
  }
  return input.join(',')
}

console.log(dictionary(['makan' , 'duduk' , 'tidur' , 'terbang']));
console.log(dictionary(['anggi' , 'angga' , 'ani' , 'adi']));

// module.exports = Dictionary
