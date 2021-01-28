import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuantityProductCart, removeProductCart } from '../../../store/Cart/cart.actions'
import { UpdateQuantityProductCartPayload } from '../../../store/Cart/protocols'
import { ProductCart } from '../../../domain/ProductModel'
import DrawerProductCard from '../DrawerProductCard'

type Props = {
  product: ProductCart,
  timeToAppear?: number
}

const CartProductCard = ({ product, timeToAppear }: Props) => {

  const dispatch = useDispatch()

  const [ isRemoved, setIsRemoved ] = useState<boolean>(false)

  const makeUpdateObject = (quantity: 1 | -1): UpdateQuantityProductCartPayload => ({
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

  return (
    <DrawerProductCard
      type="ProductCart"
      image={product.image}
      name={product.name}
      actual_price={product.actual_price}
      installments={product.installments}
      quantity={product.quantity}
      size={product.size}
      handleRemoveItem={handleRemoveItem}
      heandleIncrease={heandleIncrease}
      heandleDecrease={heandleDecrease}
      isRemoved={isRemoved}
      timeToAppear={timeToAppear}
    />
    
  )
}

export default CartProductCard