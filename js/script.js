function getTime() {
  return Date.now();
}

function startTiming() { //TEST THIS
  if (!stopwatch.hasOwnProperty('startTime')) {
    stopwatch.startTime = getTime();
  }
  if (stopwatch.hasOwnProperty('stopTime')) {
    stopwatch.startTime = getTime() - timeDifference(stopwatch.startTime, stopwatch.stopTime);
  }
  delete stopwatch.stopTime; // ADD TESTING
}

function stopTiming() { //TEST THIS
  if (!stopwatch.hasOwnProperty('stopTime') && stopwatch.hasOwnProperty('startTime')) {
    stopwatch.stopTime = getTime();
  }
}

 function resetTime () {
  if (stopwatch.hasOwnProperty('stopTime')) {
    delete stopwatch.stopTime;
    delete stopwatch.startTime;
  }
 }

var stopwatch = {};

function timeDifference(start,current) {
  return current - start;
}

function toReadableTime(givenTime) {
  var time = givenTime;

  var ms = time % 1000;
  time -= ms;
  var secs = time % 60000;
  time -= secs;
  var mins = time % 3600000;

  var centiseconds = twoDigitPadding(Math.floor(ms / 10));
  var seconds = twoDigitPadding(secs / 1000);
  var minutes = twoDigitPadding(mins / 60000);

  return minutes + ':' + seconds + '.' + centiseconds;
}

function getHours(ms) {
    return Math.floor((ms % 216000000)/3600000);
}

function twoDigitPadding(number) {
  return ('00' + number).substr(-2, 2);
}

function setTime(start, end) {
  if (start > end) { throw 'start time is after end time'; }
  return toReadableTime(timeDifference(start, end));
}

function setHours (start, end) {
  return getHours(timeDifference(start, end));
}

function replaceDomElementContent(text, element) {
  element.innerText = text;
}

function get(element) {
  if (element) {
    return document.getElementById(element);
  }
}

//Test below here
function addTimeToDom() {
  if (stopwatch.hasOwnProperty('startTime')) {
    if(stopwatch.hasOwnProperty('stopTime')) {
      if (setHours(stopwatch.startTime, stopwatch.stopTime)) {
        replaceDomElementContent(setHours(stopwatch.startTime, stopwatch.stopTime) + ":", get('hourdisplay'));
      }
      replaceDomElementContent(
        setTime(stopwatch.startTime, stopwatch.stopTime),
        get('display'));
    } else {
      if (setHours(stopwatch.startTime, getTime())) {
        replaceDomElementContent(setHours(stopwatch.startTime, getTime()) + ":", get('hourdisplay'));
      }
      replaceDomElementContent(setTime(stopwatch.startTime, getTime()), get('display'));
    }
  } else {
    replaceDomElementContent(setTime(0, 0), get('display'));
  }
}

get('start').addEventListener('click', startTiming);
get('stop').addEventListener('click', stopTiming);
get('reset').addEventListener('click', resetTime);

setInterval(addTimeToDom, 10);
