const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        let k = i;
        for (let j = 0; j < arr.length; j++) {
            if (i < j && arr[j] < arr[k]) {
                k = j
            }
        }
        temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
    return arr
};
// module.exports = Dictionary
console.log(dictionarySort(['anggi','angga','ani','adi']))