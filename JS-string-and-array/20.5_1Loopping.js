//Looping Technique
//1. for loop
//2. while loop
//3. do while----> ignore
//4. for of----> array loop korar jonne
//5. for in--->object loop korar jonne

//**********for of loop
const friends = ["elon", "bill", "rahim", "karim"];
for (const friend of friends) {
  console.log(friend);
}
//********** for loop
for (let i = 0; i < 10; i++) {
  //(let i = 0; i<friends.length; i++)
  console.log(i);
  console.log(friends[i]);
}

const numbers = [5, 10, 15, 20, 55, 23, 26, 25, 8, 5, 54, 54];
for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
}
//******While Loop */
let i = 0;
while (i < friends.length) {
  console.log(friends[i]);
  i++;
}
//-----------------//
let n = 0;
while (n < numbers.length) {
  console.log(numbers[i]);
  n++;
}
