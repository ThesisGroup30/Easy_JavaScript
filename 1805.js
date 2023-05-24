var numDifferentIntegers = function(word) {
    // Replace all non-digits with spaces
    let cleaned = word.replace(/\D/g, ' ');
    
    // Split the string into an array of integers
    let nums = cleaned.split(' ')
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(s => parseInt(s));
    
    // Use a set to count the number of distinct integers
    let distinct = new Set(nums);
    return distinct.size;
};
