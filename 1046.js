/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        // Find the two heaviest stones
        const max1 = Math.max(...stones);
        const index1 = stones.indexOf(max1);
        stones.splice(index1, 1);
        
        const max2 = Math.max(...stones);
        const index2 = stones.indexOf(max2);
        stones.splice(index2, 1);
        
        // Smash the stones together and add the resulting stone to the array
        const diff = max1 - max2;
        if (diff > 0) {
            stones.push(diff);
        }
    }
    
    return stones.length === 0 ? 0 : stones[0];
};