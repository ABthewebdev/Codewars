// Create a function that takes in an array and returns it in reverse order
// My solution
let nums = [1, 3, 8]
function reverseNums(nums) {
    return nums.reverse()
}

function reverseNums2(nums) {
    for(let i = 0; i < nums.length / 2; i++) {
        const num = nums[i];
        nums[i] = nums[nums.length - 1 - i];
        nums[nums.length - 1 - i] = num;
    }
    return nums;
}