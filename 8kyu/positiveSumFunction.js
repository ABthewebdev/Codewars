// You get an array of numbers, return the sum of all of the positives ones
// My solution
arr = [-1, -4, 2, 3, 8]
function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      sum += arr[i];
    }
  } return sum;
}

function positiveSum2(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}