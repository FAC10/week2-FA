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

Write tests for every component of the stopwatch.

1. getTime - create working getTime function
1. stopwatch object - create stopwatch time storage object
1. startTime - function to add a start tie to the stopwatch object
1. timeDifference - add a function to check the difference in time between a start time and another
1. toReadableTime - create a function that changes milliseconds to readable time and resets to zero every hour.
1. readableTimeToTextNode - return a textnode with a readable time string
1. pushToDisplay - add to display 
