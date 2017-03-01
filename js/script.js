function getTime() {
  return Date.now();
}

function startTiming() {
  stopwatch.startTime = getTime();
}

var stopwatch = {};

function timeDifference(start,current) {
  return current-start;
}
