/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // Initialize the two largest and two smallest numbers
    let max1 = 0, max2 = 0, min1 = Number.MAX_VALUE, min2 = Number.MAX_VALUE;
    // Traverse through the array
    for (let num of nums) {
        // Update the largest numbers
        if (num >= max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
        // Update the smallest numbers
        if (num <= min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }
    // Return the maximum product
    return Math.max((max1 - 1) * (max2 - 1), (min1 - 1) * (min2 - 1));
};
