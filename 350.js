/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // Create a hash map to count the occurrences of each element in nums1
    const map = new Map();
    for (let i = 0; i < nums1.length; i++) {
        if (map.has(nums1[i])) {
            map.set(nums1[i], map.get(nums1[i]) + 1);
        } else {
            map.set(nums1[i], 1);
        }
    }
    // Iterate over nums2 and check if each element exists in the hash map
    // If it does, add it to the result array and decrement the count in the hash map
    const result = [];
    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i]) && map.get(nums2[i]) > 0) {
            result.push(nums2[i]);
            map.set(nums2[i], map.get(nums2[i]) - 1);
        }
    }
    return result;
};
