const fibonacci = function(index) {
    index = parseInt(index);
    if (index < 0) return "OOPS";
        
    if (index === 0) return 0;
    if (index === 1) return 1;

    let arr = [0,1];
    for (i = 2; i <= index; i++) {
        temp = arr[i-1] + arr[i-2];
        arr.push(temp);
    }
    return arr.pop();
};

// Do not edit below this line
module.exports = fibonacci;
