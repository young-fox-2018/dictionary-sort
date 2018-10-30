const readline = require('readline');
// your code here to initialize the program and take user input

function Dictionary(arr){
    var temp
    var idxMin
    

    for(i=0;i<arr.length;i++){
        idxMin = undefined // refresh temp & idx
        temp = undefined
        for(j=i+1;j<arr.length;j++){
            if(temp == undefined){
                temp = arr[j]
                idxMin = j
                // first insert temp & idx
            }else if(temp > arr[j]){
                temp = arr[j]
                idxMin = j
                // insert temp & idx if less than it's before
            }
        }

        if(arr[i]>temp){
            // swap if current number is greater than temp
            arr[idxMin] = arr[i]
            arr[i] = temp
        }
    }
    
    return arr
}

console.log(Dictionary(['makan','duduk','tidur','terbang']))
console.log(Dictionary(['anggi','angga','ani','adi']))

module.exports = Dictionary
