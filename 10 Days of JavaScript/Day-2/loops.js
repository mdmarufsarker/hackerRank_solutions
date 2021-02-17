// Task 3 - Loops

// Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

//     First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.

//     Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.



function vowelsAndConsonants(s) {
    const vowels = ["a", "e", "i", "o", "u"];
    const string = s.split("");
    let vowelArr = [];
    let consonantArr = [];
    for (let i = 0; i < string.length; i++) {
      vowels.includes(string[i])
        ? vowelArr.push(string[i])
        : consonantArr.push(string[i]);
    }
    for (let i = 0; i < vowelArr.length; i++) {
      console.log(vowelArr[i]);
    }
    for (let i = 0; i < consonantArr.length; i++) {
      console.log(consonantArr[i]);
    }
  }