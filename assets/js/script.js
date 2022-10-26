var counter = 10;
var countdown = function () {
  console.log(counter);
  counter--;
  if (counter === 0) {
    console.log('blastoff');
    clearInterval(startCountdown);
  }
};
var startCountdown = setInterval(countdown, 1000);
