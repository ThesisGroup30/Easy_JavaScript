/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;
    let dup = -1, missing = -1;
    
    for(let i = 0; i < n; i++) {
        let idx = Math.abs(nums[i]) - 1;
        if(nums[idx] < 0) {
            dup = Math.abs(nums[i]);
        } else {
            nums[idx] *= -1;
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(nums[i] > 0) {
            missing = i + 1;
            break;
        }
    }
    
    return [dup, missing];
};
