import React, {createContext, useState} from 'react'
import { PRODUCTS } from '../Products';


export const ShopContext = createContext(null);


//we are doing this because we want to create an object with id equal to the id of the product
//we will create a function so that will get the array and create an empty object to represent the initial state of the cart itmes
const getDefaultcart = () => {
  //create cart object
  const cart = {};
  // loop through all of the itmes in the cart i.e; PRODUCTS array
  for(let i = 0; i < PRODUCTS.length + 1 ; i++) {
   //cart items will have a key i.e;[i] //set the quantity of each item to 0
    cart[i]=0;
  }
  return cart;
}



const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultcart());

//add items to cart
const addToCart = (itemId) => {
  //set the cart items object or array equal to the same object as it was before
  //grab the specific item with [itemId] and change it to what it was before plus 1
  setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
}

//remove items to cart
const removeToCart = (itemId) => {
  //set the cart items object or array equal to the same object as it was before
  //grab the specific item with [itemId] and change it to what it was before minus 1
  setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
}

//shop context provider will require a value containing all the states and functions we want to pass to provider
  const contextValue = {cartItems, addToCart, removeToCart}

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
 export default ShopContextProvider;