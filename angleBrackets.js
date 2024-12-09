

let count = 0;
const text = "[] <> {} [] << [] <> {} [] << {} >> [] <> {} << {} >> [] <> {}";

for (let i = 0; i < text.length; i++) {
  const twoChars = text[i] + text[i + 1];
  
  if ( twoChars === "<>" ) {
    count++;
  }
}

// Check your code:
console.log("count: ", count);