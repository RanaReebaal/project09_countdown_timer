"use strict";
exports.__esModule = true;
// Set the date we're counting down to!!!!!!!!!!!!
var countDownDate = new Date("Jan 27, 2023 12:00:00").getTime();
// Updating count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    // distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result ...
    console.log("".concat(days, "days ").concat(hours, "hours ").concat(minutes, "minutes and ").concat(seconds, "seconds remaining..."));
    // If the count down is over, show them... 
    if (distance < 0) {
        clearInterval(x);
        console.log("Your time is now");
    }
}, 1000);
