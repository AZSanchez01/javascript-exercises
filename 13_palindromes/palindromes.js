const palindromes = function (word) {
//split and filter non-letters
    let filteredWord = word.toLowerCase().split('').filter((elem) => {
        return (elem.charCodeAt(0) >= 97 && elem.charCodeAt(0) <= 122)
                || (elem.charCodeAt(0) >= 48 && elem.charCodeAt(0) <= 57);
    }).join('');

    let reverse = filteredWord.split('').reverse().join('');
    return filteredWord == reverse;
};

// Do not edit below this line
module.exports = palindromes;
