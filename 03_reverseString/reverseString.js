const reverseString = function(word) {
    if (word.length < 1) return word
    let ans = ''
    for (let i = word.length - 1; i >= 0; i--){
        ans += word[i]
    }

    return ans
};

// Do not edit below this line
module.exports = reverseString;
