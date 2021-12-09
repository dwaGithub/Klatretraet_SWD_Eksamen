var range = document.getElementById('date_range');
var offset = 0;
var today = new Date();
var dayOfWeekOffset = today.getDay();


function getWeek(offset) {
    offset = offset || 0; // if the function did not supply a new offset, the offset is 0
    var firstDay = new Date();
    firstDay.setDate(firstDay.getDate() - dayOfWeekOffset + (offset * 7));
    // .setDate() sets the date (1-31) of the current month.
    // The beginning of the week is:
    //    today's date (firstDay.getDate())
    //    minus the day of week offset to get us back to sunday (dayOfWeekOffset)
    //    plus the number of days we need to offset for future / past weeks (offset * 7)

    var lastDay = new Date(firstDay);
    lastDay.setDate(lastDay.getDate() + 6);
    // the last day is the first day plus 6

    console.log(makeDateString(firstDay), makeDateString(lastDay));
    range.innerHTML = 'week of ' + makeDateString(firstDay) + ' - ' + makeDateString(lastDay);
}


function makeDateString(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var y = date.getFullYear();

    var dateString = mm + '/'+ dd + '/'+ y;
    return dateString;

}

function backward() {
    offset = offset - 1;
    getWeek(offset);
}

function forward() {
    offset = offset + 1;
    getWeek(offset);
}

window.onload = function() {
    getWeek();
}


    cell1.innerHTML = "x";
    cell2.innerHTML = "Medarbejder navn";
    cell3.innerHTML = "x";
    cell4.innerHTML = "x";
    cell5.innerHTML = "x";
    cell6.innerHTML = "x";
    cell7.innerHTML = "x";
    cell8.innerHTML = "x";
    cell9.innerHTML = "x";


/*
 function myFunctionn() {
    var row = document.getElementById("myRow");
    var x = row.insertCell(-1);
    x.innerHTML = "Ny tid";
}*/