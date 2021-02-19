​
// Task 3 - Arrow Functions

// Complete the function in the editor. It has one parameter: an array, nums. It must iterate through the array performing one of the following actions on each element:

//   1.  If the element is even, multiply the element by 2.

//   2.  If the element is odd, multiply the element by 3.

// The function must then return the modified array.


function modifyArray(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        newArr.push(nums[i] * 2);
      } else {
        newArr.push(nums[i] * 3);
      }
    }
    return newArr;
  }