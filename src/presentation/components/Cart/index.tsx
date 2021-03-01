import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllProductsCart, selectTotalPriceProductsCart } from '../../../infra/store/Cart/cart.selectors'
import { ProductCart } from '../../../domain/ProductModel'
import CartProductCard from '../CartProductCard'

const Cart = () => {

  const products: ProductCart[] = useSelector(selectAllProductsCart)
  const totalPrice: number = useSelector(selectTotalPriceProductsCart)
  
  return (
    <div className='cart-container'>
      <section className="cart-container__products">
        {
          products.map((product, index) => (
            <CartProductCard 
              timeToAppear={index} 
              key={product.sku} 
              product={product}
            />
          ))
        }
      </section>
      <div className="cart-container__total-price">
        <p
          aria-label="Preço total da sacola"
          data-testid="cart-total-price"
        >
          {`Subtotal - R$ ${totalPrice.toFixed(2).replace('.', ',')}`}
        </p>
      </div>
    </div>
  )
}

export default Cart