const readline = require('readline');
function Sort(arr){
    var angka = 0
  var j = 0

 for(var i = 0 ; i < arr.length ; i++){
   angka = arr[i];
   j = i-1;

   while ( j >=0 && arr[j] > angka ) {

     arr [ j+1] = arr[j]

     j = j-1;
   }

   arr[j+1] = angka
 }
 
 return arr
}
// your code here to initialize the program and take user input
console.log(Sort(["makan","duduk","tidur","terbang"]))
console.log(Sort(["anggi","anggo","angga","ani","adi","aries"]))
// module.exports = Dictionary
