// Create an empty object
const objectName = { };


// Create an object that contains properties
const objectName = {
    myText: "abc",  // key - myText,  value - "abc"
    myNum: 123      // key - myNum,   value - 123
  };
  

//example 1
//Try running the code and replacing the values name, age, course, and goals with your custom input:

const student1 = {
    name: "Bob Hill",
    age: 29,
    course: "Data Analytics",
    hasPriorExp: false,
    goals: ["career change", "new skills"],
  };
  
  console.log(student1);
  

//  Example 2
//objects can store values of any type including other objects. Consider the following example:

const student2 = {
    name: "Sara Martins",
    age: 41,
    course: "Web Dev",
    hasPriorExp: false,
    goals: ["career change", "new skills"],
    address: {
      city: "Lisbon",
      country: "Portugal",
      zipCode: "1170",
      street: "Tv. Pereira",
      streetNumber: 7
    }
  };
  
  
  console.log(student2);


  //Accessing Values with Dot Notation

  //Syntax: objectName.key

  const person = {
    name: "Sarah",
    age: 45
  }
  
  console.log( person.name ); // ==> "Sarah"
  console.log( person.age );  // ==> 45
  

  //example1

  const account1 = {
    accountNumber: "000-1234567-890",
    holder: "Oliver Juggins",
    active: true,
    balance: {
      total: 30000,
      currency: "GBP"    
    }
  }
  
  // Access object property using the dot notation
  console.log(account1.accountNumber);
  console.log(account1.holder);
  
  //Example 2

  const account1 = {
    accountNumber: "000-1234567-890",
    holder: "Oliver Juggins",
    active: true,
    balance: {
      total: 30000,
      currency: "GBP"    
    }
  }
  
  // Access a nested object using the dot notation:
  console.log(account1.holder);
  
  // Access a nested object property using the dot notation:
  console.log(account1.balance.total);
  console.log(account1.balance.currency);
  

  //example3 - //In addition to printing the values using console.log,
  // we can as well use the property values and store them in variables. Consider the following example:

  const account1 = {
    accountNumber: "000-1234567-890",
    holder: "Oliver Juggins",
    active: true,
    balance: {
      total: 30000,
      currency: "GBP"    
    }
  }
  
  // Store object property value in a variable:
  const client = account1.holder;
  
  const money = account1.balance.total;
  const currencyCode = account1.balance.currency;
  
  console.log(client);
  console.log(`${client} | ${money} | ${currencyCode}`);
  

  //Accessing Values with Bracket Notation
  Syntax: objectName["key"]

  const person = {
    name: "Sarah",
    age: 45
  }
  
  console.log( person["name"] ); // ==> "Sarah"
  console.log( person["age"] );  // ==> 45
  

//example1
const account2 = {
    accountNumber: "000-2029800-101",
    holder: "Sarah Connor",
    active: true,
    balance: {
      total: 101984,
      currency: "USD"    
    }
  }
  
  // Access object property using the bracket notation
  console.log( account2["accountNumber"] );
  console.log( account2["holder"] );
  

  //example2
  const account2 = {
    accountNumber: "000-2029800-101",
    holder: "Sarah Connor",
    active: true,
    balance: {
      total: 101984,
      currency: "USD"    
    }
  }
  
  // Access a nested object using the bracket notation:
  console.log( account2["holder"] );
  
  // Access a nested object property using the bracket notation:
  console.log( account2["balance"]["total"] );
  console.log( account2["balance"]["currency"] );



  //example3
  const account2 = {
    accountNumber: "000-2029800-101",
    holder: "Sarah Connor",
    active: true,
    balance: {
      total: 101984,
      currency: "USD"    
    }
  }
  
  const str1 = "holder";
  const str2 = "active";
  
  console.log( account2[str1] );
  // same as:  account2["holder"]
  
  console.log( account2[str2] ); 
  // same as:  account2["active"]




  //Add new properties to an existing object
  const student3 = {
    firstName: "Alex"
  }
  
  console.log("Before:", student3);
  // ==> Before: { firstName: 'Alex' }
  
  // Add a new property to an existing object
  student3.lastName = "Ray";
  
  console.log("After:", student3);
  // ==> After: { firstName: "Alex", lastName: 'Ray' }
  
  
  //Updating Properties
  const student4 = {
    firstName: "Lucy",
    lastName: "Hall",
    city: ""
  }
  
  console.log(student4);
  // ==> { firstName: 'Lucy', lastName: 'Hall', city: ''  }
  
  // Update an existing object property
  student4.city = "London"
  
  console.log(student4);
  // ==> { firstName: 'Lucy', lastName: 'Hall', city: 'London' }
  

  //Removing Properties
  const student5 = {
    firstName: "Eva",
    lastName: "Garcia",
    email: "eva@mail.com"
  }
  
  console.log(student5);
  // ==> { firstName: 'Eva', lastName: 'Garcia', email: 'eva@mail.com'  }
  
  // Delete an existing object property
  delete student5.email;
  
  console.log(student5);
  // ==> { firstName: 'Eva', lastName: 'Garcia'  }
  

  //List Object Keys

  const student1 = {
    name: "Bob Hill",
    age: 29,
    course: "Data Analytics",
    hasPriorExp: false,
    goals: ["career change", "new skills"],
  };
  
  const allKeys = Object.keys(student1);
  
  console.log("allKeys:", allKeys);
  // ==> allKeys: ['name', 'age', 'course', 'hasPriorExp', 'goals']
  


  ///List Object Values
  const oscarWinners = {
    year2018: "Green Book",
    year2019: "Parasite",
    year2020: "Nomadland",
    year2021: "CODA",  
  }
  
  const movies = Object.values(oscarWinners);
  
  console.log("movies:", movies);
  // ==> movies: ['Green Book', 'Parasite', 'Nomadland', 'CODA']
  

  //The in operator

  const user = {
    name: 'Ana',
    age: 27
  };
  
  console.log('name' in user); // => true
  console.log('age' in user); // => true
  console.log('course' in user); // => false

  


//Object - MDN Documentation. - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//dot vs. bracket notation - https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781
//Property Accessors - MDN Documentation. - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Property_accessors
//delete operator - Delete a property from an object.- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
//Object.keys() method - Lists all the properties of an object - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//Object.values() method - Get all the values of an object - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values