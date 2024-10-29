const reverseString = function(string = '') {

        let reverseArr = [];

        for (let i = 0; i < string.length; i++) {
            reverseArr[i] = string.charAt(string.length - i - 1)
        }
        return reverseArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
