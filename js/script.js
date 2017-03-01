function getTime() {
  return Date.now();
}

function startTiming() {
  stopwatch.startTime = getTime();
}

var stopwatch = {};

function timeDifference(start,current) {
  return current - start;
}

function toReadabeTime(givenTime) {
  var time = givenTime;

  var ms = time % 1000;
  time -= ms;
  var secs = time % 60000;
  time -= secs;
  var mins = time % 3600000;
  time -= mins;
  var hrs = (time % 216000000) / 60;

  var centiseconds = twoDigitPadding(Math.floor(ms / 10));
  var seconds = twoDigitPadding(secs / 1000);
  var minutes = twoDigitPadding(mins / 60000);

  return minutes + ':' + seconds + ':' + centiseconds;
}

function twoDigitPadding(number) {
  return ('00' + number).substr(-2, 2);
}
