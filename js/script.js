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

function toReadabeTime(time) {
  return '00:00:' + (time / 10);
}
