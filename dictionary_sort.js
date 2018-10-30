const readline = require('readline');
// your code here to initialize the program and take user input

function dict(arr){
    var alphabet ="abcdefghijklmnopqrstuvwxyz"
    
    for(var i = 0; i < arr.length ; i++){
        var min  = alphabet.indexOf(arr[i][0])
        var index 
        for(var j = i; j < arr.length; j++){
            if(alphabet.indexOf(arr[j][0]) < min){
                min = alphabet.indexOf(arr[j][0]);
                index = j;
            }
        }
        console.log(min)
        console.log(index)
        console.log("====")
        var temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp
    }
    return arr
}



console.log(dict(["bruno", "zebra","apple","carly"]))

module.exports = dict
