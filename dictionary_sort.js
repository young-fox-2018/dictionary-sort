function dictionary(array){
    for (let i = 0; i < array.length; i++) {
        var currentMin = array[i]
        var indexCurrentMin = i
        var temp = 0
        for (let j = i+1; j < array.length; j++) {
            if(array[j] <  currentMin){
                currentMin = array[j]
                indexCurrentMin = j
            }
        }
        if(array[i] > currentMin) {
            temp = array[i]
            array[i] = array[indexCurrentMin]
            array[indexCurrentMin] = temp
        }
    }
    return array
}

console.log(dictionary(['makan','duduk','tidur','terbang']))
console.log(dictionary(['anggi','angga','ani','adi']))