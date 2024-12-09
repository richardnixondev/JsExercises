//while

let counter = 0;

while (counter < 10) {
    console.log(counter);
    counter += 1;
}



//for
for (let i = 0; i < 10; i++){
    console.log("looping...");
    console.log(i);
}



let counter = 1;

while (counter <= 10){
  console.log(counter);
  counter += 1;
} 

// example - We can also use values like string length or any other numeric value stored in a variable:
const word = "JavaScript";
const lastIndex = word.length - 1; // 10 - 1 --> 9

for (let i = 0; i <= lastIndex; i++) {
  const char = word[i];
  console.log(char);
}

//example - we can use the for loop to iterate over strings in the reverse order:
const levidrome = "FLOW";
const lastIndex = levidrome.length - 1; // 4 - 1 --> 3

for (let i = lastIndex; i >= 0; i--) {
  const char = levidrome[i];
  console.log(char);
}

/* Preventing Infinite Loops
While and for loops require a stop condition that
 will eventually end the loop execution. */

 let count = 11;

/* This loop will run infinitely, 
as the condition never becomes false */
while (count > 10) {
  console.log(count);
  count++;
}


for (let i = 10; i <= 10; i--) {
    console.log(i);
}


// Extra resources
// W3 Schools -for Loop https://www.w3schools.com/js/js_loop_for.asp
// W3 Schools - while Loop https://www.w3schools.com/js/js_loop_while.asp
// MDN for loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// MDN while loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while