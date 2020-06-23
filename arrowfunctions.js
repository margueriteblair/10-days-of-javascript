function modifyArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%2 === 0) {
            nums[i] *= 2;
        } else nums[i]*=3;
    }
    return nums;
    
}

function modifyArray2(nums) {
    for (let i = 0; i < nums.length; i++) {
        (nums[i]%2 === 0) ? nums[i] *= 2 : nums[i]*=3;   
    }
    return nums;