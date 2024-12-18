let property = {
    owner: {
      firstName: 'John',
      lastName: 'Doe',
      age: 44
    },
    isForSale: false,
    sqrm: 120,
    address: {
      street: 'Happy St',
      number: 123,
      city: 'Miami',
      state: 'FL',
      country: 'US'
    },
    amenities: ['pool', 'tennis court', 'private parking', 'yard']
  };
  
  // YOUR CODE HERE

  function checkProperty(theProperty){
    const propertyDetails = `The owner, ${theProperty.owner.firstName} ${theProperty.owner.lastName} put the home for sale! The property has ${theProperty.amenities.length} amenities.`;
    
    if(theProperty.isForSale === true){
      console.log(propertyDetails);
    }else {
      console.log(`The home in ${theProperty.address.street} St no. ${theProperty.address.number} is not for sale.`);
     } 
  }
 checkProperty(property);