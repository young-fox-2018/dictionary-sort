const readline = require('readline');

function Dictionary(word) {
    var result = "";
    for (var i = 0; i < word.length; i++) {
        tempValue = word[i];      
        for (var j =  i +1; j < word.length; j++) {
            if (tempValue > word[j]) {
                tempValue = word[j];
                tempIndex = j;
            }
        }

        if (word[i] > tempValue) {
            word[tempIndex] = word[i];
            word[i] = tempValue;
        }

        result += word[i] + ",";
    }
    result = result.substring(0, result.length - 1);
    return result;
}
// your code here to initialize the program and take user input
console.log(Dictionary(['angga','robi','santo','babi']));
console.log(Dictionary(['angga','anba','santo','babi']));
console.log(Dictionary(['angga','robi','aaaa','bzanto']));
module.exports = Dictionary
