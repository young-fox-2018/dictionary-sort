const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(arr) {
    let sort
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i
        for (let j = 0; j < arr.length; j++) {
            if (i < j && arr[j] < arr[indexMin]) {
                indexMin = j
            }
        }
        sort = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = sort
    }
    return String(arr)
}

console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']))

// module.exports = Dictionary
