// Number data type

let age = 44; // integer
const price = 12.99; // floating-point number

console.log(age);  // ==> 44
console.log(price); // ==> 12.99


// simple math operations
console.log(2 + 2); // ==> 4
console.log(4 - 2); // ==> 2
console.log(3 * 2); // ==> 6
console.log(6 / 2); // ==> 3

// Exponentiation

console.log(2 ** 3); // => (2 * 2 * 2) result: 8

console.log(3 ** 3); // ==> (3 * 3 * 3) result: 27


//Modulo

// If A % B is equal to 0, then
// A is a multiple of B
// 8 is indeed a multiple of 2:
console.log(8 % 2 === 0);
// 8 is NOT a multiple of 3:
console.log(8 % 3 === 0);

// 9 is a multiple of 3:
console.log(9 % 3 === 0);
// 9 is NOT a multiple of 2:
console.log(9 % 2 === 0);

// 20 is a multiple of 5:
console.log(20 % 5 === 0);
// 20 is NOT a multiple of 6:
console.log(20 % 6 === 0);



//Check if number is even or odd

// If the remainder of "number % 2" is equal to 0
// the number is EVEN
console.log(2 % 2 === 0);   // ==> true
console.log(10 % 2 === 0);  // ==> true
console.log(548 % 2 === 0); // ==> true


// If the remainder of "number % 2" is equal to 1
// the number is ODD
console.log(1 % 2 === 1);    // ==> true
console.log(3 % 2 === 1);    // ==> true
console.log(45 % 2 === 1);   // ==> true
console.log(1397 % 2 === 1); // ==> true


//Update variable using its original value

let myAge = 32;

myAge = myAge + 1;
console.log(myAge); // <-- 33


//Advanced Assignment Operators
let yourAge = 25;
yourAge += 1;  // same as:  yourAge = yourAge + 1
console.log(yourAge); // ==> 26


/*

    Name	Operator	Equivalent
    Assignment	x = y	N / A
    Addition assignment	x += y	x = x + y
    Subtraction assignment	x -= y	x = x - y
    Multiplication assignment	x *= y	x = x * y
    Division assignment	x /= y	x = x / y
    Remainder assignment	x %= y	x = x % y
    Exponentiation assignment	x **= y	x = x ** y

*/

let total = 10;

total += 10; // same as: total = total + 10
console.log(total);

total -= 5; // same as: total = total - 5
console.log(total);

total *= 10; // same as: total = total * 10
console.log(total);

total /= 3; // same as: total = total / 3
console.log(total);

//A simples expression

const result = 2 + 4;

//Combining Multiple Expressions
let result = (7 + 5) / 3 - 8;
console.log(result); // => -4



/* 

Precedence	Operator	Name
1	        ()	        Parantheses
2	        **	        Exponents
3	        *	        Multiplication
4	        /	        Division
5	        +	        Addition
6	        -	        Subtraction

(PEMDAS)

*/

const i = 10 + (5 * 2 ** 3) / 4 - 6;
//   ===> 10 + 5 * 8 / 4 - 6  <== start with the exponents (2 ** 3)
//   ===> 10 + 5 * 2 - 6  <== then multiplication (5 * 8)
//   ===> 10 + 10 - 6  <== then division (40 / 4)
//   ===> 10 + 4  <== then addition (10 + 10 )
//   ===> 14  <== and finally finish with subtraction (20 - 6)
// (https://imgur.com/vRjzZ3x)

// Extra resources
// MDN Expressions and Operators - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions
// MDN Operator Precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// MDN Numbers - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Number_instances
// Expressions vs Statements - http://www.2ality.com/2012/09/expressions-vs-statements.html


const expressionOne = ((2 * 2) + 5) * 6;
console.log(expressionOne);
//54

const expressionTwo = ((2* 2) + (5 * 3)) - 5;
console.log(expressionTwo);
//14
const expressionThree = (5 * 5) / (5 * 5);
console.log(expressionThree);
//1

const expressionFour = 5 * 5 - 5 * 4;
console.log(expressionFour);
//5