// Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).



function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }