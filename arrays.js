const animalsArray = ['dog', 'cat', 'snake'];

console.log(animalsArray); // ==> ['dog', 'cat', 'snake']


//Array length

const animalsArray = ['dog', 'cat', 'snake'];

console.log(animalsArray.length); // ==> 3

const animalsArray = ['dog', 'cat', 'snake'];
// index:               0      1       2

console.log( animalsArray[0] ); // ==> 'dog'
console.log( animalsArray[1] ); // ==> 'cat'
console.log( animalsArray[2] ); // ==> 'snake'


//any accessed element can be saved to a variable

const animalsArray = ['dog', 'cat', 'snake'];
// index:               0      1       2

console.log( animalsArray[0] ); // ==> 'dog'
console.log( animalsArray[1] ); // ==> 'cat'
console.log( animalsArray[2] ); // ==> 'snake'



const studentsArray = ['Mat', 'Anna'];
// index:                0       1 

const firstStudent  = studentsArray[0];
const secondStudent = studentsArray[1];

// Accessing elements that don't exist:
const thirdStudent  = studentsArray[2];
const fourthStudent = studentsArray[3];

console.log(firstStudent);  // ==> 'Mat'
console.log(secondStudent); // ==> 'Anna'
console.log(thirdStudent);  // ==> undefined
console.log(fourthStudent); // ==> undefined



//Get the last array element

const fruit = ['apple', 'cherry', 'mango', 'orange'];
// index:         0        1         2         3

console.log(fruit.length);  // ==> 4
console.log(fruit.length - 1);  // ==> 3

const lastElement = fruit[ fruit.length - 1 ]; // 4 - 1 ==> 3

console.log(lastElement); // ==> 'orange'



//Adding and Removing Elements
//Adding elements at the end: .push()

const students = ['Bob', 'Chloe', 'David'];
console.log("Before:", students);
// ==>  Before:  ['Bob', 'Chloe', 'David']

students.push('Anna');
console.log("After:", students);
// ==> After: ['Bob', 'Chloe', 'David', 'Anna']


// Add elements at the beginning: .unshift()
const students = ['Bob', 'Chloe', 'David'];
console.log("Before:", students);
// ==>  Before:  ['Bob', 'Chloe', 'David']

students.unshift('Anna');
console.log("After:", students);
// ==> After: ['Anna', 'Bob', 'Chloe', 'David']

//Remove element from the end: .pop()
const students = ['Bob', 'Chloe', 'David'];
console.log("Before:", students);
// ==>  Before:  ['Bob', 'Chloe', 'David']

students.pop();
console.log("After:", students);
// ==> After: ['Bob', 'Chloe']


//Remove element from the beginning: .shift()
const students = ['Bob', 'Chloe', 'David'];
console.log("Before:", students);
// ==>  Before:  ['Bob', 'Chloe', 'David']

students.shift();
console.log("After:", students);
// ==> After: ['Chloe', 'David']



//Storing elements removed with .pop() and .shift()
const students = ['Bob', 'Chloe', 'David'];

// Remove the first element and store it in a variable
const first = students.shift();
// Remove the last element and store it in a variable
const last = students.pop();

console.log(students); // => ['Chloe']
console.log(first); // => 'Bob'
console.log(last); // => 'David'




//Removing and adding elements in any position: .splice()

const students = ['Amy', 'Bob', 'Chloe', 'Dan', 'Eva'];
console.log("Original:", students); 
// => Original: ['Amy', 'Bob', 'Chloe', 'Dan', 'Eva']


// Start at the first element and remove 1 element going forward
students.splice(0, 1);
console.log("After removing 1:", students);
// => After removing 1: ['Bob', 'Chloe', 'Dan', 'Eva']


// Start at the third element and remove 2 elements going forward
students.splice(2, 2);
console.log("After removing 2:", students);
// => After removing 1: ['Bob', 'Chloe']


// Start at the second element (don't remove any element) and add the string
// provided as the third argument
students.splice(1, 0, "Sarah");
console.log("After adding:", students);
// => After adding: ['Bob', 'Sarah', 'Chloe']





//Arrays and Loops - Looping through an array
//Using the for loop with arrays
// let i = 0 declarate inside the loop.


const students = ['Amy', 'Bob', 'Chloe', 'Dan', 'Eva'];

for (let i = 0; i < students.length; i++){
  const element = students[i];
  console.log(`students[${i}]`, element);
}



//Using the while loop with arrays
// Using a while loop to iterate through an array is similar to using a for loop, the difference is because the "let i = 0"
// is declarate outside of the while loop.

const students = ['Amy', 'Bob', 'Chloe', 'Dan', 'Eva'];

let i = 0; // outside of loop
while (i < students.length){
  const element = students[i];
  console.log(`students[${i}]`, element);
  
  i++;
}


//Preventing Infinite Loops
//while and for loops require a valid stop condition that will eventually end the loop execution.

//Arrays as arguments

//example1

// Declare a function that takes one parameter "array":
function printElements (array){
  
    for (let i = 0; i< array.length; i++){
      const element = array[i];
      console.log(`Element: ${element}`);
    }
    
  }
  
  
  // Invoke the function and pass an array as the argument:
  printElements( ["hello", "kitty", 3, false] ); 
  // Element: hello
  // Element: kitty
  // Element: 3
  // Element: false
  
  
  // Invoke the function again passing another array as the argument:
  const mixedArray = ["dog", 4, "miami", true];
  printElements( mixedArray );
  // Element: dog
  // Element: 4
  // Element: miami
  // Element: true
  


  //Example2
  



  // Initial code
const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

// loop that goes from 0 to the length of the prices array
for (let i = 0; i < prices.length; i++) {
  // in every iteration, the value of the current array element will be added to sum
  sum += prices[i];
}

// Math.round() is a Number method used to round numbers to it's closest integer value
sum = Math.round(sum);


console.log(sum);
