// Ternary ---> Three parts
// Ternary Structure
// ?   :
// condition  ?   do something when true  :  do something when false

// const age = 12;
// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("Ghumai Thako");
// }

// simple ternary
// age >= 18 ? console.log("you can vote") : console.log("Ghumai thako");

let price = 500;
// const isLeader = false;
// if (isLeader === true) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(price);

// *********By Ternary*********

// price = isLeader === true ? 0 : price + 100;

// optional: semi advance ternary

if (isLeader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = price + 100;
  }
}

// Feel free to ignore this one

price = isLeader === true ? (price > 1000 ? pri  ce / 2 : 0) : price + 1000;
