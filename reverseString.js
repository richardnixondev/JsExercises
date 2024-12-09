const word = "Hello";
let wordReversed = "";
 
 
for (let i = word.length - 1; i >= 0; i--) {
  const char = word[i];
  wordReversed += char;
}
 
 
console.log(wordReversed);