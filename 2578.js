/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
  // Convert the number to a string
  const numStr = num.toString();

  // Count the number of occurrences of each digit
  const counts = new Array(10).fill(0);
  for (let i = 0; i < numStr.length; i++) {
    counts[parseInt(numStr[i])] += 1;
  }

  // Construct the two numbers by iterating through the digits
  let num1 = "";
  let num2 = "";
  for (let i = 9; i >= 0; i--) {
    for (let j = 0; j < counts[i]; j++) {
      if (num1.length == num2.length) {
        num1 += i.toString();
      } else {
        num2 += i.toString();
      }
    }
  }

  // Return the sum of the two numbers
  return parseInt(num1) + parseInt(num2);
};
