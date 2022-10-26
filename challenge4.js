// The overall goal is to print out the words of an array that contain "ing".
// First, create an array of strings making some of them end with "ing"
// create a for statement to loop through the array setting the counter at 0 at increments of one for the length of the array
// within the code block, create an if statement that compares the index position of the array
    // using the incudes method referencing "ing"
// console log the array with index position
//  The final solution should print out only the words that contain "ing"

var activities = ["napping", "eating", "dance", "frolicking", "meditate"];

for (var i = 0; i < activities.length; i++) {
    if (activities[i].includes("ing")) {
      console.log(activities[i]);
    }
  }