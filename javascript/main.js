/*
function even_or_odd(number) {
    return number%2==0?"Even":"Odd"
}
*/
/*
function squareSum(numbers){
  let count=0;
  for(let i = 0;i<numbers.length;i++){
    count +=i ** 2
  }
  return count
}
*/
/*
function lovefun    c(flower1, flower2){
    if(flower1 %2==0&&flower2%2==1||flower2 %2==0&&flower1 %2 ==1){
      return true
    }else{
      return false
    }
  }
*/
/*
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == "needle") {
      return "found the needle at position " + i;
    }
  }
}
*/
/*
function findAverage(array) {
  let a = 0;
  if (array.length != 0) {
    for (let i = 0; i < array.length; i++) {
      a += array[i];
    }

    return a / array.length;
  } else {
    return 0;
  }
}
*/
/*
var countSheep = function (num){
  let string = ""
  for(let i =0;i<num;i++){
    string+=(i+1)+" sheep..."
  }
  return string
}
*/
/*
function findSmallestInt(args) {
  return args
    .sort(function (a, b) {
      return a - b;
    })
    .slice(0, 1);
}
*/
/*
function opposite(number) {
  return -number
}
*/
/*
function sumMix(x){
let count =0;
  for(let i = 0;i<x.length;i++){
    count+= +x[i]
  }
  return count
}
*/
/*
function points(games) {
  let count =0;
  for(let i =0;i<games.length;i++){
    if(games[i][0] > games[i][2]){
      count+=3
    }else if(games[i][0] == games[i][2]){
      count+=1
    }else{
      count+=0
    }
  }
  return count
}
*/
/*

function squareDigits(num){
  let array = num.toString().split("")
  let b= 0
  let a = "";
  for(let i = 0;i<array.length;i++){
   b=  array[i]**2
    a+=b
  }
  return +a
}
*/
/*
function getCount(str) {
  let count = 0;
  let array = str.split("");
  for(let i = 0;i<array.length;i++){
    if(array[i] == "a"||array[i] == "e"||array[i] == "i"||array[i] == "o"||array[i] == "u"){
      count+=1
    }
  }
  return count
}
*/
/*
function makeNegative(num) {
  return num<0?num:-num
}
*/
/*
// Growth Of A population
function nbYear(p0, percent, aug, p) {
  let a = p0;
  let b = 0;
  let result = 0;
  for (let i = 1; ; i++) {
    b = a + a * (percent / 100) + aug;
    a = b;
    if (a >= p) {
      result = i;
      break;
    }
  }
  return result;
}

console.log(nbYear(1500, 5, 100, 5000));
*/
/*
function maps(x){
  return x.map(function(ele){return ele + ele})
}
*/
/*
function litres(time) {
  return Math.floor(0.5*time)
}
*/
/*
function oddOrEven(array) {
  if (array.length == 0) {
    array.push(0);
  }
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count += array[i];
  }
  return count % 2 == 0 ? "even" : "odd";
}
*/
/*
function solution(str){
  return str.split('').reverse().join('');  
}
*/
/*
function XO(str) {
  let array = str.split("")
  let countX = 0;
  let countO = 0;
  for(let i = 0;i<array.length;i++){
        if(array[i].toLowerCase()=="o"){
          countO+=1
        }else if(array[i].toLowerCase()=="x"){
          countX+=1
        }
    }
  return countX == countO ?true:false
}

*/
/*
function paperwork(n, m) {
  return n>0&&m>0?n*m:0
}
*/
/*
var isSquare = function (n) {
  let count = 0;
  if (n < 0) {
    return false;
  } else {
    for (let i = 0; i <= n; i++) {
      if (i ** 2 == n) {
        count = 1;
        break;
      }
    }
  }
  return count == 1 ? true : false;
};
*/
/*
function friend(friends){
  return friends.filter(n => n.length === 4)
}
*/

