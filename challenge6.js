// The overall goal is to write code that will take a variable containing a string sentence and print out the entire string 
    //  with the first letter of each word capitalized. 
// Create a variable named sentence that contains a string that is a sentence
// Declare another variable that will utilize the sentence variable with the split method applied to convert into array
// Create a for loop that will cycle through the entire length of the second variable and print 
    // each element of the array using the to uppercase method on the first index position and then concatenation of the 
    // remaining substring of the element 
// Console log the statement and apply the join method to the variable to recreate the full sentence string


var sentence = "This particular challenge is interesting!"
var words = sentence.split(' ');
for (var i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase(0) + words[i].substr(1)
}
console.log(words.join(' '));

