const readline = require('readline');
// your code here to initialize the program and take user input
function Dictionary(params) {
    for (let i = 0; i < params.length; i++) {
        let temp = ""
        for (let j = 0; j < params.length; j++) {
            if (params[i] < params[j]) {
                temp = params[i]
                params[i] = params[j]
                params[j] = temp
            }
        }
    }
    return params.toString()
}
console.log(Dictionary(["makan", "duduk", "tidur", "terbang"]));
console.log(Dictionary(["anggi", "angga", "ani", "adi"]));


module.exports = Dictionary
