/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // Create a map to keep track of character frequencies
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    let length = 0;
    let oddFound = false;
    // Iterate through the map and add even frequencies to the length
    // If an odd frequency is found, add the count minus one to the length
    // and set oddFound to true. This ensures only one odd frequency is counted.
    for (const count of map.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            oddFound = true;
        }
    }
    
    // If an odd frequency was found, add one to the length to use as the center of the palindrome
    if (oddFound) {
        length++;
    }
    
    return length;
};
