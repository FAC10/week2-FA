test('create working getTime function', function(assert) {
  var result = getTime();
  assert.ok(result);
});

test('getTime function to get the time', (assert) => {
  var result = getTime();
  var expected = Date.now();
  assert.equal(result, expected);
});

test('create stopwatch object', (assert) => {
  var result = stopwatch;
  assert.ok(result === Object(result) && !Array.isArray(result));
});

test('onclick startTime', (assert) => {
  startTiming();
  var result = stopwatch;
  assert.ok(result.startTime);
});

test('calculate time difference', (assert) => {
  var result = timeDifference(10000, 10500);
  var expected = 500;
  assert.equal(result,expected);
});

test('add current time in a readable format to DOM with currentTime function', (assert) => {
  var result = toReadabeTime(500);
  var expected = '00:00:50';
  assert.equal(result, expected);
});

test('add current time in a readable format to DOM with currentTime function', (assert) => {
  var result = toReadabeTime(10500);
  var expected = '00:10:50';
  assert.equal(result, expected);
});

test('add current time in a readable format to DOM with currentTime function', (assert) => {
  var result = toReadabeTime(61500);
  var expected = '01:01:50';
  assert.equal(result, expected);
});

test('check values under 1 cs and 1 cs', (assert) => {
  var result = toReadabeTime(1);
  var expected = '00:00:00';
  assert.equal(result, expected,'1 ms');
  result = toReadabeTime(9);
  expected = '00:00:00';
  assert.equal(result, expected,'9 ms');
  result = toReadabeTime(10);
  expected = '00:00:01';
  assert.equal(result, expected,'10 ms or 1 cs');
});

test('check value topping and above the max value of the stopwatch', (assert) => {
  var result = toReadabeTime(3599999);
  var expected = '59:59:99';
  assert.equal(result,expected,'59m 59s and 99cs');
  result = toReadabeTime(3600000);
  expected = '00:00:00';
  assert.equal(result,expected,'1 hour');
});
