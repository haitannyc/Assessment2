$(document).ready(function() {

// alert("okay");


// start time
$('#timer').click(function() {

    var time = new Date ();
    // zero out the time for seconds

    // var sethour =(time.getHours() - time.getHours());
    // var setmins =(time.getMinutes() - time.getMinutes());
    var setsecs =(time.getSeconds() - time.getSeconds());

    // start adding time to timer
    var starttimer =


   // display output on hmtl
    $('#hour').text(time.getHours());
    $('#minutes').text(time.getMinutes());
    $('#seconds').text(time.getSeconds());




});

// --------bottom of doc ready  
});