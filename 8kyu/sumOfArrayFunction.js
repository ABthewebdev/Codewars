// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
let sumOfArray = [1, 3, 5, 9]
function sum(sumOfArray) {
    return sumOfArray.reduce((a, b) => a + b, 0);
  }