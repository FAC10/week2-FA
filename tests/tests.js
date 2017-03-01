test('create working getTime function', function(assert) {
  var result = getTime();
  assert.ok(result);
});

test('getTime function to get the time', (assert) => {
  var result = getTime();
  var date = new Date();
  var expected = date.getTime();
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

test('add current time in a readable format to DOM with currentTime function', (assert) => {
  var result = currentTime(10000, 10500);
  var expected = '00:00:50';
  assert.equal(result, expected);
});
