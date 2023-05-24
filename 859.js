var buddyStrings = function(s, goal) {
    // Check if s and goal are of equal length
    if (s.length !== goal.length) {
        return false;
    }
    
    // Check if s and goal are already equal
    if (s === goal) {
        // Check if s has any repeating characters
        let seen = new Set();
        for (let i = 0; i < s.length; i++) {
            if (seen.has(s[i])) {
                return true;
            }
            seen.add(s[i]);
        }
        return false;
    }
    
    // Find the indices where s and goal differ
    let diffs = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diffs.push(i);
        }
    }
    
    // Check if there are exactly 2 differences
    if (diffs.length !== 2) {
        return false;
    }
    
    // Check if swapping the characters at the two indices results in goal
    let sArr = s.split('');
    [sArr[diffs[0]], sArr[diffs[1]]] = [sArr[diffs[1]], sArr[diffs[0]]];
    return sArr.join('') === goal;
};
