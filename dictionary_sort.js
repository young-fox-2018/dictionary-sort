function sortKata(arr) {
    var count, temp
  
    for(var i=0; i<arr.length; i++){
        count = i
        while(count!==0){
          if(arr[count]<arr[count-1]){
            temp = arr[count-1]
            arr[count-1] = arr[count]
            arr[count] = temp
          }
          count -= 1
        }
    }
    return arr.join()
}

const readline = require('readline');
// your code here to initialize the program and take user input

// module.exports = ownSort()

console.log(sortKata(['makan','duduk','tidur','terbang']))
console.log(sortKata(['anggi','angga','ani','adi']))