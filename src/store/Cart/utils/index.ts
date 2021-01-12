import { ProductCart } from '../protocols'

export const moneyNotationToNumber = (money: string): number => Number(
  money
    .replace(/([a-z]+)\$/gi, '')
    .replace(',','.')
)

export const getTotalPrice = (products: ProductCart[]): number => {
  const totalPrice: number = products.reduce((current: number, product: ProductCart) => {
    const priceNumber = moneyNotationToNumber(product.actual_price) * product.quantity
    return current + priceNumber
  }, 0)

  return totalPrice
}
