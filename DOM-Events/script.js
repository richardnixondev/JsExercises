console.log('SCRIPT.JS connected');

// ****************************** Iteration 1 ******************************

// The GOAL: When the `Add` button is clicked, the value of both input tags should be added to the list.
// Work inside the `addEventListener` below only. Follow the comments inside from step 1 to step 6

let addTaskButton = document.querySelector("#btn-add")
addTaskButton.addEventListener("click", () => {
  console.log("clicking addTask button")

  // 1. target the two input DOM elements here using querySelector
  let input1DOM;
  let input2DOM;

  // 2. target the ul DOM element (id task-list) here using querySelector
  let ulDOM;

  // 3. create a new li DOM element here (remember there is a method to create a new DOM element)
  let liDOM;
  
  // 4. add some inner text to the li DOM element, with the information of both input values (something like "value1 :  value2")
  
  // 5. append the li DOM element to the ul DOM element. Remember there is a specific method to add a DOM element to another.

  // 6. (Optional) clear the input DOM elements here (inner text should be emptied)

  // after you are done, test in the browser by adding two values to the input and clicking the button "Add"
  // example: "Study DOM" : "Bob"

}) 

// ****************************** Iteration 2 ******************************

// The GOAL: When the `Update` button is clicked, the three divs inside the section should change background color and display a random pokemon image
// Work inside the `addEventListener` first for steps 1 and 2. After that, continue in the randomPoke function for steps 3 to 5
  
let updatePokemonsButton = document.querySelector("#btn-update")
updatePokemonsButton.addEventListener("click", () => {

  // 1. Select a NodeList with all 3 divs of class poke-container

  // 2. Iterate over the nodeList with a for or forEach loop and for each node, invoke the function randomPoke. Pass the node you are iterating as an argument for the function.

  // After you save, you should see the console.log inside the randomPoke function, 3 times.
  // ... continue with step 4 in randomPoke function

})

const randomPoke = (containerNode) => {
  console.log("working inside container!")
  // * Don't change below line * It will give you a random color in hex inside randomColor
  let randomColor = '#' + Math.random().toString(16).slice(-6);
  // * Don't change below line * It will give you a random pokemon image source inside randomPokemonSrc
  let randomPokemonSrc = `https://tinyurl.com/ironhack-pokemons/${Math.floor(Math.random()*150)+1}.svg`
  
  // 3. Change the background color of the container. Use the randomColor variable as the value.
  
  // 4. Look for the img tag inside the containerNode. You will have to use a querySelector on the container for this.

  // 5. Change the src of the img tag. Use the randomPokemonSrc variable as the value.

  // after you are done, test in your browser by clicking the button "Update the Dream Team"

}


// *** Once you are done with both iterations, go back to the code and try to understand line by line everything that is happening.

/* BONUS (for iteration 1)

- Create another button in the html below the button to btn-add.
- Give the button a class and a text that says "Clear List".
- Once the button is clicked, search for all the li inside the ul and remove them.

*/