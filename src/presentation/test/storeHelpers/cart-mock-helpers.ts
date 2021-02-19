import { 
  CartState, 
  ProductCart,
} from '../../../store/Cart/protocols'
import { getTotalPriceAndQuantity } from '../../../store/Cart/helpers'


export const mockSingleProduct = (sku: string, quantity = 1, price = 1): ProductCart => ({
  name: `test-${sku}`,
  quantity,
  actual_price: `R$ ${price},00`,
  installments: 'test',
  image: 'test',
  size: 'test',
  sku
})

export const mockProducts = (quantity: number, quantityOfEachProduct = 1, priceOfEachProduct = 1): ProductCart[] => {
  let items: ProductCart[] = []
  for (let i = 0; i < quantity; i++) {
    items.push(mockSingleProduct(String(i), quantityOfEachProduct, priceOfEachProduct))
  }
  return items
}

export const mockInitialState = (initialQuantity: number): CartState => {
  let items = mockProducts(initialQuantity)
  const { itemsQuantity, totalPrice } = getTotalPriceAndQuantity(items)
  return ({
    itemsQuantity,
    totalPrice,
    items
  })
}
