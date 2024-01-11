'use strict';

function isEnoughCapacity(products, containerSize) {
    let productItemsName = Object.keys(products);

    let totalProductsQt = 0;

    for (let i = 0; i < productItemsName.length; i++) {
        const productItem = productItemsName[i];
        totalProductsQt += products[productItem];
    }
    return totalProductsQt <= containerSize;
}

console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false