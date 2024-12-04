// The if statement
if (/* condition */) {
    /* code block with instructions that will
    run if the above condition is true */
}
  



//if statement and strings

const language = "English";

if (language === "English") {
  console.log("Welcome!");
}


// if statements and numbers
const age = 30;

if (age >= 18) {
  console.log("You are allowed to join!");
}


// if statement and undefined
let favoriteNum;

if (favoriteNum !== undefined) {  // Check if favoriteNumber has been initialized
  console.log("favoriteNum * 2 = ", favoriteNum * 2);
}


// if statement and null

const user = null;

if (user === null) {
  console.log("The value of a variable user is null");
}


// if statement and booleans

const isStudent = true;

if (isStudent === true) {
  console.log("Welcome to Ironhack!");
}

if (isStudent === false) {
  console.log("Hope to see you at Ironhack soon!");
}


// Boolean values - true shorthand expression

const finishedPrework = true;

if (finishedPrework === true) {
  console.log("Ready to start the course!");
}

// The above example can be written using the shorthand syntax like:

const finishedPrework = true;

if (finishedPrework) {  // same as: finishedPrework === true 
  console.log("Ready to start the course!");
}


// Boolean values - false shorthand expression

const isConnected = false;

if (isConnected === false) {
  console.log("Connection lost!");
}


// We can rewrite the above using the shorthand expression and the NOT ! operator, like:

const isConnected = false;

if (!isConnected) {  //  same as: isConnected === false
 console.log("Connection lost!");
}

// Nested if statements

/* Suppose we need to create a more complex conditional logic. 
In that case, we can combine more than one if statement and create 
a nested if statement. Example: */

let isStudent = true;
let hardWork = 9;

if (isStudent) {
  console.log('Welcome to Ironhack!');

  if (hardWork > 8) {
    console.log('You will be a great developer!');
  }
}


//if and logical operators

//  Using NOT in an if statement
let doesCode = true;
if (!doesCode) {
  console.log("Ironhack is the right place to be!");
}

//  Using AND in an if statement
let lovesParty = true;
if (doesCode && lovesParty){
  console.log("You seem to be an Ironhacker!");
}

//  Using OR in an if statement
let framework = "Express"
if (framework === "Express" || framework === "React"){
  console.log("You chose one of the main JS frameworks!");
}


// The else statement

if (/* condition */) {
    /* code block with instructions that will
    run if the above condition is true */
  } else {
    /* code block with instructions that will
    run when the `if` condition is false */
}

 
//example1

if (/* condition */) {
    /* code block with instructions that will
    run if the above condition is true */
  } else {
    /* code block with instructions that will
    run when the `if` condition is false */
}

//example2
const isAdmin = true;
const passwordCorrect = true;

if (isAdmin && passwordCorrect) {
  console.log("Access granted!");
} else {
  console.log("Unauthorized");
}

//example3

const isStudent = true;
const hardWork = 9;

if (isStudent) {
  console.log("Welcome to Ironhack!");

  if (hardWork > 8) {
    console.log("You will be a great developer!");
  } else {
    console.log("You need to work harder... ");
  }
}

// The else if statements

if (/* condition1 */) {
    // If the "condition1" is true only this block will run
  
} else if (/* condition2 */) {
  /* This block runs if "condition2" is true
  and the previous conditions are false. */
  
} else if (/* condition3 */) {
  /* This block runs if "condition3" is true
  and the previous conditions are false. */
  
} else {
  // This block runs only if all above turns out to be false
}

//example1
let hardWork = 7;

if (hardWork > 8) {
  console.log("You will be a great developer!");
} 
else if (hardWork > 6) {
  console.log("You are improving, keep going!");
} 
else if (hardWork >= 5) {
  console.log("You need to work harder... ");
} 
else {
  console.log("You're slacking. I saw you fall asleep on the desk.");
}

//example2

/*  Once a condition of an if or else if statement is true,
 it will execute the statements inside {} and skip all the
 other remaining conditions.*/

let hardWork = 9;

