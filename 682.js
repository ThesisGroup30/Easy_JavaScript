/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  const stack = [];
  let sum = 0;
  
  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    if (op === "C") {
      const prevScore = stack.pop();
      sum -= prevScore;
    } else if (op === "D") {
      const prevScore = stack[stack.length - 1];
      const newScore = prevScore * 2;
      stack.push(newScore);
      sum += newScore;
    } else if (op === "+") {
      const prevScore1 = stack[stack.length - 2];
      const prevScore2 = stack[stack.length - 1];
      const newScore = prevScore1 + prevScore2;
      stack.push(newScore);
      sum += newScore;
    } else {
      const newScore = parseInt(op, 10);
      stack.push(newScore);
      sum += newScore;
    }
  }
  
  return sum;
};
