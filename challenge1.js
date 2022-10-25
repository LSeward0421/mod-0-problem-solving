// Given an array of strings, return only the strings that have exactly 4 characters.
// The overall goal is to write a method that would loop through an array of strings and print out any strings that have exactly 4 characters. 
// Create an array of strings where one or two contain only 4 characters
// create for method that sets counter variable to 0 and runs at an increment of one for the length of the array
// write if statement that utilizing array[i].length to compare if equal to 4 characters
// console log the strimgs that are considered true to the if stament

var flowers = ["Daisy", "Lily", "Sunflower"];
for ( var i = 0; i < flowers.length; i++) {
  if (flowers[i].length === 4) {
    console.log(flowers[i]);
  }
};

//  The final solution should result in a return of the string "Lily". 