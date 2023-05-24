/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    // Sort the nums array in non-decreasing order
    nums.sort((a, b) => a - b);
    
    const n = nums.length;
    const m = queries.length;
    const answer = new Array(m).fill(0);
    
    for (let i = 0; i < m; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += nums[j];
            if (sum > queries[i]) {
                // If the sum of elements is greater than the query,
                // we exclude the last added element and break the loop.
                sum -= nums[j];
                break;
            }
        }
        answer[i] = j;
    }
    
    return answer;
};