if (hardWork > 8) {
  console.log("You will be a great developer!");
} 
else if (hardWork > 6) {
  console.log("You are improving, keep going!");
}
else if (hardWork >= 5) {
  console.log("You need to work harder... ");
}
else {
  console.log("You're slacking. I saw you fall asleep on the desk.");
}

//example3

let hungry = false;
let isBreakfastTime = false;
let isLunchTime = false;
let isDinnerTime = true;

// If you're hungry, and it's breakfast time
if (hungry && isBreakfastTime) {
  console.log("Let's have breakfast!");
}
// If you're hungry, and it's lunch time
else if (hungry && isLunchTime){
  console.log("Time to go to lunch!");
} 
// If it is dinner time, and you're not hungry
else if (isDinnerTime && !hungry){
  console.log("Let's go for drinks, I'm not very hungry!");
// If it's breakfast time, or I'm in the mood for breakfast
} else {
  console.log("Guess I'll have a coffee break.");
}

//  The switch statement (The switch statement is an alternative to the if/else/else if blocks.)

switch (/* expression */) {
    case value1:
      // statements are executed when the result of an expression matches the value1
      break;
    case value2:
      // statements are executed when the result of an expression matches the value2
      break;
    ...
    case valueN:
      // statements are executed when the result of an expression matches valueN
      break;
    default:
      // statements are executed when none of the above cases match the value of the expression
      break;
}
  
//example1
let pet = "dog";

if (pet === "cat") {
    console.log("I will break a lot of things but hey, I'm adorable ... ");
}
else if (pet === "dog") {
  console.log("I will be a bit annoying but I'm your best friend ... ");
}

else if (pet === "hamster") {
  console.log("I will be impossible to find but I'm reeeeaaaally cute ... ")
}
else {
  console.log("I'm a special pet!");  
}
/*
The above conditional statement could be simplified using the switch statement. 
Here’s how the above conditional statement looks once converted to a switch statement: 
*/

let pet = "dog";

switch (pet) {
  case "cat":
    console.log("I will break a lot of things but hey, I'm adorable ... ");
    break;
  case "dog":
    console.log("I will be a bit annoying but I'm your best friend ... ");
    break;
  case "hamster":
    console.log("I will be impossible to find but I'm reeeeaaaally cute ... ");
    break;
  default:
    console.log("I'm a special pet!");
    break;
}

// Multiple case clauses

switch (expression) {
    case value1:
    case value2:
      // statements are executed when the result of an expression matches the value1 or value2
      break;
    case value3:
    case value4:
    case value5:
      // statements are executed when the result of the expression matches value3, value4 or value5.
      break;
    default:
      // statements are executed when none of the values match the value of the expression
      break;
}

//example1
let fruit = "blueberry";

if (fruit === "pear" || fruit === "apple") {
  type = "pome";
} else if (fruit === "peach" || fruit === "coconut") {
  type = "drupe";
} else if (fruit === "strawberry" || fruit === "blueberry" || fruit === "blackberry") {
  type = "berry";
} else {
  type = "other";
}

console.log(`${fruit} is type of: ${type}.`);

  

//example2
let fruit = 'apple';
let type = '';

switch (fruit) {
  case 'apple':
  case 'pear':
    type = 'pome';
    break;
  case 'peach':
  case 'coconut':
    type = 'drupe';
    break;
  case 'strawberry':
  case 'blueberry':
  case 'blackberry':
    type = 'berry';
    break;
  default:
    type = 'other';
    break;
}

console.log(`${fruit} is type of: ${type}.`);



//The break statement

/* The break statement interrupts a block execution 
(in switch blocks and loop blocks) and continues with the execution of the program. */

//example without break

let pet = "dog";

switch (pet) {
  case "cat":
    console.log("I will break a lot of things but hey, I'm adorable ... ");
  case "dog":
    console.log("I will be a bit annoying but I'm your best friend ... ");
  case "hamster":
    console.log("I will be impossible to find but I'm reeeeaaaally cute ... ");
  default:
    console.log("I'm a special pet!");
}

// Extra resourses

// Expressions vs. Statements in JS - video (5 min) - https://www.youtube.com/watch?v=WVyCrI1cHi8
// MDN - Making decisions in your code — https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
// MDN - Switch - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch