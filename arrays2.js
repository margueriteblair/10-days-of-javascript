
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
let array = [2, 3, 6, 6, 5, 7, 8];
function getSecondLargest(nums) {
    let largestNumber = 0;
    let secondLargestNumber = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = nums[i];
        }
        if ((nums[i] > secondLargestNumber) && (nums[i] < largestNumber)) {
            secondLargestNumber = nums[i];
        }
    }
    return secondLargestNumber;
}

console.log(getSecondLargest(array));
