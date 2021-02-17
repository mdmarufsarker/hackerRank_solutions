// Task 2 - Conditional Statements: Switch

// Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

//     If the first character in string s is in the set {a, e, i, o, u}, then return A.

//     If the first character in string s is in the set {b, c, d, f, g}, then return B.

//     If the first character in string s is in the set {h, j, k, l, m}, then return C.

//     If the first character in string s is in the set {n, p, q, r, s, t, v, w, x, y, z}, then return D.

// Hint: You can get the letter at some index i in s using the syntax s[i] or s.charAt(i).



function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
      case "aeiou".includes(s[0]):
        letter = "A";
        break;
      case "bcdefg".includes(s[0]):
        letter = "B";
        break;
      case "hijklm".includes(s[0]):
        letter = "C";
        break;
      case "nopqrstuvwxyz".includes(s[0]):
        letter = "D";
        break;
    }
    return letter;
  }