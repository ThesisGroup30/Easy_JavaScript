/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // sort the array in non-descending order
    nums.sort(function(a, b) { return a - b; });
    
    // initialize the sum variable to zero
    var sum = 0;
    
    // loop through the array and add the smaller of each pair to the sum
    for (var i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    
    // return the sum
    return sum;
};