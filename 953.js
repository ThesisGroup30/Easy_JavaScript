/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    // Create a dictionary to store the order of each letter
    let dict = {};
    for (let i = 0; i < order.length; i++) {
        dict[order[i]] = i;
    }
    
    // Compare adjacent words
    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i+1];
        
        // Check each character of the two words
        let j = 0;
        while (j < word1.length && j < word2.length) {
            let char1 = word1[j];
            let char2 = word2[j];
            if (dict[char1] < dict[char2]) {
                // The order is correct, move to the next character
                break;
            } else if (dict[char1] > dict[char2]) {
                // The order is incorrect, return false
                return false;
            } else {
                // The two characters are the same, move to the next character
                j++;
            }
        }
        // If one word is a prefix of the other, the longer word comes later
        if (j == word2.length && j < word1.length) {
            return false;
        }
    }
    // All words are in order, return true
    return true;
};
