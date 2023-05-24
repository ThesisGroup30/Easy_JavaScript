var missingNumber = function(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // sum of 0 to n
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
};
