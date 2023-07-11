const friends = [11,22,33,44,55,66,77,88,99,111];
const partial = friends.splice(1, 4);
 console.log(partial);
const friends1 = [11,22,33,44,55,66,77,88,99,111];
const addition = friends1.splice(3, 6, 15, 20, 30);
 console.log(addition);
 console.log(friends1);