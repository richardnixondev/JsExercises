/* Boolean can have one of two possible values: true or false. 
These two values can also be represented in binary as 1 (true) 
and 0 (false). */

let powerOn = true; // => boolean
let isRaining = false; // => boolean



/* 

Expression                	Description
exp1 == exp2	Returns true if the expressions have the same value.
exp1 === exp2	Returns true if the expressions have the same value and the same data type of value.
exp1 != exp2	Returns true if the expressions do not have the same value.
exp1 !== exp2	Returns true if the expressions do not have the same value or the same type of value.
exp1 < exp2	    Returns true if the value of exp1 is smaller than the exp2 value.
exp1 > exp2	    Returns true if the value of exp1 is bigger than the exp2 value.
exp1 <= exp2	Returns true if the value of exp1 is smaller or equal than the exp2 value.
exp1 >= exp2	Returns true if the value of exp1 is bigger or equal than the exp2 value.

*/

// ==  Checks if the expression have the same value
console.log(1000 == 1000);  // true
console.log("ab" == "ab");  // true

// ===  Check if the expression have the same value and the data type
console.log(1000 === 1000); // true
console.log("ab" === "ab"); // true

// !=  Check if the expression have different value
console.log(200 != 300);    // true
console.log(100 != 100);    // false
console.log("a" != "b");    // true

// !==  Check if the expressions have different value or different data type
console.log(200 !== 300);   // true
console.log(100 !== 100);   // false
console.log("a" !== "b");   // true

// >  Check if the value is greater than the other
console.log(10 > 1);  // true
console.log(5 > 20);  // false

// <  Check if the value is less than the other
console.log(10 < 1)   // false
console.log(1 < 20);  // true

// >=  Check if the value is greater than or equal
console.log(11 >= 10);  // true
console.log(10 >= 10);  // true
console.log(8 >= 10);   // false

// <=  Check if the value is less than or equal
console.log(5 <= 10);  // true
console.log(10 <= 10);  // true
console.log(15 <= 10);  // false


/* Strict Equality ===

== only checks if the values are the same.
=== checks if the values are the same and it also checks if values are of the same data type.

*/

console.log(2 == '2');  // => true
console.log(2 === '2'); // => false
console.log(2 === 2); // => true

/* When comparing values, using == might introduce unexpected bugs.
 Therefore, it is recommended (and a best practice) to always use === .
  The same goes for !==. */


  //Logical operators: AND, OR, and NOT

  /*


Operator	Usage	            Description
AND (&&)	expr1 && expr2	    Returns true if both operands are true; otherwise, returns false.
OR ( ||)	expr1 || expr2	    Returns true if at least one of the operands is true; if both are false, returns false.
NOT (!)	    !expr	            Returns the opposite boolean state. If the operand is true, returns false. If the operand is false, returns true.

*/

// Logical AND (&&)

// AND
// Returns true only if both operands are true:
console.log(true && true); // => true

// Otherwise it returns false:
console.log(true && false); // => false
console.log(false && true); // => false
console.log(false && false);// => false


// Logical OR (||)

// OR
// Returns true if at least one operand is true:
console.log(false || true); // => true
console.log(true || false); // => true
console.log(true || true);  // => true

// It returns false only if both operands are false:
console.log(false || false);// => false


// Logical NOT (!)

// NOT
// If the value is true it converts it to false:
console.log(!true);  // => false

// If the value is false it converts it to true:
console.log(!false); // => true



//Combining logical operators

const expr1 = true && true;  // true
const expr2 = false || true; // true
const expr3 = !true;         // false


console.log( expr1 && expr2 ); // => ? true

console.log( expr2 || expr3 ); // => ? true

console.log( !expr2 || expr3 ); // => ? false

// All values in JavaScript are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.




const example1 = 0 && true;   // same as: false && true
const example2 = -0 && false; // same as: false && false
const example3 = true && "";  // same as: true && false

const example4 = true || undefined;   // same as: true || false
const example5 = null || false;       // same as: false || false

const example6 = !0;      // same as: !false
const example7 = !"";     // same as: !false


console.log(example1); // => false
console.log(example2); // => false
console.log(example3); // => false

console.log(example4); // => true
console.log(example5); // => false

console.log(example6); // => true
console.log(example7); // => true


if (2) {
    console.log("2 - truthy");
  }
  
  let name = "Ironhack";
  if (name) {
    console.log('"Ironhack" - truthy');
  }
  
  let age;
  if (age) {
    console.log("undefined - falsy")
  }
  
  if (0) {
    console.log("0 - falsy")
  }
  

  // Data type undefined

  /* The primitive data type undefined is a JavaScript 
  value with a special purpose. If a variable is declared, 
  but not initialized JavaScript will automatically set its
   value to undefined. It is treated as falsy when in a boolean context. */

   // Declare a variable, without setting the initial value
let favoriteSong;

// The value is automatically set to "undefined"
console.log(favoriteSong); // ==> undefined


//Data type null

/* The primitive data type null represents the intentional absence of a value. We commonly assign it to a variable to indicate that the variable has been left empty on purpose.

The value null is treated as falsy when used in a boolean context.*/

let user1 = "Alice";
let user2 = "Bob";

// Set the variable to be empty on purpose
user2 = null;

console.log(user1); // ==> Alice
console.log(user2); // ==> null


// Extra resources

// MDN - Logical Operators -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
// Truthy and Falsy: When All is Not Equal in JavaScript - https://www.sitepoint.com/javascript-truthy-falsy/