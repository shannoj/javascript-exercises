const reverseString = function(string) {
    const reverseArray = [];
    for (var i = 0; i < string.length; i++) {
        reverseArray.unshift(string.charAt(i));
    }

    let reversedString = reverseArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
