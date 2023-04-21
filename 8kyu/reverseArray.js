let arr = [1, 3, 8]
function reverseNums(nums) {
    for(let i = 0; i < nums.length / 2; i++) {
        const num = nums[i];
        nums[i] = nums[nums.length - 1 - i];
        nums[nums.length - 1 - i] = num;
    }
    return nums;
}
console.log(reverseNums(arr))