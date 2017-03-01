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
  var milliseconds = (time%1000);
  var centiseconds = milliseconds/10;
  time -= milliseconds;
  var seconds = (time%60000)/1000 || '00';
  // var minutes = time%3600000;
  // var hours =
  return '00:' + seconds + ':' + centiseconds;
}
