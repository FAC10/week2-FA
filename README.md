# week2-FA Stopwatch (Finn & Antonio)

### User story:

#### As a software developer wanting to accurately predict how long a coding task takes to complete

> I want to time how long I have been working on a task

> So that in the future I know how much time to estimate.

##### Acceptance criteria
* I can press a start button, in order to start a timer
* I can press a stop button, in order to stop the timer at how much time has passed since start
* I can press a reset button, in order to stop the timer and reset the displayed time to 00:00:00
* I can see the timer's current time in hours, seconds, minutes and milliseconds

### How
We tried to stick to TDD as much as possible, so we first wrote tests for every component of the stopwatch, before actually write the code for it.

1. getTime - create working getTime function
1. stopwatch object - create stopwatch time storage object
1. timeDifference - add a function to check the difference in time between given start and end
1. startTiming - function to add a start time to the stopwatch object
1. stopTiming - function to add a stop time to the stopwatch object
1. toReadableTime - create a function that converts milliseconds to readable time.
1. getHours - function to get the hours from the milliseconds value (displayed on a separate object).
1. readableTimeToTextNode - return a textnode with a readable time string
1. pushToDisplay - add to display



### tests

We didn't apply tests to native javascript methods and functions (addEventListener, etc.) - just the connected functions and inputs. This simplified our testing process a bunch because we didn't have to worry about async testing
