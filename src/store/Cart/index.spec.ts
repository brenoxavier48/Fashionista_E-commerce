import { 
  CartState, 
  ProductCart, 
  ADD_PRODUCTS_CART_PAYLOAD, 
  REMOVE_PRODUCT_CART_PAYLOAD, 
  UPDATE_QUANTITY_PRODUCT_CART_PAYLOAD 
} from './protocols'
import { 
  addProductsCart, 
  removeProductCart,
  updateQuantityProductCart 
} from './cart.actions'
import { getTotalPriceAndQuantity } from './helpers'
import cartReducer from './cart.reducer'

const makeSingleProduct = (sku: string, quantity = 1, price = 1): ProductCart => ({
  name: `test-${sku}`,
  quantity,
  actual_price: `R$ ${price},00`,
  installments: 'test',
  image: 'test',
  size: 'test',
  sku
})

const makeProducts = (quantity: number, quantityOfEachProduct = 1, priceOfEachProduct = 1): ProductCart[] => {
  let items: ProductCart[] = []
  for (let i = 0; i < quantity; i++) {
    items.push(makeSingleProduct(String(i), quantityOfEachProduct, priceOfEachProduct))
  }
  return items
}

const makeInitialState = (initialQuantity: number): CartState => {
  let items = makeProducts(initialQuantity)
  const { itemsQuantity, totalPrice } = getTotalPriceAndQuantity(items)
  return ({
    itemsQuantity,
    totalPrice,
    items
  })
}

describe('Cart helpers test cases', () => {
  describe('getTotalPriceAndQuantity test cases', () => {
    test('Should return 0 for totalPrice and itemsQuantity if an empty array is passed', () => {
      const { itemsQuantity, totalPrice } = getTotalPriceAndQuantity([])
      expect(itemsQuantity).toBe(0)
      expect(totalPrice).toBe(0)
    })

    test('Should return the right quantity when each item has the same quantity', () => {
      const QUANTITY_OF_EACH_ITEM = 3
      const items = makeProducts(5, QUANTITY_OF_EACH_ITEM)
      const TOTAL_QUANTITY = items.length * QUANTITY_OF_EACH_ITEM
      const { itemsQuantity } = getTotalPriceAndQuantity(items)
      expect(itemsQuantity).toBe(TOTAL_QUANTITY)
    })
  })
})

describe('Cart reducer test cases', () => {
  // test('Should')
})