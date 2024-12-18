//you can’t create an empty variable when using const. 
// When using const, a value must be assigned to the 
// variable at the moment of its initialization.

let name;
const year; // <== wrong


//right way to go:
const year = 2021;

//or

let year;


//numbers as data types
const year = 2020;
const price = 30.99;

//Booleans as data types
const isStudent = true;
const hasDegree = false;




//Objects as data types
const phone = {
    brand: 'Apple',
    type: 'iPhone',
    model: 'X',
    specs: {
      capacity: '256 GB',
      size: {
        height: '5.65 inches',
        width: '2.79 inches'
      }
    },
    chip: ['bionic', 'neural engine', 'embedded motion processor']
  };
  
  // Simples function to list phones properties
  function getPhoneDetails(thePhone) {
    const phoneDetails = `${thePhone.type} ${thePhone.model} by ${thePhone.brand}
  Characteristics: 
  1 - capacity: ${thePhone.specs.capacity},
  2 - dimensions: ${thePhone.specs.size.height} x ${thePhone.specs.size.width}`;
  
    console.log(phoneDetails);
    console.log('Chip specs:');
  
    for (let i = 0; i < thePhone.chip.length; i++) {
      console.log(`${i + 1} - ${thePhone.chip[i]}`);
    }
  }
  
  getPhoneDetails(phone);

  // the output after function invocation is:

  // iPhone X by Apple
// Characteristics:
// 1 - capacity: 256 GB,
// 2 - dimensions: 5.65 inches x 2.79 inches
// Chip specs:
// 1 - bionic
// 2 - neural engine
// 3 - embedded motion processor



//Arrays as data types

const someArr = ['max', 34, true];



// elements of the array can have a ny type of value

const someArr = ['max', 34, true, { name: 'sandra', student: true }, ['javascript', 'mongodb', 'react']];

console.log(someArr);
// [
//   'max',
//   34,
//   true,
//   { name: 'sandra', student: true },
//   [ 'javascript', 'mongodb', 'react' ]
// ]

  
//We learned that we could loop through arrays using for or forEach loop.
someArr.forEach(elem => {
    console.log(`The element ${elem} is of type: ${typeof elem}.`);
  });
  
  // The element max is of type: string.
  // The element 34 is of type: number.
  // The element true is of type: boolean.
  // The element [object Object] is of type: object.
  // The element javascript,mongodb,react is of type: object.


