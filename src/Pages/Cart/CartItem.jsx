import React from 'react'

const CartItem = (props) => {
    const {id, product_name, price, product_img}= props.data;

  return (
    <div className='cart_item'>
        <img src={product_img} alt="product image" />
        <div className='description'>
            <p><b>{product_name}</b></p>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default CartItem