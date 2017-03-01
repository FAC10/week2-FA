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
