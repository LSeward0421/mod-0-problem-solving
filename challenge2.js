// The overall goal is to write a method that will loop though an array of strings containing upper and lowercase letterrs and print out all strings in lowercase.
// create an array of strings with upper and lower case letter
// write for statement setting counter variable to 0, a condition that will run the length of the array by increments of 1
// utilize string method toLowerCase() in console log to print out each string in all lowercase letters

var names = ["Lauren", "saM", "pHil", "KellI"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i].toLowerCase());
};
// The final solution should print out: "lauren", "sam", "phil", "kelli"
