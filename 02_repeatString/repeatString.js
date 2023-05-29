const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let x = new Array();
    let y = 0;
    let repeat = ''
    while (y < num) {
        repeat = repeat + string;
        y += 1;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
