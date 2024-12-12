//Array is a data type that allows us to store a collection of elements together in one variable.

//An empty array
const animalsArray = [];

//Array initialized with values
const animalsArray = ['dog', 'cat', 'snake'];

console.log(animalsArray); // ==> ['dog', 'cat', 'snake']


//Array length

const animalsArray = ['dog', 'cat', 'snake'];

console.log(animalsArray.length); // ==> 3

//Accessing Array Elements

const animalsArray = ['dog', 'cat', 'snake'];
// index:               0      1       2

console.log( animalsArray[0] ); // ==> 'dog'
console.log( animalsArray[1] ); // ==> 'cat'
console.log( animalsArray[2] ); // ==> 'snake'



// In the above example, we used console.log to show the value of each element we accessed.



const animalsArray = ['dog', 'cat', 'snake'];
// index:               0      1       2

const firstAnimal  = animalsArray[0];
const secondAnimal = animalsArray[1];
const thirdAnimal  = animalsArray[2];

console.log(firstAnimal);  // ==> 'dog'
console.log(secondAnimal); // ==> 'cat'
console.log(thirdAnimal);  // ==> 'snake'

// Accessing array elements that don’t exist

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

// Get the last array element
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



//Add elements at the beginning: .unshift()
// The array method .unshift() adds a new element (or multiple elements) at the beginning of the specified array.

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




// Arrays and Loops (Looping through an array)

//Using the 'for' loop with arrays

//- The counter should start at 0, like: let i = 0;. This corresponds to the array’s first element index.
//- The end condition should use the array’s length, like: i < array.length. This corresponds to the last element in the array.
//- Use the counter value i to access each array element, like: array[i].

//In the following example, we have a for loop that counts from 0 until the number specified as the array’s .length:


const students = ['Amy', 'Bob', 'Chloe', 'Dan', 'Eva'];

for (let i = 0; i < students.length; i++){
  const element = students[i];
  console.log(`students[${i}]`, element);
}

// students[0] Amy
// students[1] Bob
// students[2] Chloe
// students[3] Dan
// students[4] Eva



// Using the while loop with arrays

//Using a while loop to iterate through an array is similar to using a for loop. Just like with the for loop:

//-The counter should start at 0, like: let i = 0;. This corresponds to the array’s first element index.
//-The end condition should use the array’s length, like: i < array.length. This corresponds to the last element in the array.
//-Use the counter value i to access each array element, like: array[i].

const students = ['Amy', 'Bob', 'Chloe', 'Dan', 'Eva'];

let i = 0;
while (i < students.length){
  const element = students[i];
  console.log(`students[${i}]`, element);
  
  i++;
}

// students[0] Amy
// students[1] Bob
// students[2] Chloe
// students[3] Dan
// students[4] Eva

//Preventing Infinite Loops

//while and for loops require a valid stop condition that will eventually end the loop execution.
//Always check the loop condition and verify that a stop condition exists. Otherwise, you’ll end up creating an infinite loop.



//Arrays as arguments - example1

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



  // Example2

  // Declare a function that takes one parameter "arr"
function getCookies (arr) {
    const filteredArray = [];
    
    for (let i = 0; i< arr.length; i++){
      const element = arr[i];
      
      if (element === "cookie") {
        // If the element is a string "cookie" add it to the new array
        filteredArray.push(element);
      }
    }
    
    // Return the new filtered array after the loop
    return filteredArray;
  }
  
  
  const food = ["salad", "cookie", "fish", "cookie", "soup", "cookie"];
  
  // Invoke the function and pass an array as the argument.
  // Save the returned array to a variable named "result":
  const result = getCookies( food ); 
  
  
  console.log(food); // ==> ['salad', 'cookie', 'fish', 'cookie', 'soup', 'cookie']
  console.log(result); // ==> ['cookie', 'cookie', 'cookie']
  
// Extra resources
// Mozilla Developer Network Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Array pop(), push(), shift() and unshift() methods in JavaScript - https://codesource.io/array-pop-push-shift-and-unshift-methods-in-javascript/