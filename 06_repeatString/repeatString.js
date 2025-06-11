const repeatString = function(word, num) {
    if(num < 0) return 'ERROR';
    let repWord = '';
    for (let i = 0; i < num; i++)
        repWord += word;
    return repWord;
};

// Do not edit below this line
module.exports = repeatString;
