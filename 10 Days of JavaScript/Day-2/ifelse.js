// Task 1 - Conditional Statements: If-Else

// Complete the getGrade(score) function in the editor. It has one parameter: an integer, score , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her grade according to the following rules:

//     If 25 < score <= 30, then grade = A

//     If 20 < score <= 25, then grade = B

//     If 15 < score <= 20, then grade = C

//     If 10 < score <= 15, then grade = D

//     If 5 < score <= 10, then grade = E

//     If 0 < score <= 5, then grade = F



function getGrade(score) {
    if (score > 25) {
      return "A";
    } else if (score > 20) {
      return "B";
    } else if (score > 20) {
      return "B";
    } else if (score > 15) {
      return "C";
    } else if (score > 10) {
      return "D";
    } else if (score > 5) {
      return "E";
    } else {
      return "F";
    }
  }