const readline = require('readline');

function Dictionary(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let tmp = 0
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j] >= arr[j+1]) {
                tmp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr.join(',')
}
console.log(Dictionary([5, 3, 2, 4, 1]))
console.log(Dictionary(['makan', 'duduk', 'tidur', 'terbang']))
console.log(Dictionary(['anggi', 'angga', 'ani', 'adi']))
module.exports = Dictionary
