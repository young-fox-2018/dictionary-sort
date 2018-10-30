const readline = require('readline');
function dictionarySort(arr) {
  var temp = 0
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i]
    var indexmin = i
    for (var j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j]
        indexmin = j
      }
    }
    //Swap array
    temp = arr[i]
    arr[i] = min
    arr[indexmin] = temp
  }
  return arr.join(",")

}

console.log(dictionarySort(["makan", "duduk", "tidur", "terbang"]));
console.log(dictionarySort(["anggi", "angga", "ani", "adi"]));

//module.exports = Dictionary
