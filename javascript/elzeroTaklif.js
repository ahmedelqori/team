/* ------------------ Operators ----------- */

// $$$$$$$$$ --I-- $$$$$$$$$ //

// console.log(10 * 20 * (15 % 3) * 190 * 10 * 400); // 0

// $$$$$$$$$ --II-- $$$$$$$$$ //

/*
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * --num); // 6

// Soultion Three
console.log((typeof num).length); // 6

// Soultion Four
console.log((typeof ("" + num)).length); // 6

// Solution Five
console.log((typeof !num).length - --num); // 6

// Solution Six
console.log(++num * num + num); // 6
*/

// $$$$$$$$$ --III-- $$$$$$$$$ //

/*

let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(num.length * +num); // 20

// Solution Three
console.log((+num / num.length) * (num.length + num.length)); // 20

// Solution Four
console.log((+num / num.length) ** num.length - +num / num.length); // 20

*/

// $$$$$$$$$ --IV-- $$$$$$$$$ //

/*
let points = 10;
let a = "" + points;
points = ++points + a.length;

console.log(points); // 13

points = --points - a.length * a.length;

console.log(points); // 8;
*/
