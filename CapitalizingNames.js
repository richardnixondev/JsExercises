const name = "ava";
const surname = "scott";


// Your code here:

//firstFormatted
firstNameCharUppercased = name[0].toUpperCase(); 
nameFormatted = firstNameCharUppercased + name.slice(1);
console.log(nameFormatted);

//surnameFormatted
surnameCharUppercased = surname[0].toUpperCase(); 
surnameFormatted = surnameCharUppercased + surname.slice(1);
console.log(surnameFormatted);

fullnameFormatted = (`${nameFormatted} ${surnameFormatted}`)

console.log(fullnameFormatted);