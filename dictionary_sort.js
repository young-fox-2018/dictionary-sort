const readline = require('readline');
// your code here to initialize the program and take user input

        function merge(left, right) {
            result = [];
            left_index = 0; right_index = 0;
            while (left_index < left.length && right_index < right.length) {
                if (left[left_index] < right[right_index]) {
                    result.push(left[left_index])
                    left_index += 1
                } else {
                    result.push(right[right_index])
                    right_index += 1
                }
            }
            if (right.length > left.length) {
                let loop_the_rest = right.length - left.length;
                for (let i = right.length - (1 + loop_the_rest); i < right.length; i++) {
                    result.push(right[i])
                } 
            } else {
                let loop_the_rest = left.length - left.length;
                for (let i = left.length - (1 + loop_the_rest); i < left.length; i++) {
                    result.push(left[i])
                } 
            }
            return result
        }

        // merge sort

        function mergeSort(arr) {
            if (arr.length <= 1) {
                return arr
            }
            let mid = Math.floor(arr.length / 2)
            let left = arr.slice(0,mid)
            let right = arr.slice(mid, arr.length)

            left = mergeSort(left)
            right = mergeSort(right)
            return merge(left, right)
        }

        function Dictionary (arr) {
            return mergeSort(arr)
        }




console.log(Dictionary(['makan','duduk','tidur','terbang']))
console.log(Dictionary(['anggi','angga','ani','adi']))
module.exports = Dictionary;
