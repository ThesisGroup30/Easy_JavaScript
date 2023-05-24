/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const n = names.length;
    const sortedIndices = Array.from({length: n}, (_, i) => i).sort((a, b) => heights[b] - heights[a]);
    const sortedNames = [];
    for (const i of sortedIndices) {
        sortedNames.push(names[i]);
    }
    return sortedNames;
};
