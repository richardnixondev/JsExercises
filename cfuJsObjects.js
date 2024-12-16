const product = {
    brand: 'Apple',  
    model: 'MacBook Air',
    available: false,
    price: 1200,
    tags: ['apple', 'laptop', 'mac']
  };
  
  product.year ='2019';
  delete product.tags;
  product.available = true;
  
  if (product.price > 1000); {
    product.discountPercentage = 10;
    
  }
  
  product.price = product.price - (product.discountPercentage / 100) *  product.price;
  
  
  const str1 = "model";
  
  if ('discountPercentage' in product);{
    console.log(product[str1]);
  }
  
  //console.log(Object.values(product))