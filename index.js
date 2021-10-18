//The function will get a date (by array) and return the Time from that date to now.
const moment = require("moment")

function timeToNow(date){
    return moment(date).toNow(); 
}

function timeFromAToB(date1 , date2) {
    return moment(date1).to(date2);
}

function daysInMonth(date){
    return moment(date).daysInMonth()
}

