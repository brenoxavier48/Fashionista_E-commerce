import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllProductsCart, selectTotalPriceProductsCart } from '../../../store/Cart/cart.selectors'
import { ProductCart } from '../../../store/Cart/protocols'

const Cart = () => {

  const products: ProductCart[] = useSelector(selectAllProductsCart)
  const totalPrice: number = useSelector(selectTotalPriceProductsCart)
  
  return (
    <div className='cart-container'>
      <section className="cart-container__products">
        {
          products.map(product => <p>{product.name}</p>)
        }
      </section>
      <div className="cart-container__total-price">
        <p>{`Subtotal - R$ ${totalPrice.toFixed(2).replace('.', ',')}`}</p>
      </div>
    </div>
  )
}

export default Cart