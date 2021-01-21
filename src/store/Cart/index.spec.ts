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

const makeProductCart = (sku: string): ProductCart => ({
  name: `test-${sku}`,
  quantity: 1,
  actual_price: 'R$ 1,00',
  installments: 'test',
  image: 'test',
  size: 'test',
  sku
})

const makeProducts = (quantity: number): ProductCart[] => {
  let items: ProductCart[] = []
  for (let i = 0; i < quantity; i++) {
    items.push(makeProductCart(String(i)))
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

describe('Helpers test cases', () => {
  describe('getTotalPriceAndQuantity test cases', () => {
    test('Should return 0 for totalPrice and itemsQuantity if an empty array is passed', () => {
      const { itemsQuantity, totalPrice } = getTotalPriceAndQuantity([])
      expect(itemsQuantity).toBe(0)
      expect(itemsQuantity).toBe(0)
    })
  })
})

describe('Cart reducer test cases', () => {
  // test('Should')
})