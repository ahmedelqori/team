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
/*
var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};
*/
/* // 20. Valid Parentheses

var isValid = function (s) {
  if (s.length % 2 != 0) {
    return 0;
  }

  let list = {
    "(": 1,
    "[": 2,
    "{": 3,
    ")": -1,
    "]": -2,
    "}": -3,
  };

  let array = s.split("").map((ele) => list[ele]);

  let result = [...array];
  let nothing = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (result[j] == -result[j + 1] && result[j] > result[j + 1]) {
        result.splice(j, 2);
      }
    }
  }
  return result.length == 0 ? true : false;
};
console.log(isValid(")(}{]["));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("()[}"));

*/
/*
var lengthOfLastWord = function (s) {
  return s
    .split(" ")
    .filter((ele) => ele != "")
    .reverse()[0].length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
*/
/*
var plusOne = function (digits) {
  let num = BigInt(digits.map(Number).join("")) + BigInt(1);
  return num.toString().split("");
};

console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]));
*/
/*
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) >= 0) {
    return nums.indexOf(target);
  } else {
    nums.push(target);
    return nums.sort().indexOf(target);
  }
};
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 7));
*/
