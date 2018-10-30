const readline = require('readline');
// your code here to initialize the program and take user input
function dictionary(arr){
    var initial = 0
    var j = 0
    for(let i = 0; i < arr.length; i++){
        initial = arr[i]
        j = i - 1
        while(j >= 0 && arr[j] > initial){
            arr[j+1] = arr[j]
            j -= 1
        }
        arr[j+1] = initial
    }
    return arr.join(', ')
}

console.log(dictionary(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionary(['anggi', 'angga', 'ani', 'adi']));


module.exports = dictionary
