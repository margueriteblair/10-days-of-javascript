let nums = [2, 3, 6, 6, 5];
function getSecondLargest(nums) {
    let largestNumber = 0;
    let secondLargestNumber = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = nums[i];
            continue;
        }
        
        if ((nums[i] > secondLargestNumber) && (nums[i] < largestNumber)) {
            secondLargestNumber = nums[i];
        }
    }
    
    return secondLargestNumber;
}
