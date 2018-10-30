// const readline = require('readline');

function dictionary(input){

    //bubble sort!

    // var temp = 0;
    // for(var i = 0; i < input.length; i++){
    //     // console.log(input[i])
    //     if(input[i] > input[i+1]){
    //         temp = input[i];
    //         input[i] = input[i+1];
    //         input[i+1] = temp;
    //     }
    // }
    // var result = ""
    // return result += input

    //insetion sort!
    
    for(var i = 0; i < input.length; i++){
        // console.log(arr[i])
        var firstIndex = i;
        var firstValue = input[i];
        // console.log(firstIndex)
        var temp = 0;
        for(var j = firstIndex - 1; j >= 0; j--){
          // console.log(arr[firstIndex] < arr[j])
          if(input[firstIndex] < input[j]){
            temp = input[j];
            input[j] = firstValue;
            input[firstIndex] = temp;
            firstIndex = firstIndex - 1;
          }
        }
      }
      return input.join(",");
}

var arrOfWord = ["makan", "duduk", "tidur", "terbang"];
var arrOfName = ["anggi", "angga", "ani", "adi"];

console.log(dictionary(arrOfWord));
console.log(dictionary(arrOfName));

// module.exports = Dictionary
