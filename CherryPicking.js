const fruit = 'Apple Banana Cherry Mango';


// Your code here:

console.log(fruit.indexOf("Cherry"));
let favoriteFruit = fruit.slice(13, 19);
console.log(favoriteFruit)






Task Instructions
A friend of a friend is addicted to messaging with smiley faces! 😃

Implement the function countSmilies that has one parameter - the message.
The function should return the count of how many times a smiley face :) appears in the message.

Hint: Remember that :) is two characters, so you might need to check both in separate conditions :) .



function countSmilies (message) {
    let count = 0;
    let indexSmilies = 0;
  while ((indexSmilies = message.indexOf(':)', indexSmilies)) !== -1){
    count++;
    indexSmilies += 2;
  }
  return count;
};

