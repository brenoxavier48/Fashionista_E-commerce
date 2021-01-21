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

const mockSingleProduct = (sku: string, quantity = 1, price = 1): ProductCart => ({
  name: `test-${sku}`,
  quantity,
  actual_price: `R$ ${price},00`,
  installments: 'test',
  image: 'test',
  size: 'test',
  sku
})

const mockProducts = (quantity: number, quantityOfEachProduct = 1, priceOfEachProduct = 1): ProductCart[] => {
  let items: ProductCart[] = []
  for (let i = 0; i < quantity; i++) {
    items.push(mockSingleProduct(String(i), quantityOfEachProduct, priceOfEachProduct))
  }
  return items
}

const mockInitialState = (initialQuantity: number): CartState => {
  let items = mockProducts(initialQuantity)
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
      const items = mockProducts(5, QUANTITY_OF_EACH_ITEM)
      const TOTAL_QUANTITY = items.length * QUANTITY_OF_EACH_ITEM
      const { itemsQuantity } = getTotalPriceAndQuantity(items)
      expect(itemsQuantity).toBe(TOTAL_QUANTITY)
    })

    test('Should return the right quantity when each item does not have the same quantity', () => {
      const QUANTITY_OF_EACH_ITEM = 1
      const items = mockProducts(5, QUANTITY_OF_EACH_ITEM)

      const QUANTITY_OF_ADDITIONAL_ITEM = 7
      const addtionalItem = mockSingleProduct('test', QUANTITY_OF_ADDITIONAL_ITEM)

      items.push(addtionalItem)

      const TOTAL_QUANTITY = (5 * QUANTITY_OF_EACH_ITEM) + QUANTITY_OF_ADDITIONAL_ITEM
      
      const { itemsQuantity } = getTotalPriceAndQuantity(items)
      
      expect(itemsQuantity).toBe(TOTAL_QUANTITY)
    })

    test('Should return the right price when each item has the same price and quantity', () => {
      const PRICE_OF_EACH_ITEM = 3
      const items = mockProducts(5, 1, PRICE_OF_EACH_ITEM)
      const TOTAL_PRICE = items.length * 1 * PRICE_OF_EACH_ITEM
      const { totalPrice } = getTotalPriceAndQuantity(items)
      expect(totalPrice).toBe(TOTAL_PRICE)
    })

    test('Should return the right price when each item does not have the same price and quantity', () => {
      const PRICE_OF_EACH_ITEM = 1
      const items = mockProducts(5, 2, PRICE_OF_EACH_ITEM)

      const PRICE_OF_ADDITIONAL_ITEM = 7
      const addtionalItem = mockSingleProduct('test', 1, PRICE_OF_ADDITIONAL_ITEM)

      items.push(addtionalItem)

      const TOTAL_PRICE = (5 * 2 * PRICE_OF_EACH_ITEM) + PRICE_OF_ADDITIONAL_ITEM
      
      const { totalPrice } = getTotalPriceAndQuantity(items)
      
      expect(totalPrice).toBe(TOTAL_PRICE)
    })
  })
})

describe('Cart reducer test cases', () => {
  // test('Should')
})