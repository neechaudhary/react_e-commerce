import React, {useContext} from 'react'
import { PRODUCTS } from '../../Products'
import {ShopContext} from '../../context/ShopContextProvider'
import CartItem from './CartItem'
import './cart.css'

const Cart = () => {

  const {cartItems} = useContext(ShopContext) //grab the cartItems from the context

  return (
    <div className='cart'>
      <div className='carttitle'>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cart_items'>
        {/* grab (Product) list and we don't want to display all the thing like we do in shop, here we only want to display items*/}
        {PRODUCTS.map((product) =>{
          if(cartItems[product.id] !== 0) //if the cartItems is not equal to 0 this means that the item is in the cart
            {
              return <CartItem data={product}/>
            }
        })}
      </div>
    </div>
  )
}

export default Cart