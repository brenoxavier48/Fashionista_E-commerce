import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllProductsCart, selectTotalPriceProductsCart } from '../../../store/Cart/cart.selectors'
import { updateQuantityProductCart, removeProductCart } from '../../../store/Cart/cart.actions'
import { ProductCart, UPDATE_QUANTITY_PRODUCT_CART_PAYLOAD } from '../../../store/Cart/protocols'
import ProductImage from '../ProductImage'
import Counter from '../Counter'

type Props = {
  product: ProductCart,
  timeToAppear?: number
}

const CartProductCard = ({ product, timeToAppear }: Props) => {

  const dispatch = useDispatch()
  
  const [ isRemoved, setIsRemoved ] = useState<boolean>(false)
  const [ isRendered, setIsRendered ] = useState<boolean>(false)

  const makeUpdateObject = (quantity: 1 | -1): UPDATE_QUANTITY_PRODUCT_CART_PAYLOAD => ({
    sku: product.sku,
    quantity
  })

  const heandleIncrease = () => {
    const updateObject = makeUpdateObject(1)
    dispatch(updateQuantityProductCart(updateObject))
  }

  const heandleDecrease = () => {
    const updateObject = makeUpdateObject(-1)
    dispatch(updateQuantityProductCart(updateObject))
  }

  const handleRemoveItem = () => {
    setIsRemoved(true)

    setTimeout(() => {
      dispatch(removeProductCart(product.sku))
    }, 300)
  }

  useEffect(() => {
    if (typeof timeToAppear === 'number') {
      setTimeout(() => {
        setIsRendered(true)
      }, (200 + ((50 + (15 * timeToAppear)) * timeToAppear)))
    }
  }, [])

  return (
    <article 
      className={`cart-product-container 
        ${ isRemoved ? 'cart-product-container--removed' : '' }
        ${ isRendered ? 'cart-product-container--rendered' : '' }`
      }
    >
      <div className="cart-product-container__image">
        <ProductImage
          className="cart-product-container__image__img"
          src={product.image}
          alt={product.name}
        />
        <span
          onClick={handleRemoveItem}
        >Remover item</span>
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
          increase={heandleIncrease}
          decrease={heandleDecrease}
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