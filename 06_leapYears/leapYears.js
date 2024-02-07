const leapYears = function(year) {


    // the direct solution :)
    // if (year % 4 === 0) {
    //     if (year % 100 === 0) {
    //         if (year % 400 === 0) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     } else {
    //         return true;
    //     }
    // } else {
    //     return false;
    // }

    // this solution basically short version of (the condition above but not easy to understand from the first look)
    return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0); 
};

// Do not edit below this line
module.exports = leapYears;
