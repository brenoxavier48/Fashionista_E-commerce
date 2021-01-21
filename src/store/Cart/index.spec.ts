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

const makeProductCart = (sku: string, quantity = 1, price = 1): ProductCart => ({
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
    items.push(makeProductCart(String(i), quantityOfEachProduct, priceOfEachProduct))
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

    test('Should return the right quantity', () => {
      const QUANTITY_OF_EACH_ITEM_01 = 1
      const items01 = makeProducts(5, QUANTITY_OF_EACH_ITEM_01)
      const TOTAL_QUANTITY_01 = items01.length * QUANTITY_OF_EACH_ITEM_01

      const { itemsQuantity: itemsQuantity01 } = getTotalPriceAndQuantity(items01)
      
      const QUANTITY_OF_EACH_ITEM_02 = 3
      const items02 = makeProducts(5, QUANTITY_OF_EACH_ITEM_02)
      const TOTAL_QUANTITY_02 = items02.length * QUANTITY_OF_EACH_ITEM_02
      
      const { itemsQuantity: itemsQuantity02 } = getTotalPriceAndQuantity(items02)
      
      expect(itemsQuantity01).toBe(TOTAL_QUANTITY_01)
      expect(itemsQuantity02).toBe(TOTAL_QUANTITY_02)
    })
  })
})

describe('Cart reducer test cases', () => {
  // test('Should')
})