/*
function isIsogram(str) {
  let array = Array.from(new Set(str.toLowerCase().split(""))).join("");

  return array == str.toLowerCase() ? true : false;
}

function isIsogram(str) {
  let array = str.toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        count = 1;
      }
    }
  }
  return count == 1 ? false : true;
}
*/
/*
function abbrevName(name) {
  let array = name.toUpperCase().split(" ");

  return array[0][0] + "." + array[1][0];
}
*/
/*
function reverseWords(str) {
  let array = str.split(" ").map(function (ele) {
    return ele.split("").reverse().join("");
  });
  return array.join(" ");
}
*/
/*
function DNAtoRNA(dna) {
  let array  = dna.split("");
  let result = []
  for(let i = 0;i<array.length;i++){
    if(array[i] == "U"){
      result.push("T")
  }else if(array[i] == "T"){
      result.push("U")
    }else{
      result.push(array[i])
    }
  }
  return result.join("")
}
*/
/*
function removeChar(str) {
  return "" + str.substring(1, str.length - 1);
}

console.log(removeChar("Ahmned"));
*/
/*
String.prototype.toJadenCase = function () {
  let array = Array.from(this).join("").split(" ")
  return array.map(function(ele){
    return ele[0].toUpperCase()+ele.slice(1)
  }).join(" ")
};
*/
/*
function findNextSquare(sq) {
  let result = 0;
  if(sq>=0){
    for(let i = 0;i<=sq;i++){
      if(i**2 == sq){
        result = i;
        break;
      }else{
        result+=0
      }
    }
    return result !=0?(result+1)**2:-1
  }
  
}
*/
/*
function accum(s) {
  let array = s.split("");
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i].repeat(i + 1));
  }
  return result
    .join(" ")
    .toLowerCase()
    .split(" ")
    .map(function (ele) {
      return ele[0].toUpperCase() + ele.slice(1);
    })
    .join("-");
}
*/
/*
function printerError(s) {
  let array = s.split("").sort().reverse().join("");
  return `${array.slice(0, array.indexOf("m")).length}/${array.length}`;
}
*/
/*
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}
*/
/*
function duplicateEncode(word) {
  let array = word.toLowerCase().split("");
  let check = false;
  for (let i = 1; i < array.length; i++) {
    if (array[0] == array[i]) {
      check = true;
      break;
    }
  }
  if (check == true) {
    let result = [")"];
    /////////////////////
    for (let i = 1; i < array.length; i++) {
      if (array[i] == array[i - 1] && result[i - 1] == ")") {
        result.push(")");
      } else if (array[i] == array[i - 1] && result[i - 1] == "(") {
        result.push("(");
      } else if (array[i] != array[i - 1] && result[i - 1] == "(") {
        result.push(")");
      } else if (array[i] != array[i - 1] && result[i - 1] == ")") {
        result.push("(");
      }
    }
    return result.join("");
  } else if (check == false) {
    let result = ["("];

    for (let i = 1; i < array.length; i++) {
      if (array[i] == array[i - 1] && result[i - 1] == "(") {
        result.push("(");
      } else if (array[i] == array[i - 1] && result[i - 1] == ")") {
        result.push(")");
      } else if (array[i] != array[i - 1] && result[i - 1] == ")") {
        result.push("(");
      } else if (array[i] != array[i - 1] && result[i - 1] == "(") {
        result.push(")");
      }
    }

    return result.join("");
  }
}

console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success")); // )())())
*/
/*
function comp(array1, array2) {
  if (array1.length == 0 || array2.length == 0) {
    return true;
  } else {
    let a = array1.sort(function (a, b) {
      return a - b;
    });
    let b = array2.sort(function (a, b) {
      return a - b;
    });

    let check = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] ** 2 == b[i]) {
        check += 1;
      } else {
        check = 0;
        break;
      }
    }
    return check != 0 ? true : false;
  }
}

function comp(array1, array2){
  let result = false;
 
  if ( array1 && array2 ) {
    if (array1.length === 0 && array2.length === 0){
      result = true;
    } else {
      const squareRoots = array2.map(num => Math.sqrt(num));
      array1.sort((a, b) => a-b);
      squareRoots.sort((a, b) => a-b);
      for (let i=0; i<squareRoots.length; i++) {
        if (array1.indexOf(squareRoots[i]) 
            !== array1.indexOf(array1[i])) {
          result = false;
          break;
        }
        result = true;
      }
    }
  }
  return result;
}
*/
/*
var number = function(busStops){
  let count = 0;
  for(let i =0;i<busStops.length;i++){
    count+=busStops[i][0]
    count-=busStops[i][1]
  }
  return count
}
*/
/*
function pigIt(str) {
  let array = str.split(" ");
  let arr1 = array.map((ele) => ele.slice(1));
  let arr2 = array.map(function (ele) {
    if (ele != "!") {
      return ele.charAt(0) + "ay";
    } else {
      return ele;
    }
  });
  let result = [];

  for (let i = 0; i < arr2.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result.join(" ");
}
console.log(pigIt("Pig latin is cool !"));
*/
/*
function duplicateEncode(word) {
  let array = word.toLowerCase().split("");
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let check = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        check = 1;
        break;
      } else {
        check = 0;
      }
    }
    if (check == 1) {
      result.push(")");
    } else {
      result.push("(");
    }
  }
  return result;
}
console.log(duplicateEncode("Success"));
*/
/*
function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}
*/
/*
function zeros(n) {
  let number = 1;
  let result = "";
  if (n == 0 || n == 1) {
    return 0;
  } else {
    for (let i = 1; i <= n; i++) {
      number *= i;
    }
    result += number;
    let array = result.split("").reverse();
    for (let i = 0; i < array.length; i++) {
      if (array[i] != 0) {
        return array.slice(0, i).length;
      }
    }
  }
}

*/
/*
function rgb(r, g, b) {
  let array = [r, g, b];
  let result = [];
  let deci = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  for (let i = 0; i < 3; i++) {
    if (array[i] < 0) {
      result.push("00");
    } else if (array[i] >= 255) {
      result.push("FF");
    } else {
      let a = Math.floor(array[i] / 16); // 13
      let b = (array[i] / 16 - Math.floor(array[i] / 16)) * 16; // 0.75

      let indexA = hexa[a];
      let indexB = hexa[b];
      result.push([indexA, indexB].join(""));
    }
  }

  return result.join("");
}
*/
/*
function isPangram(string) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let count = 1;
  let text = string.toLowerCase();
  let array = Array.from(new Set(text.match(/[a-z]/gi))).sort();
  for (let i = 0; i < alphabet.length; i++) {
    if (array[i] != alphabet[i]) {
      count = 0;
      break;
    }
  }
  return count == 1 ? true : false;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
*/
/*
function alphabetPosition(text) {
  let alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  return text
    .toLowerCase()
    .match(/[a-z]/gi)
    .map(function (ele) {
      return alphabet[ele];
    })
    .join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
*/
/*
function expandedForm(num) {
  let array = num.toString().split("");
  let result = [];
  for (let i = 0; i < array.length; i++)
    if (array[i] != 0) {
      result.push(`${array[i] + "0".repeat(array.slice(i + 1).length)}`);
    }
  return result.join(" + ");
}
*/
