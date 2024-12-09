function makePastaAlfredo () { // declare a function
  
    // Select the ingredients
    const pasta = "Spaghetti";
    const sauce = "Alfredo";
    const cheese = "Parmesan";
    
    // Mix the ingredients
    const meal = `${pasta} ${sauce} with ${cheese} cheese.`;
  
    // Serve
    console.log("Served: ", meal);
  }
  
  
  // Call the function (run code inside of the function) 3 times.
  makePastaAlfredo();
  makePastaAlfredo();
  makePastaAlfredo();
  



function sayHello () {
    console.log("Hello!");
    console.log("Welcome to Ironhack!");
  }
  


//A parameter - is a placeholder for the value the function is expecting. Parameters are set during the function declaration.

//An argument - a value given to the function when invoked. Arguments are passed to the function during the invocation.

//Syntax

// Function declaration
function doSomething (/* parameters */) {
    // code to execute
  }
  
  
  // Function invocation
  doSomething(/* arguments */);



// Example 1 - using a single parameter

function sayHelloEn() {
    console.log('Hello!');
  }
  
  function sayHelloFr() {
    console.log('Bonjour!');
  }
  
  function sayHelloEs() {
    console.log('Hola!');
  }
  
  sayHelloEn(); // => Hello!
  sayHelloFr(); // => Bonjour!
  sayHelloEs(); // => Hola!
  

  // Function declaration with a parameter
function sayHello (language) {
    if (language === "en") {
      console.log("Hello!");
    }
    else if (language === "fr") {
      console.log("Bonjour!");
    }
    else if (language === "es") {
      console.log("Hola!");
    }

}

// Function invocation with an argument
sayHello("en"); // => Hallo!
sayHello("fr"); // => Bonjour!
sayHello("es"); // => Hola!


// Example 2 - using multiple parameters

// Function declaration with multiple parameters
function makePasta (pasta, sauce, cheese) {

    const meal = `${pasta} ${sauce} with ${cheese} cheese.`;
  
    console.log("Served: ", meal);
  }
  
  
  // Function invocation with arguments
  makePasta("Fettuccine", "Alfredo",  "Parmesan");
  makePasta("Spaghetti", "Bolognese", "Parmesan");
  makePasta("Torellini", "Carbonara", "Pecorino");


  
  //Example 3 - additional arguments

  // Function declaration with multiple parameters
function makePasta (pasta, sauce, cheese) {

    const meal = `${pasta} ${sauce} with ${cheese} cheese.`;
  
    console.log("Served: ", meal);
  }
  
  // Invoking a function with extra arguments:  ↓ ↓        ↓↓
  makePasta("Ravioli", "Pesto",  "Parmesan", "Ketchup", "Cheddar");
  
  //In JavaScript, additional arguments (not specified as function’s parameters) passed during the function’s invocation get ignored.




  //Example 4 - missing arguments
  function makeSandwich (ingredient1, ingredient2) {
    const sandwich = `${ingredient1} & ${ingredient2} sandwich`;
    
    console.log(sandwich);
  }
  
  // Invoking a function with all the required arguments:
  makeSandwich("Tofu", "Avocado"); // ==> Tofu & Avocado sandwich
  
  // Invoking a function with missing arguments:
  makeSandwich("Egg"); // ==> Egg & undefined sandwich
  makeSandwich();      // ==> undefined & undefined sandwich

  /* Function **parameters are **placeholder variables that store argument values provided when the function is invoked.
If an expected argument is not provided during the invocation, the value is set to undefined. */



//Return Values

/* The return keyword stops the function’s execution and returns the provided value.
The value returned from the function becomes available in the place where the function was invoked.*/

//Example 1 - return value from a function 

function sum (num1, num2) {
    return num1 + num2;
  }
  
  // The function invocations below will return the result value
  sum(4, 5);
  sum(11.4, 11.4);
  

  function sum (num1, num2) {
    return num1 + num2;
  }
  
  // Store the value returned from the function in a variable:
  const result1 = sum(4, 5);
  const result2 = sum(11.4, 11.4);
  
  // Once the returned value is saved in a variable
  // we can start using it in the rest of the program
  console.log("result1", result1);
  console.log("result2", result2);
  

// Example 2 - return and the function execution

function multiply (a, b) {
    console.log("Before the return");
    
    return a * b;
    
    console.log("After the return");
  }
  
  const total = multiply(10, 5);
  



  //Example 3 - returning stored values

  function getFullName (firstName, lastName) {
    // Store the value in a variable
    const fullName = firstName + " " + lastName;
  
    // Return the value stored in the variable
    return fullName;
  }
  
  /* Storing a value in a variable before returning it has its benefits. 
  Using a variable, we give a meaningful name to the value and make the code easier to understand. */



//Example 4 - forgetting the return 

function divide (a, b) {
  a / b;  // missing a return keyword
}

const divisionResult = divide(100, 4);

  /* if the return keyword is omitted
  function by default returns undefined */
  console.log(divisionResult); // ==> undefined



//Naming functions

/*
There are a few rules, considered best practices, that you should follow when naming functions:

Function names should always begin with a lowercase letter. Examples:
lowerCase :white_check_mark:
sayHello :white_check_mark:
LowerCase :x:
SayHello :x:
Always name your functions using the camelCase notation. Examples:
addTwoNumbers
sayHello
makePasta
Always name your functions starting with a verb that describes its actions, like doSomething. Examples:
sumNumbers
sendMessage
countPassengers
Do not use special characters like - or _ when naming your functions. Examples:
my-function :x:
my_function :x: */

// MDN Functions Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// MDN Return - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
// Functions Cheatsheet - Codecademy - If you want to learn more about functions. - https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions/cheatsheet
// Functions chapter - Eloquent JavaScript - http://eloquentjavascript.net/1st_edition/chapter3.html
// return in JavaScript - https://my.ironhack.com/cohorts/6682a7aaa4ba1f002b638cf4/lms/courses/course-v1:IRONHACK+WDPREWORK60+MASTER/modules/ironhack-course-chapter_2/units/ironhack-course-chapter_2-sequential_3-vertical#:~:text=MDN%20Functions%20Reference,return%20in%20JavaScript


