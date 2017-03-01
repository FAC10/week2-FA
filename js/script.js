function getTime() {
  var date = new Date();
  return date.getTime();
}

function startTiming() {
  stopwatch.startTime = getTime();
}

var stopwatch = {};
