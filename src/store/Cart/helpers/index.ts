import { ProductCart } from '../../../domain/ProductModel'
import { moneyNotationToNumber } from '../../../infra/utils'

type TotalPriceAndQuantity = { 
  itemsQuantity: number,
  totalPrice: number
}

export const getTotalPriceAndQuantity = (products: ProductCart[]): TotalPriceAndQuantity => {

  const reduceCallBack = (current: TotalPriceAndQuantity, product: ProductCart) => {
    current.itemsQuantity += product.quantity
    current.totalPrice += moneyNotationToNumber(product.actual_price) * product.quantity
    return current
  }

  const result: TotalPriceAndQuantity = { 
    itemsQuantity: 0, 
    totalPrice: 0 
  }

  if (products.length > 0) {
    const { itemsQuantity, totalPrice } = products.reduce(
      reduceCallBack, 
      { itemsQuantity: 0, totalPrice: 0 }
    )
    result.itemsQuantity = itemsQuantity
    result.totalPrice = totalPrice
  }

  return result
}
