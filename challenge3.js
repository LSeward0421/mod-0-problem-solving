// The overall goal is to write a method that will loop through an array of strings and print out only the words that start with the letter "t". 
// Create array of strings where one string starts with "t"
// create for statement with counter set to 0 and loops through array at increments of one for the length of the array
// write if statement that utilizes startsWith method to search the array for "t and will console log the string that matches

var candies = ["hot tamales", "skittles", "twix", "kitkat"];
for (var i = 0; i < candies.length; i++) {
    if (candies[i].startsWith("t")) {
    console.log(candies[i])
}
};
// The final solution should result in the print out of "twix".