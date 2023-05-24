/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
  const itemMap = new Map();
  
  // Loop through items1 and add them to the itemMap
  for (const [value, weight] of items1) {
    if (itemMap.has(value)) {
      itemMap.set(value, itemMap.get(value) + weight);
    } else {
      itemMap.set(value, weight);
    }
  }
  
  // Loop through items2 and add them to the itemMap
  for (const [value, weight] of items2) {
    if (itemMap.has(value)) {
      itemMap.set(value, itemMap.get(value) + weight);
    } else {
      itemMap.set(value, weight);
    }
  }
  
  // Convert the itemMap to a 2D array and sort it by value
  const ret = Array.from(itemMap, ([value, weight]) => [value, weight]);
  ret.sort((a, b) => a[0] - b[0]);
  
  return ret;
};
