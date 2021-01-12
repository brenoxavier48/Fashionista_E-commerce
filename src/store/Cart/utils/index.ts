import { ProductCart } from '../protocols'

type TotalPriceAndQuantity = { 
  itemsQuantity: number,
  totalPrice: number
}

export const moneyNotationToNumber = (money: string): number => Number(
  money
    .replace(/([a-z]+)\$/gi, '')
    .replace(',','.')
)

export const getTotalPriceAndQuantity = (products: ProductCart[]): TotalPriceAndQuantity => {

  const result: TotalPriceAndQuantity = { 
    itemsQuantity: 0, 
    totalPrice: 0 
  }

  if (products.length > 0) {
    const { itemsQuantity, totalPrice } = products.reduce((current: TotalPriceAndQuantity, product: ProductCart) => {
      current.itemsQuantity += product.quantity
      current.totalPrice += moneyNotationToNumber(product.actual_price) * product.quantity
      return current
    }, { 
      itemsQuantity: 0, 
      totalPrice: 0 
    })
    result.itemsQuantity = itemsQuantity
    result.totalPrice = totalPrice
  }

  return result
}
