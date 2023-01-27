import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContextProvider'

const Product = (props) => {
    const {id, product_name, price, product_img}= props.data;
    //we will pass the context in which we want to grab the value
    const {addToCart, cartItems} = useContext(ShopContext)

   const cartItemsAmount = cartItems[id];
  return (
    <div className='product'> 
    <img src={product_img} alt="product image" />
    <div className='description'>
        <p><b>{product_name}</b></p>
        <p>${price}</p>
    </div>
   
        <button className='addtocart' onClick={() => addToCart(id)}>
            Add to Cart
            {/*  add some logic to see how many items are there in the cart */}
            {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
            </button>
    
    </div>
  )
}

export default Product