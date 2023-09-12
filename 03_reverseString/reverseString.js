const reverseString = function(str) {
//Pop last letter off string. get substr of string that has all but last letter and use that substring to then repeat above
    word="";
    const len = str.length;
    for(i = 1; i <= len; i++) {
        word+=str[len-i];
        str=str.slice(0,len-i);
    }
    return word;
};

// Do not edit below this line
module.exports = reverseString;
