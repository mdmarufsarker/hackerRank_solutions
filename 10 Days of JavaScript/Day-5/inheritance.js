// Task 1 - Inheritance

// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

//  1.   Add an area method to Rectangle's prototype.

//  2.   Create a Square class that satisfies the following:

//         It is a subclass of Rectangle.

//         It contains a constructor and no other methods.

//         It can use the Rectangle class' area method to print the area of a Square object.



Rectangle.prototype.area = function() {
    return this.w * this.h;
  };
  
  class Square extends Rectangle {
    constructor(s) {
      super(s);
      this.h = s;
      this.w = s;
    }
  }