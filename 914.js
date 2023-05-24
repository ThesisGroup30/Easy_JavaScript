/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    // Count the occurrences of each number in the deck
    const counts = {};
    for (const num of deck) {
        counts[num] = (counts[num] || 0) + 1;
    }
    
    // Find the greatest common divisor of all the counts
    let gcd = counts[deck[0]];
    for (const count of Object.values(counts)) {
        gcd = findGCD(gcd, count);
        if (gcd === 1) {
            return false;
        }
    }
    
    return true;
};

// Helper function to find the greatest common divisor of two numbers
function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
}
