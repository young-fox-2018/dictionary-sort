const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(input) {
    for (let i = 0; i < input.length; i++) {
        let temp = 0
        for (let j = i; j > 0; j--) {
            if (input[j] < input[j - 1]) {
                temp = input[j]
                input[j] = input[j - 1]
                input[j - 1] = temp
            }
        }
    }
    return input
}

// Test Cases
console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']))

module.exports = dictionarySort
