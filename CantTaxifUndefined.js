const tax = 21;
let price;
// price = 36;


// Your code here:
if (price !== undefined) {  
    console.log("Price + (Price * tax) = ", price + (price * tax));
  }else {
    console.log("Can't add tax if price is undefined!");
  }