// # Two Sum

/* 189 ms Too slow


var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i != j) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

*/

// # 9. Palindrome Number

/*
var isPalindrome = function (x) {
  return x.toString().split("").sort();
};
*/

// # Roman to Integer

/*
var romanToInt = function (s) {
  let array = s.split("");
  let result = 0;
  let list = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "I" && (array[i + 1] == "V" || array[i + 1] == "X")) {
      result += list[array[i + 1]] - list[array[i]];
      i++;
    } else if (
      array[i] == "X" &&
      (array[i + 1] == "L" || array[i + 1] == "C")
    ) {
      result += list[array[i + 1]] - list[array[i]];
      i++;
    } else if (
      array[i] == "C" &&
      (array[i + 1] == "D" || array[i + 1] == "M")
    ) {
      result += list[array[i + 1]] - list[array[i]];
      i++;
    } else {
      result += list[array[i]];
    }
  }
  return result;
};
*/
