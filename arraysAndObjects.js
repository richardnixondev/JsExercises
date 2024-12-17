/*
JavaScript - Part 2

JS | Nested data structures - arrays & objects */


//Objects in an arrays

const books = [
    {
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke'
    },
    {
      title: 'Secrets of the JavaScript Ninja',
      author1: 'John Resig',
      author2: 'Bear Bibeault'
    }
  ];
  


  //Getting the data from arrays of objects
  console.log(books[0]);
// { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }


//using . notation
console.log(books[0].title);
// Eloquent JavaScript


/*We still can use the same methods we covered in one of the previous lessons:

.push()
.unshift()
.pop()
.shift() */

let jsDesignPatterns = {
    title: 'Learning JavaScript Design Patterns',
    author1: 'Addy Osmani'
  };
  
  books.push(jsDesignPatterns);
  console.log(books);
  
  // [
  //   { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  //   { title: 'Secrets of the JavaScript Ninja',
  //     author1: 'John Resig',
  //     author2: 'Bear Bibeault' },
  //   { title: 'Learning JavaScript Design Patterns',
  //     author1: 'Addy Osmani' }
  // ]

  
  //Arrays in obj
  //another example
  const books = [
    {
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke'
    },
    {
      title: 'Secrets of the JavaScript Ninja',
      authors: ['John Resig', 'Bear Bibeault']
    }
  ];

  //how to print it?

  console.log(books[1].authors);
// [ 'John Resig', 'Bear Bibeault' ]

console.log(books[1].authors[0]); // => John Resig
console.log(books[1].authors[1]); // => Bear Bibeault

// * to access the property of the object use . (dot) notation, and
// * to access the element of the array, use [index] notation.



//Objects in objects

let currentGroup = {
    course: 'Web Development',
    type: 'full-time',
    squadName: 'squad-307',
    city: 'Miami',
    teacher: {
      name: 'Nick',
      age: 27
    },
    classroom: {
      floor: 3,
      seats: 30,
      available: true
    }
  };
  
  //As we can see, teacher and classroom are both embedded objects inside currentGroup object.
  //  Here is how we can get the values we want:

console.log(currentGroup.teacher); // => { name: 'Nick', age: 27 }
console.log(currentGroup.teacher.name); // => Nick
console.log(currentGroup.classroom.available); // => true


//When having objects nested inside other objects, we use . (dot) notation to access the values.




//Array of arrays (two-dimensional array)

const books = [
    ['Eloquent JavaScript', 'Secrets of the JavaScript Ninja'],
    ['Learn Python the hard way', 'Real Python Course'],
    ['Effective Java', 'Java Generics and Collections']
  ];


//In two-dimensional arrays, to reference an element, is to reference an entire (inner) array.
  
  console.log(books[1]);
// => [ 'Learn Python the hard way', 'Real Python Course' ]

//Referencing the second element of the books array, gave us back the whole array with Python books. 
// If we would like to get the elements of this array, we would have to keep using the same notation 
// ([]) since we are still working with an array:

console.log(books[1][0]); // => Learn Python the hard way
console.log(books[4]); // => undefined



//Bonus: 2D arrays with nested objects

let basic = {
    language: 'JavaScript',
    frameworks: [
      {
        end: 'back',
        list: [
          {
            name: 'ExpressJS',
            released: 2010
          },
          {
            name: 'MeteorJS',
            released: 2012
          }
        ]
      },
      {
        end: 'front',
        list: [
          {
            name: 'ReactJS',
            released: 2013
          },
          {
            name: 'VueJS',
            released: 2014
          }
        ]
      }
    ]
  };
  


//how we can access the data:
  console.log(basic.frameworks);
// gives us back the ARRAY with TWO OBJECTS
// => [
//      { end: 'back', list: [ [Object], [Object] ] },
//      { end: 'front', list: [ [Object], [Object] ] }
//    ]

// DON'T WORRY BECAUSE OF [Object] syntax, it just represents more complex structure inside. Will be covered later in the course.



//Let’s move deeper
console.log(basic.frameworks[1]);
// => {
//      end: 'front',
//      list:[
//             { name: 'ReactJS', released: 2013 },
//             { name: 'VueJS', released: 2014 }
//      ]
//    }



console.log(basic.frameworks[1].list[0]);
// => { name: 'ReactJS', released: 2013 }



//Time to practice


/* Using the given array of objects:
display price of iPhone,
display both phones’ names,
add a new phone at the beginning of the array,
remove the last element of the array */

let products = [
    {
      name: 'iPhone',
      price: 799.99
    },
    {
      name: 'Samsung Galaxy S10',
      price: 900.0
    }
  ];
  
  
  
  //console.log(products[0].price); - display price of iPhone
  //console.log(products[0].price, products[1].price) - display both phones’ prices,
  //console.log(products[0].name, products[1].name) - display both phones’ names,
  const newPhone = 
      {
      name: 'newPhone',
      price: 1000.0
    };
    
  products.unshift(newPhone); //- add a new phone at the beginning of the array,
  
  products.pop(); //- remove the last element of the array
  
  console.log(products);



/*Given the array, print:
your course type (full-time or part-time)
the most familiar topic
the least familiar topic*/

let course = {
    name: 'Web Development',
    type: ['full-time', 'part-time'],
    topics: ['HTML/CSS & Responsive Design', 'JavaScript', 'MongoDB', 'Node', 'Express', 'React']
  };

  //console.log(course.type.[1]) -- your course type (full-time or part-time)

  // console.log(course.topics.[0]) - the most familiar topic
  //  console.log(course.topics.[4], course.topics.[3]) -the least familiar topic */





  /*Given the object with nested objects in it, print: */
  let student = {
    firstName: 'Ana',
    lastName: 'Blair',
    course: {
      name: 'Web Development',
      type: 'part-time'
    },
    attendedIn: 'Madrid',
    address: {
      street: 'Happy Street',
      number: 123,
      city: 'Barcelona',
      zip: 08015,
      country: 'Spain'
    }
  };
  
  console.log(student.course.name); // => Web Development
  console.log(student.address.street); // => Happy Street
  // console.log(???);
  // => Ana moved from Barcelona to Madrid to take part-time Web Development course.
  const sentence = `${student.firstName} moved from ${student.address.city} to ${student.attendedIn} to take ${student.course.type} ${student.course.name} course.`;
  console.log(sentence);
  

//given a 2d array, print the following:

const ironCampuses = [
    ["Mexico City", "Miami", "Sao Paulo"],
    ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Paris"]
  ];
  
  console.log(ironCampuses[0][1]); // => Miami
  console.log(ironCampuses[1][0]); // => Amsterdam
  console.log(ironCampuses[1][5]); // => Paris
  


  /* 
// console.log(???); // => ExpressJS
// console.log(???); // => In Ironhack, I'll learn ExpressJS and ReactJS.
*/

const frameworks = [
    ["ExpressJS"],
    ["ReactJS"]
];

const sentence = `In Ironhack, I'll learn ${frameworks[0]} and ${frameworks[1]}`;
console.log(sentence);





Task Instructions
Create a function named sumArray that receives an array of numbers as an argument.
The function should return the sum of all the numbers in the array.

Additionaly, the function should return 0, when an empty array [] is passed as the argument.


function sumArray(numbers) {
  if(numbers != 0){
    return numbers.reduce((counter, actualValue)=> counter + actualValue, 0);
  }else{
    return 0;
  }
}