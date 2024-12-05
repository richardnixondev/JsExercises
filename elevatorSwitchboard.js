let floor;
const department = "tools"; // "clothes", "electronics", "gardening"

// Your Code:
if (department === "shoes" || department === "clothes") {
  floor = "1st Floor";
}
else if(department === "electronics") {
    floor = "2nd Floor";
}
else if(department === "gardening") {
  floor = "3rd Floor";
}else{
     floor = "Ground Floor";
}   

// Check your code:
console.log(`Going to the ${department} department - ${floor}.`)
