// const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(arr) {
    // Your sorting code
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j >= 0 ; j--) {
        if (arr[j-1] > arr[j]) {
          let bucket = arr[j]
          arr[j] = arr[j-1]
          arr[j-1] = bucket
        }
      }
    }
    return arr
}

console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))

// module.exports = Dictionary
