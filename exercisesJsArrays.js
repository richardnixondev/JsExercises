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


3- Add a new string element at the end of the seriesPending array. It can be any value of your choice!
4- Write a loop that goes from 0 to the length of the seriesPending array. Inside the loop, use console.log()
 on each element of the array and its index.
5- Inside the same loop, add a conditional that will check if one of the series inside the array is 
"Boolean 99". In case it is, console.log "Found it!"
6- Declare and initialize a variable seriesWatching with an empty array.
7-Remove the first element of the seriesPending array and add it at the end of seriesWatching array. You can use a variable to store the
 removed element as seen before or try to do everything in the same line
8-Use a console.log() to see the length of both arrays.
9- We know that there are 4 elements left in seriesPending. So, write another loop that goes from 0 until it gets to 4.
 the code inside should execute exactly 4 times
10-Inside the loop, write the code that will remove the first element of 
the seriesPending and add it to seriesWatching. same as step 7
11 - Add another console.log() to verify the length of the arrays after the loop. 
seriesPending should have 0 elements while seriesWatching should have 5.
12 - Let’s now remove all the elements from seriesWatching. We could run another loop and use the .pop() 
method, but let’s instead use the .splice() method to remove all the elements in the array.
13

*/

let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];
let seriesWatching = [];

seriesPending.push('Mr Robot')

for(let i = 0; i < seriesPending.length; i++){
    const element = seriesPending[i];
    console.log(`Serie:${i} : ${seriesPending[i]}`);
    if (seriesPending[i] === 'Boolean 99') {
        console.log('Found it!');
    }
}
seriesWatching.push(seriesPending.shift()); 

for(let i = 0; i = seriesPending.length; i--){
    console.log(`running : ${[i]}`);
    seriesWatching.push(seriesPending.shift()); 

}
seriesWatching.splice(0,5);
console.log(seriesPending.length);
console.log(seriesWatching.length);

