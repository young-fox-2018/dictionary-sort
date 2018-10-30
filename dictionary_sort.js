const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(dic) {

    for(let i = 0; i < dic.length; i++) {
        let small = dic[i]
        let smallIndex = i
        let temp
        for(let j = i; j < dic.length; j++) {
            if(dic[j] < small) {
                small = dic[j]
                smallIndex = j
            }
        }
        temp = dic[i]
        dic[i] = small
        dic[smallIndex] = temp
    }

    return dic.join()
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']))

// module.exports = Dictionary
