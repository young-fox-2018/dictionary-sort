const readline = require('readline');
// your code here to initialize the program and take user input

function Dictionary (arr) {
    // using insertion sort
    for (let i = 0; i < arr.length; i++) {
        while (arr[i-1] > arr[i]) { // change > value to change sorting direction
            let temp_arr_i_min = arr[i - 1]; arr[i-1] = arr[i]; arr[i] = temp_arr_i_min; i--;
        }
     }
    return arr.join()
}


console.log(Dictionary(['makan','duduk','tidur','terbang']))
console.log(Dictionary(['anggi','angga','ani','adi']))
module.exports = Dictionary;
