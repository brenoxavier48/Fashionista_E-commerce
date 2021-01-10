import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllProductsCart, selectTotalPriceProductsCart } from '../../../store/Cart/cart.selectors'
import { ProductCart } from '../../../store/Cart/protocols'

const Cart = () => {

  const products: ProductCart[] = useSelector(selectAllProductsCart)
  const totalPrice: number = useSelector(selectTotalPriceProductsCart)
  
  return (
    <div className='cart-container'>
      <section className="cart-container__products">

      </section>
      <div className="cart-container__total-price">
        <p>{`Subtotal - R$ ${totalPrice.toFixed(2)}`}</p>
      </div>
    </div>
  )
}

export default Cart