const sumAll = function(numStart, numEnd) {
    
    if (numStart < 0 || 
        numEnd < 0 || 
        typeof numStart !== 'number' || 
        typeof numEnd !== 'number' ) return 'ERROR';
 
    let sum = 0;
    if (numStart > numEnd) {
        const temp = numStart;
        numStart = numEnd;
        numEnd = temp;
    } 
    while (numStart <= numEnd) {
        sum += numStart;
        numStart++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
