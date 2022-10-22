export{}
// Set the date we're counting down to!!!!!!!!!!!!
var countDownDate = new Date("Jan 27, 2023 12:00:00").getTime();
// Updating count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now:number = new Date().getTime();
    
  // distance between now and the count down date
  var distance:number = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days:number = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours:number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes:number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds:number = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result ...
  console.log(`${days}days ${hours}hours ${minutes}minutes and ${seconds}seconds remaining...`)  
  // If the count down is over, show them... 
  if (distance < 0) {
    clearInterval(x);
    console.log("Your time is now");
  }
}, 1000);