import React, {useContext} from 'react'
import {ShopContext} from '../../context/ShopContextProvider'


const CartItem = (props) => {
    const {id, product_name, price, product_img}= props.data;
    const {cartItems, addToCart, removeToCart, updateCartItemsCount} = useContext(ShopContext) //grab the cartItems from the context


  return (
    <div className='cart_item'>
      <div>
        <img src={product_img} alt="product image" />
      </div>
        <div className='description'>
            <p><b>{product_name}</b></p>
            <p>${price}</p>
            <div className='countHandler'>
              <button onClick={() => removeToCart(id)}> - </button>
              {/* add onchange function to provide funcnality, so user can input fiels */}
              {/*onchange={(e) => }) ===>going to use target of value that is actually in the input field */}
              {/*updateCartItemsCount()==> the first argument will be(e.target.value) and we will convert it to a number. the second argument is itemId i.e; id */}
              <input value={cartItems[id]} onChange={(e) => updateCartItemsCount(Number(e.target.value), id)}/>
              <button onClick={() => addToCart(id)}> + </button>
              
            </div>
        </div>
    </div>
  )
}

export default CartItem