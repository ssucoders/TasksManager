export function currentMonth(){
    var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[d.getMonth()]
}
export function localTime(){
    var d = new Date();
    return d.toLocaleTimeString();
}


export function today(){
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dayName = days[d.getDay()]
    var currentDate = d.getDate();

    return currentDate  + ", "+ dayName;
}