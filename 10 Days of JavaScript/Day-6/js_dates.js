// Task 2 - JavaScript Dates

// Given a date string, dateString , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.


// Solution

// getUTCDay() method returns the day of the week in the specified date according to universal time, where 0 represents Sunday.



function getDayName(dateString) {
    let dayName;
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    dayName = days[new Date(dateString).getUTCDay()];
    return dayName;
  }