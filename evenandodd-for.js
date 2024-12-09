//Nested Loops

//example1

for (let i = 1; i <= 4; i++) {
    console.log("> Outer loop");
    
    for (let j = 1; j <= 2; j++) {
      console.log(">>> Inner loop");
    }
    
  }

  
//example2

let i = 1;

while (i <= 4) {
  console.log("* Outer loop");
  i++;
  
  let j = 1;
  while (j <= 2) {
    console.log("**** Inner loop");
    j++;
  }
  
}


//Conditionals and Loops

for (let i = 1; i <= 100; i++) {
    if (i % 10 === 0) {
      console.log(i)
    }
  }

  
  // example counting a substring

  const smileys = ":) :) ;) ;) :) ;) ;)  8) :) 8)";
let count = 0;

for (let i = 0; i < smileys.length; i++) {
  const twoChars = smileys[i] + smileys[i + 1];
  
  if ( twoChars === ":)" ) {
    count++;
  }
}

//Manipulating loops and their flow

//The break statement

const password = "$123abc.456789$";

for (let i = 0; i < password.length; i++) {
  const char = password[i];
  
  if (char === ".") {
    console.log("Character not '.' is not allowed!")
    break;
  }
}



//The continue statement

const lastNumber = 50;

for (let i = 1; i <= lastNumber; i++) {
  
  if (i % 2 === 0) {  // if the number is even
    continue; 
  }
  
  console.log(i);
}


//JavaScript nested loops explained - https://sebhastian.com/nested-loops-javascript/



