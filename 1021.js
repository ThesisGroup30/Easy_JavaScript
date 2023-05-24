/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = '';
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' && count++ > 0) {
            result += '(';
        }
        if (s[i] === ')' && --count > 0) {
            result += ')';
        }
    }
    return result;
};
