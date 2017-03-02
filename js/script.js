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
  if (!stopwatch.hasOwnProperty('stopTime')) {
    stopwatch.stopTime = getTime();
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
  time -= mins;
  var hrs = (time % 216000000) / 60;

  var centiseconds = twoDigitPadding(Math.floor(ms / 10));
  var seconds = twoDigitPadding(secs / 1000);
  var minutes = twoDigitPadding(mins / 60000);

  return minutes + ':' + seconds + '.' + centiseconds;
}

function twoDigitPadding(number) {
  return ('00' + number).substr(-2, 2);
}

function setTime(start, end) {
  if (start > end) { throw 'start time is after end time'; }
  return toReadableTime(timeDifference(start, end));
}

//test below

function replaceDomElementContent(text, element) {
  element.innerText = text;
}

function get(element) {
  if (element) {
    return document.getElementById(element);
  }
 this.replaceElement = function (text) {
  element.innerText = text;
};
}


get('start').addEventListener('click', startTiming);
get('stop').addEventListener('click', stopTiming);

setInterval(function () {
  if(stopwatch.hasOwnProperty('startTime')) {
    if(stopwatch.hasOwnProperty('stopTime')) {
      replaceDomElementContent(
        setTime(stopwatch.startTime, stopwatch.stopTime),
        get('display'));
    } else {
      replaceDomElementContent(setTime(stopwatch.startTime, getTime()), get('display'));
    }
  }
}, 10);
