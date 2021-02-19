// Task 3 - Classes

// Create a Polygon class that has the following properties:

//     A constructor that takes an array of integer values describing the lengths of the polygon's sides.

//     A perimeter() method that returns the polygon's perimeter.

// Locked code in the editor tests the Polygon constructor and the perimeter method.

function Polygon(shape) {
    this.type = shape;
    this.perimeter = getPerimeter;
  }
  
  function getPerimeter() {
    return this.type.reduce((a, b) => a + b);
  }