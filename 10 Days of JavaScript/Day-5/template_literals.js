Task 2 - Template Literals

// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

// Complete the function in the editor so that it does the following:

//  1.   Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula: 


// s= (P+/-root(p^2 - 16*A))/4

// where A is the rectangle's area and P is its perimeter.

// 2. Creates an array consisting of s1 and s2 and sorts it in ascending order.

// 3. Returns the sorted array.


function sides(literals, ...expressions) {
    const [area, perimeter] = expressions; // ES6 destructuring
    const s1 = (perimeter + Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4;
    const s2 = (perimeter - Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4;
    return [s1, s2].sort();
  }