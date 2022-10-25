// The overall goal is to print out each string in the assigned array, in alphabetical order, with a statement that uses string interpolation. 
//  Create an array of strings that have names of places you want to go, but not in alphabetical order.
//  Create a for statement with counter variable set to 0 that has the condition set to run through array length at increments of plus one
// Within the for statement, utilize the sort() method on the array which will automatically sort alphabetically
// Console log a full sentence statement that utilizes the array[i] within the interpolation.  


var destinations = ["Mexico City", "Seattle", "Montreal", "Tokyo"];
  for (var i = 0; i < destinations.length; i++) {
    destinations.sort();
    console.log(`The next place I want to visit is ${destinations[i]}!!`);
  };

  // The final resolution should print each string in alphabetical order within the logged sentence statement. 