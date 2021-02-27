// Task

// Complete the code in the editor below. The variables i, d, and s are already declared and initialized for you. You must:

//   1.  Declare 3 variables: one of type int, one of type double, and one of type String.

//   2.  Read 3 lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your 3 variables.

//   3.  Use the + operator to perform the following operations:

//       1.  Print the sum of i plus your int variable on a new line.

//       2. Print the sum of d plus your double variable to a scale of one decimal place on a new line.

//       3. Concatenate s with the string you read as input and print the result on a new line.





// Declare second integer, double, and String variables.
let ii;
let dd;
let ss;

// Read and save an integer, double, and String to your variables.
ii = parseInt(readLine());
dd = parseFloat(readLine());
ss = readLine();

// Print the sum of both integer variables on a new line.
console.log(i + ii);

// Print the sum of the double variables on a new line.
console.log((d + dd).toFixed(1));

// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(s + ss);