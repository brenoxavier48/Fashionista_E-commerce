import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllProductsCart, selectTotalPriceProductsCart } from '../../../store/Cart/cart.selectors'
import { ProductCart } from '../../../store/Cart/protocols'
import ProductImage from '../ProductImage'
import Counter from '../Counter'

type Props = {
  product: ProductCart
}

const CartProductCard = ({ product }: Props) => {

  const heandleIncrease = () => {
    
  }

  const heandleDecrease = () => {

  }

  return (
    <article className="cart-product-container">
      <div className="cart-product-container__image">
        <ProductImage
          className="cart-product-container__image__img"
          src={product.image}
          alt={product.name}
        />
        <span>Remover item</span>
      </div>
      <div className="cart-product-container__info">
        <p className="cart-product-container__info__name">
          {product.name}
        </p>
        <p className="cart-product-container__info__size">
          {`Tam: ${product.size}`}
        </p>
        <Counter
          value={product.quantity}
          increase={() => {}}
          decrease={() => {}}
        />
      </div>
      <div className="cart-product-container__price-info">
        <p className="cart-product-container__price-info__price">
          {product.actual_price}
        </p>
        <p className="cart-product-container__price-info__installments">
          {product.installments}
        </p>
      </div>
    </article>
  )
}

export default CartProductCard