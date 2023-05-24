/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return gcd(min, max);
};

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
