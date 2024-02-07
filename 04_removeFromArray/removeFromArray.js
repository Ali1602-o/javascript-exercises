const removeFromArray = function(myArray, ...elements) {
    let newArray = [];
    for(let i = 0; i < myArray.length; i++) {
        if (!elements.includes(myArray[i])) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
    