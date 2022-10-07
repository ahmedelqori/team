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
