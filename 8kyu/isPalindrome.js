// Create a function that takes in a string and returns true if it is a palindrome
// My solution
function palidrome(x) {
    let xReverse = x.split('').x.reverse().join('')
    return xReverse === x ? true : false
}
console.log(palidrome('bob'))