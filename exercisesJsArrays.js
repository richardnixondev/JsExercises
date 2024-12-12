/*1. Price Total
To start, open a new pen on Codepen and copy/paste the below starter code.

Your task is to sum the numbers stored in an array:

Calculate the sum of all the numbers present in the prices array.
Round the sum to one decimal.*/


// Initial code
const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

// loop that goes from 0 to the length of the prices array
for (let i = 0; i < prices.length; i++){
    sum += prices[i];
}
   sum = Math.round(sum);

console.log(sum);


//-------------------------------------------------------------------

/*2. Swap First and Last
Your task is to create an array and manipulate its elements:

To start, open a new pen on Codepen.
Create an array myArray with any 5 elements. Your choice of type and value!
Remove the last element from the array and save it into a variable named lastElement
Remove the first element from the array and save it into a variable named firstElement
Add the value of lastElement to the start of the array
Add the value of firstElement to the end of the array*/

names = ['joao', 'maria', 'richard', 'manu', 'dylan'];
let lastElement = names.pop()
let firstElement = names.shift()

names.unshift(lastElement)
names.push(firstElement)

console.log(names)


//-------------------------------------------------------------------




/*3. TV Series
Open a new pen on Codepen.
Copy/paste the below starter code.
Starter code

In this exercise we have an array seriesPending with some TV series, through this exercise we will be managing this data as well as another array we will create later.


Add a new string element at the end of the seriesPending array. It can be any value of your choice!
*/

let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];
