const readline = require('readline');
// your code here to initialize the program and take user input
var Dictionary = (input) => {
    for (let i = 0; i < input.length; i++) {
        let temp = []
        for (let j = 0; j < input.length; j++) {
            if (input[i] < input[j]) {
                temp = input[i]
                input[i] = input[j]
                input[j] = temp
            }
        }
    }
    return input
}
var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi']

console.log(Dictionary(arrOfWord));
console.log(Dictionary(arrOfWord2));


module.exports = Dictionary
