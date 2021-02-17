// Task 3 - Let and Const

//  1.   Declare a constant variable, PI, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).

//  2.   Read a number, r, denoting the radius of a circle from stdin.

//  3.   Use PI  and r to calculate the area and perimeter of a circle having radius r .

//  4.   Print area as the first line of output and print perimeter as the second line of output.



function main() {
    let r = readLine();
    const PI = Math.PI;
    console.log(PI * r * r);
    console.log(2 * PI * r);
}