const country1 = "France";
const country2 = 'Mexico';
const country3 = `Brazil`;

console.log(country1); // => France
console.log(country2); // => Mexico
console.log(country3); // => Brazil


// String interpolation

const name = "John";
const surname = "Doe";
const greeting = `Hello, my name is ${name} ${surname}!!`;

console.log(greeting);

//Multiline strings

const campuses = `Multiline string:
- Madrid
- Barcelona
- Miami
- Mexico City
- Paris
- Berlin
- Amsterdam
- Sao Paulo
- Lisbon`;

console.log(campuses);


//Concatenation

let greeting = "";
greeting += "Hello there.";
console.log(greeting); // ==> Hello there.

greeting += " Welcome to Ironhack!"
console.log(greeting); // ==> Hello there. Welcome to Ironhack!

const str = "JavaScript " + "rocks!";

console.log(str); // ==> JavaScript rocks!

//Concatenating strings and numbers

const year = 2022;
const birthday = "My birthday is on May 14th ";

// Concatenate the string and the number
const result = birthday + year;

console.log(result); // ==> My birthday is May on 14th 2022
console.log(typeof result); // ==> string


// String length
const fact = "I love Web Dev!";
console.log(fact.length);  // ==> 15


console.log(`"${fact}" is ${fact.length} characters long.`);
// ==> "I love Web Dev" is 15 characters long

//Accessing a character in a string
const bootcamp = "ironhack";

const firstChar = bootcamp[0];
const secondChar = bootcamp[1];
const lastChar = bootcamp[7];

console.log(firstChar);  // ==> i
console.log(secondChar); // ==> r
console.log(lastChar);   // ==> k

const city = "Miami";

console.log(city[0]); // ==> M
console.log(city[4]); // ==> i
console.log(city[5]); // ==> undefined
console.log(city[10]); // ==> undefined

//Finding a substring - indexOf()

/*We use .indexOf() by providing the character 
or a substring whose existence we want to check 
in a string, as shown below: */

const phrase = "Don't be evil";

console.log(phrase.indexOf("Don't")); // => 0

console.log(phrase.indexOf("be")); // => 6

console.log(phrase.indexOf("e")); // => 7 because indexOf returns the index of the first found occurrence

console.log(phrase.indexOf("z")); // -1 since it's not found


//Extracting a substring - slice()

const statement = "I can't wait to start the course!!!";

// Start extracting from the index 0
const substring1 = statement.slice(0, 12);
console.log(substring1); // ==>  I can't wait


// If the second parameter is not supplied, it returns the substring 
// starting from the position specified until the end of the string.
const substring2 = statement.slice(16);
console.log(substring2); // ==>  start the course!!!


// If a negative number is passed the extraction begins from the end of the string
const substring3 = statement.slice(-9);
console.log(substring3); // ==>  course!!!



//The method .toUpperCase()

const message = "Programming is fun!";
const messageInCaps = message.toUpperCase();

console.log(messageInCaps); // ==> PROGRAMMING IS FUN!


//Converting a single character to uppercase

const name1 = "sandra";

// Get the first character and uppercase it
const firstCharUppercased = name1[0].toUpperCase();

// Concatenate uppercased letter and the rest of the string
const nameFormatted = firstCharUppercased + name1.slice(1);


console.log(firstCharUppercased); // ==> S
console.log(nameFormatted); // ==> Sandra

// Extra resources
// JavaScript String Methods -> https://www.w3schools.com/js/js_string_methods.asp
// JavaScript String Reference -> https://www.w3schools.com/jsref/jsref_obj_string.asp