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
