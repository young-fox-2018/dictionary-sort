const readline = require('readline');
// your code here to initialize the program and take user input

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang' ,'ampun']
var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi']


// // BUBBLE SORT
// function sortLetter(arr){
//     var done = true;

//     while (done) {
//         done = false;
//         for (var i = 1; i < arr.length; i++) {
//             if (arr[i - 1] > arr[i]) {
//                 done = true;
//                 var tmp = arr[i - 1];
//                 arr[i - 1] = arr[i];
//                 arr[i] = tmp;
//             }
//         }
//         console.log(arr)
//     }
//     return arr.join(",")
// }
        

// // INSERTION SORT
// function insertionSort(arr) {
    
//     for (var i = 1; i < arr.length ; i++) {
//         debugger
//         for (var j = 0; j <= i-0 ; j++) {
//             if(arr[j] > arr[i]){
//                 var tmp = arr[j]
//                 arr[j] = arr[i]
//                 arr[i] = tmp
//             }
//         }
//         console.log(arr)
//     }
//     return arr.join(",")
// }

// SELECTION SORT
function selectionSort(arr){
    var min = 0

    for(var i = 0 ; i < arr.length ; i++){
        var iMin = i
        for(var j = i+1 ; j < arr.length ; j++){
            if(arr[j] < arr[iMin]){
                iMin = j
            }
        }
        console.log(arr)
        min = arr[i]
        arr[i] = arr[iMin]
        arr[iMin] = min
    }
     return arr.join(",")
}


// console.log(sortLetter(arrOfWord))
// console.log(sortLetter(arrOfWord2))
// console.log(insertionSort(arrOfWord))
// console.log(insertionSort(arrOfWord2))
console.log(selectionSort(arrOfWord))
// console.log(selectionSort(arrOfWord2))

// module.exports = Dictionary