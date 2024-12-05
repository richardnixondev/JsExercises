let floor;
const department = "shoes"; // "clothes", "electronics", "bookstore", "gardening"


// Convert the following into a switch statement:
if (department === "shoes" || department === "clothes") {
  floor = "1st Floor";
}
else if (department === "electronics") {
  floor = "2nd Floor";
}
else if (department === "gardening") {
  floor = "3rd Floor";
}
else {
  floor = "Ground Floor";
}

console.log(`Going to the ${department} department - ${floor}.`)







let floor;
const department = "shoes"; // "clothes", "electronics", "bookstore", "gardening"




switch (department) {
  case "shoes":
    floor = "1st Floor";
    break;
  case "clothes":
    floor = "1st Floor";
    break;
  case "electronics":
    floor = "2st Floor";
    break;
  case "gardening":
    floor = "3st Floor";
    break;    
  default:
    floor = "Ground Floor";
    break;
}

console.log(`Going to the ${department} department - ${floor}.`)