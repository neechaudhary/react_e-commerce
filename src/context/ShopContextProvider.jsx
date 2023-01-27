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


  //get total cart amount
  const getTotalCartAmount = () => {
    //we first have to creata a variable called total amount
    let totalAmount=0;
    //we will loop through every items and cartItems object
    //if cartItems value is greater than 0, means there is some item in the cart
    //when there is value in the cart we will grab that value i.e: amount in the cart and multiply times the price of the specific product
    for (const item in cartItems) {         //====> this is how we loop through an object
      if( cartItems[item] > 0)
      {
        //we don't know the item price, to know the price we need to go inside PRODUCT array
        //Number(item)===> converting item to number
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item)) 
        //cartItems[item]===> amount of specific product in the cart
        totalAmount= totalAmount+ cartItems[item]* itemInfo.price
      }
    }
    return totalAmount;
  }

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

//allows us to manually change the value of specific product count in the cart items
//this function require 2 things, newAmount and itemId to know which item we are changing
//if we need to access this funtion on other components, we need to put it inside context value
const updateCartItemsCount = (newAmount, itemId) => {
  setCartItems((prev) => ({...prev, [itemId]: newAmount}))
}

//shop context provider will require a value containing all the states and functions we want to pass to provider
  const contextValue = {cartItems, addToCart, removeToCart, updateCartItemsCount, getTotalCartAmount }

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
 export default ShopContextProvider;