//**slice */
const address = "andorkilla";
const part = address.slice(2, 5);
console.log(part);

//***split */
const sentence = "i am a good and hard worker person";
// console.log(sentence.split(''))
console.log(sentence.split("a"));

// const friendsStr = "rahim,karim,kabil,fahim,sahim,dalim,sahin,horin";
// const friends = friendsStr.split(",");
// console.log(friends);

// const realFriend = ["rahim,karim,kabil,fahim,sahim,dalim,sahin,horin"];
// console.log(realFriend);

// const friends = "rahim,karim,kabil,fahim,sahim,dalim,sahin,horin,salim";
// const groupFriend = friends.split(",");
// const groupFriend = friends.split(",");
// console.log(groupFriend);

const friendsStr = "rahim,karim,kabil,fahim,sahim,dalim,sahin,horin";
const realFriend = friendsStr.split(",");
console.log(realFriend.join(""));
console.log(realFriend.join("|"));
console.log(realFriend.join("-"));
