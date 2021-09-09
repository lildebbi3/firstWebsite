function oneH() {
  var setTime = timerInput.value;
  console.log("alarm set time " + setTime);

  var countDownDate = new Date(setTime).getTime();

  // Updates the count down every 1 second
  var x = setInterval(function () {
    // today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    console.log("The time till the countdown is down " + distance);

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    //countdown timer finished thing
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Timer Finished!";
      var a = document.getElementById("audio");
      a.play();
      console.log("playing audio");
    }
  }, 1000);
}
function stopAlarm() {
  var a = document.getElementById("audio");
  a.pause();
  document.getElementById("demo").innerHTML = "";
  document.getElementById("timerInput").value = "";
}
