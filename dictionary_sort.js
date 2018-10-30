const readline = require('readline');
// your code here to initialize the program and take user input
function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j > 0; j--) {
          if (arr[j] < arr[j-1]) {
            var temp = arr[j];
            arr[j] = arr[j-1]
            arr[j-1] = temp;
          }
        }
      }
      return arr.join()
}
console.log(sort([ 'makan', 'duduk', 'tidur', 'terbang']));
console.log(sort([ 'angga', 'anggi', 'ani', 'adi']));

// module.exports = Dictionary