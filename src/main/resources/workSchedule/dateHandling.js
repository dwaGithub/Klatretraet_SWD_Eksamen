var range = document.getElementById('date_range');
var offset = 0;
var today = new Date();
var dayOfWeekOffset = today.getDay();
var id;


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
    range.innerHTML = 'Uge: ' + makeDateString(firstDay) + ' - ' + makeDateString(lastDay);
}


function makeDateString(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var y = date.getFullYear();

    var dateString = dd + '/'+ mm + '/'+ y;
    return dateString;

}

function backward() {
    offset = offset - 1;
    getWeek(offset);
    var firstDay = new Date();
    firstDay.setDate(firstDay.getDate() - dayOfWeekOffset + (offset * 7));
    var id_div = makeDateString(firstDay)
    let div = document.getElementsByClassName("tbody");
    div.id = "tbody_div_" + id_div;
    console.log(div.id)
}

function forward() {
    offset = offset + 1;
    getWeek(offset);
    var firstDay = new Date();
    firstDay.setDate(firstDay.getDate() - dayOfWeekOffset + (offset * 7));
    var id_div = makeDateString(firstDay)
    let div = document.getElementsByClassName("tbody");
    div.id = "tbody_div_" + id_div;
    console.log(div.id)
}

window.onload = function() {
    getWeek();
}