import React, {useContext} from 'react'
import { PRODUCTS } from '../../Products'
import {ShopContext} from '../../context/ShopContextProvider'
import CartItem from './CartItem'
import './cart.css'
import { useNavigate } from 'react-router-dom'  // use this hook to navigate to another route to react-router

const Cart = () => {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext) //grab the cartItems from the context

  //grab total amount from the function
  const totalAmount = getTotalCartAmount();

  //to navigate use this function navigate
  const navigate= useNavigate();

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
        {/*logic to display if there is no items in cart then display "your cart is empty" */}
        {totalAmount > 0 ?
          //if totalAmount is greater than 0 then display this div
          <div className='checkout'>
            <p>Subtotal: ${totalAmount}</p>
            {/*use navigate as the method of navigation, in our case shop page is on empty route */}
            <button onClick={() => navigate("/")}> Continue shopping</button>
            <button> Checkout</button>
          </div>
          // if totalAmount is = 0, display cart is empty
        : <h1> Your cart is empty</h1>}

    </div>
  )
}

export default Cart