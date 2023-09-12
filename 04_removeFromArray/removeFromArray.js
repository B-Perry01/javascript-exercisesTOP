const removeFromArray = function(arr) {
    for (i=1; i < arguments.length; i++) {
        if (arr.includes(arguments[i]))
            arr = arr.filter(ele => ele !== arguments[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
