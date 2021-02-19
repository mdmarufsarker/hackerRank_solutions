// Task 1 - Arrays

// Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums, of n numbers. The function must find and return the second largest number in nums.


function getSecondLargest(nums) {
    let firstLargestNum = 0;
    let secondLargestNum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > firstLargestNum) {
        secondLargestNum = firstLargestNum;
        firstLargestNum = nums[i];
      }
      if (nums[i] > secondLargestNum && nums[i] < firstLargestNum) {
        secondLargestNum = nums[i];
      }
    }
    return secondLargestNum;
  }