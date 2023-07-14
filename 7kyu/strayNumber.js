// You take in an odd numbered array of numbers, one of them is not the same as the rest. Find the number, the input will always be valid.
function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}

const stray2 = nums => nums.reduce((a, b) => a ^ b)