/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    // Convert the number to a string so we can manipulate individual digits
    let strNum = num.toString();
    // Find the index of the first 6 in the number, if it exists
    let sixIndex = strNum.indexOf('6');
    if (sixIndex !== -1) {
        // If a 6 was found, replace it with a 9
        strNum = strNum.substr(0, sixIndex) + '9' + strNum.substr(sixIndex + 1);
    }
    // Convert the modified string back to a number and return it
    return parseInt(strNum);
};
