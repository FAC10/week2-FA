function getTime() { return Date.now(); }
function hasStart (obj) { return obj.hasOwnProperty('startTime'); }
function hasStop (obj) { return obj.hasOwnProperty('stopTime'); }

function startTiming() {
  if (!hasStart(stopwatch)) {
    stopwatch.startTime = getTime();
  }
  if (hasStop(stopwatch)) {
    stopwatch.startTime = getTime() - timeDifference(stopwatch.startTime, stopwatch.stopTime);
  }
  delete stopwatch.stopTime;
}

function stopTiming() {
  if (!hasStop(stopwatch) && hasStart(stopwatch)) {
    stopwatch.stopTime = getTime();
  }
}

 function resetTime () {
  if (hasStop(stopwatch)) {
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
  if (hasStart(stopwatch)) {
    if(hasStop(stopwatch)) {
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

function getLapElement(start, end) {
  var lap = document.createElement('div');
  lap.className += 'lap';
  var lapNumber = document.getElementsByClassName('lap').length + 1;
  var hour = setHours(start, end);
  hour = hour ? hour + ":" : '';
  lap.innerText = "Lap number " + lapNumber + " " + hour + setTime(start, end);
  return lap;
}

function addLap() {
  if (hasStart(stopwatch) && !hasStop(stopwatch)) {
    var lap = getLapElement(stopwatch.startTime, getTime());
    document.getElementById('lapcontainer').appendChild(lap);
  }
}

get('start').addEventListener('click', startTiming);
get('stop').addEventListener('click', stopTiming);
get('reset').addEventListener('click', resetTime);
get('lap').addEventListener('click', addLap);

setInterval(addTimeToDom, 10);
