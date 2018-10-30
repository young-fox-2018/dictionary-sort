const readline = require('readline');
// your code here to initialize the program and take user input

function Dictionary(arrWords) {

    for (var i = 1; i < arrWords.length; i++) {

        var pembanding = arrWords[i];
        //cek mundur
        var j = i - 1;
        while (j >= 0 && arrWords[j] > pembanding) {            
            var temp = arrWords[j];            
            arrWords[j+1] = arrWords[j];
            arrWords[j] = pembanding            
            j--;
        }
    }
    return arrWords.join();    
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'];
console.log(Dictionary(arrOfWord));

arrOfWord = ['anggi', 'angga', 'ani', 'adi'];
console.log(Dictionary(arrOfWord));

module.exports = Dictionary
