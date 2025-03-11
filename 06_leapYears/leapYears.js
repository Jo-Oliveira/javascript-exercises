const leapYears = function(year) {
    let leapYear;
    if(year%4 === 0 && (!(year%100 === 0) || year%400 === 0)) {
       return leapYear = true;
    } else { 
        return leapYear = false;
    }
};

// Do not edit below this line
module.exports = leapYears;
