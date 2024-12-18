const mixedArray = [123, 'abc', true, { a: 1 }, ['js', 'node', 'react'], undefined];

function walkArray (arr){
    for (let i =0; i < mixedArray.length; i++){
        console.log(walkArray(mixedArray[i]));
    }

}

--------------
let user = {
    username: 'ironhacker',
    password: '123iron345'
  };
  
function getCredentials(username, password){
  console.log(`Username is: ${user.username} and the password is: ${user.password}.`)
}  

getCredentials(user);
// => expected output:
  // Username is: ironhacker and the password is: 123iron345.


---------------------


  