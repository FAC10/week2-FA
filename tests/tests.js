test('getTime - create working getTime function', function(assert) {
  var result = getTime();
  assert.ok(result, 'getTime function exists');

  result = getTime();
  expected = Date.now();
  assert.equal(result, expected, 'gets the current time');
});

test('stopwatch - create stopwatch object', (assert) => {
  var result = stopwatch;
  assert.ok(result === Object(result) && !Array.isArray(result));
});

test('startTiming - add start time to stopwatch object', (assert) => {
  startTiming();
  var result = stopwatch;
  assert.ok(result.hasOwnProperty('startTime'));
});

test('timeDifference - calculate difference between two given milliseconds', (assert) => {
  var result = timeDifference(10000, 10500);
  var expected = 500;
  assert.equal(result,expected);
});

module('toReadableTime');
test('converts milliseconds to centiseconds', (assert) => {
  var result = toReadableTime(500);
  var expected = '00:00.50';
  assert.equal(result, expected);
});

test('converts milliseconds to both seconds and centiseconds', (assert) => {
  var result = toReadableTime(10500);
  var expected = '00:10.50';
  assert.equal(result, expected);
});

test('converts milliseconds to minutes + above', (assert) => {
  var result = toReadableTime(61500);
  var expected = '01:01.50';
  assert.equal(result, expected);
});

test('check values under 1 cs and 1 cs', (assert) => {
  var result = toReadableTime(1);
  var expected = '00:00.00';
  assert.equal(result, expected,'1 ms');
  result = toReadableTime(9);
  expected = '00:00.00';
  assert.equal(result, expected,'9 ms');
  result = toReadableTime(10);
  expected = '00:00.01';
  assert.equal(result, expected,'10 ms or 1 cs');
});

test('check value topping and above the max value of the stopwatch', (assert) => {
  var result = toReadableTime(3599999);
  var expected = '59:59.99';
  assert.equal(result,expected,'59m 59s and 99cs');
  result = toReadableTime(3600000);
  expected = '00:00.00';
  assert.equal(result,expected,'1 hour');
});

module('hasStart and hasStop');
test('check if obj has a startTime prop', (assert) => {
  test = {startTime:10};
  assert.ok(hasStart(test), 'arg obj has the prop');
});
test('check if obj has a startTime prop', (assert) => {
  test = {};
  assert.ok(!hasStart(test), 'arg obj doesnt have the prop');
});
test('check if obj has a stopTime prop', (assert) => {
  test = {stopTime:10};
  assert.ok(hasStop(test), 'arg obj has the prop');
});
test('check if obj has a stopTime prop', (assert) => {
  test = {};
  assert.ok(!hasStop(test), 'arg obj doesnt have the prop');
});


module('setTime');
test('check that setTime correctly inteprets the difference between two time values and outputs a human readable result', (assert) => {
  var result = setTime(100, 600);
  var expected = '00:00.50';
  assert.equal(result,expected,'100 and 600 milliseconds as inputs');
  assert.throws(() => setTime(600, 100), (err) => err.toString() === 'start time is after end time', 'start time is after end time' );
});

module('get');
test('check that get function gets an element', (assert) => {
  var result = get('display');
  var expected = document.getElementById('display');
  assert.equal(result,expected, 'get is getting the display');
});

module('replaceDomElementContent');
test('check that get function gets an element', (assert) => {
  var element = document.getElementById('test');
  replaceDomElementContent('test passed', element);
  var result = element.innerText;
  var expected = element.innerText;
  assert.equal(result,expected, 'replace is correctly replacing the content in a test element');
});

module('stopTiming');
test('check stopTiming adds a stopTime variable to stopwatch ONLY when the timer has been started', (assert) => {
  stopwatch = { };
  stopTiming();
  assert.ok(!stopwatch.hasOwnProperty('stopTime'));
});

test('when startTime exists stopTiming adds a stop time', (assert) => {
  stopwatch = { startTime:123 };
  stopTiming();
  assert.ok(stopwatch.hasOwnProperty('stopTime'));
});

module('resetTime');
test('resetTime correctly resets the stopwatch object', (assert) => {
  stopwatch = { startTime:123, stopTime:12345, lapTime:12345 };
  resetTime();
  assert.ok(!stopwatch.hasOwnProperty('startTime'));
  assert.ok(!stopwatch.hasOwnProperty('stopTime'));
});

test('resetTime correctly resets the display', (assert) => {
  document.getElementById('display').innerText = '11:11.11'; //Add a value to the display to check against
  stopwatch.stopTime = 1100; //resetTime requires a stopTime
  resetTime();
  addTimeToDom();
  var result = '00:00.00';
  assert.ok(result === document.getElementById('display').innerText);
});

module('getHours');
test('returns hours if they exist', (assert) => {
  var result = getHours(3600000);
  var expected = '1';
  assert.equal(result, expected);
});

module('setHours');
test('Checks if the difference between two times is above an hour', (assert) => {
  var result = setHours(3600000, 7200000); // two hours
  var expected = '1';
  assert.equal(result, expected);
});

module('addTimeToDom');
test('manipulate the dom to show time', (assert) => {
  stopwatch = { startTime:0, stopTime:500 };
  addTimeToDom();
  var result = document.getElementById('display').innerText;
  var expected = '00:00.50';
  assert.equal(result, expected);
});
test('manipulate the dom to show hours', (assert) => {
  stopwatch = { startTime:0, stopTime:3600000 };
  addTimeToDom();
  var result = document.getElementById('hourdisplay').innerText;
  var expected = '1:';
  assert.equal(result, expected);
});
test('manipulate the dom to show without stop time', (assert) => {
  stopwatch = { startTime:getTime() - 3600000 };
  addTimeToDom();
  var result = document.getElementById('hourdisplay').innerText;
  var expected = '1:';
  assert.equal(result, expected);
});

module('createLapElement');
test('createLapElement makes a human readable lap element', (assert) => {
  var result = createLapElement(0, 500, 'testing').innerText;
  var expected = document.getElementById('laptest').innerText;
  assert.equal(result, expected);
});

module('addLap');
test('adds a createLapElement to the Dom if no stop time', (assert) => {
  stopwatch = { startTime:500 };
  addLap();
  assert.ok(document.getElementsByClassName('lap'));
});

module('reset laps on reset');
test('adds a createLapElement to the Dom if no stop time', (assert) => {
  stopwatch = { startTime:500 };
  addLap();
  resetTime();
  assert.ok(!document.getElementsByClassName('lap'));
});
