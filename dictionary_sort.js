const readline = require('readline');

function dictionary(inputArr){
    for(let i = 0; i < inputArr.length-1; i++){
        if(inputArr[i+1] < inputArr[i]){
            let temp = inputArr[i+1]
            inputArr[i+1] = inputArr[i]
            inputArr[i] = temp
            i = -1
        }
    }
    return inputArr
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
console.log(dictionary(arrOfWord))

var arrOfWord = ['anggi', 'angga', 'ani', 'adi']
console.log(dictionary(arrOfWord))

module.exports = dictionary
