const removeFromArray = function() {
    let array = arguments[0];
    let newArray = [];
    for (var i = 0; i < array.length; i++){
        for (var j = 1; j < arguments.length; j++){
            if (array[i] === arguments[j]){
                array.splice(i, 1);
                i = -1;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
