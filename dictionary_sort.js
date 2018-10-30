// const readline = require('readline');
const readline = ["makan", "duduk", "tidur", "terbang"];
function kamus(arr) {
    var counter = 0
    while (counter < arr.length) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i-1]) {
                var a = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = a
            }

        }

        counter++
    }
    return arr
}
console.log(kamus(readline));





// module.exports = Dictionary
