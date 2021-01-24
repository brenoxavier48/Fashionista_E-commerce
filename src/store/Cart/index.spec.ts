import { 
  CartState, 
  ProductCart, 
  ADD_PRODUCTS_CART,
  AddProductsCartAction
} from './protocols'
import { Actions } from '../protocols'
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
      const totalQuantity = items.length * QUANTITY_OF_EACH_ITEM
      const { itemsQuantity } = getTotalPriceAndQuantity(items)
      expect(itemsQuantity).toBe(totalQuantity)
    })

    test('Should return the right quantity when each item does not have the same quantity', () => {
      const QUANTITY_OF_EACH_ITEM = 1
      const QUANTITY_OF_ADDITIONAL_ITEM = 7
      const items = mockProducts(5, QUANTITY_OF_EACH_ITEM)
      const addtionalItem = mockSingleProduct('test', QUANTITY_OF_ADDITIONAL_ITEM)
      items.push(addtionalItem)
      const totalQuantity = (5 * QUANTITY_OF_EACH_ITEM) + QUANTITY_OF_ADDITIONAL_ITEM
      const { itemsQuantity } = getTotalPriceAndQuantity(items)
      expect(itemsQuantity).toBe(totalQuantity)
    })

    test('Should return the right price when each item has the same price and quantity', () => {
      const PRICE_OF_EACH_ITEM = 3
      const items = mockProducts(5, 1, PRICE_OF_EACH_ITEM)
      const totalPriceExpected = items.length * 1 * PRICE_OF_EACH_ITEM
      const { totalPrice } = getTotalPriceAndQuantity(items)
      expect(totalPrice).toBe(totalPriceExpected)
    })

    test('Should return the right price when each item does not have the same price and quantity', () => {
      const PRICE_OF_EACH_ITEM = 1
      const QUANTITY_OF_EACH_ITEM = 2
      const PRICE_OF_ADDITIONAL_ITEM = 7
      const QUANTITY_OF_ADDITIONAL_ITEM = 2
      const items = mockProducts(5, QUANTITY_OF_EACH_ITEM, PRICE_OF_EACH_ITEM)
      const addtionalItem = mockSingleProduct('test', QUANTITY_OF_ADDITIONAL_ITEM, PRICE_OF_ADDITIONAL_ITEM)
      items.push(addtionalItem)
      const totalPriceExpected = (5 * QUANTITY_OF_EACH_ITEM * PRICE_OF_EACH_ITEM) + PRICE_OF_ADDITIONAL_ITEM * QUANTITY_OF_ADDITIONAL_ITEM
      const { totalPrice } = getTotalPriceAndQuantity(items)
      expect(totalPrice).toBe(totalPriceExpected)
    })
  })
})

describe('Cart reducer test cases', () => {

  let initialState: CartState

  beforeEach(() => {
    initialState = mockInitialState(0)
    return initialState
  })

  test('Should return a empty items array, 0 for the itemsQuantity and 0 for the totalPrice if there are no items', () => {
    const products = mockProducts(0)
    const action: AddProductsCartAction = {
      type: 'ADD_PRODUCTS_CART',
      payload: {
        products
      }
    }
    const { itemsQuantity, totalPrice, items } = cartReducer(initialState, action)
    expect(itemsQuantity).toBe(0)
    expect(totalPrice).toBe(0)
    expect(items).toEqual([])
  })

  test('Should return the right quantity', () => {
    const QUANTITY_OF_EACH_ITEM = 2
    const QUANTITY_OF_ADDITIONAL_ITEM = 7
    const action: AddProductsCartAction = {
      type: 'ADD_PRODUCTS_CART',
      payload: {
        products: []
      }
    }
    const { itemsQuantity: itemsQuantityBefore, items: itemsBefore } = cartReducer(initialState, action)
    expect(itemsQuantityBefore).toBe(0)
    expect(itemsBefore).toEqual([])
    const products = mockProducts(5, QUANTITY_OF_EACH_ITEM)
    const additionalItem = mockSingleProduct('test', QUANTITY_OF_ADDITIONAL_ITEM)
    action.payload.products = [...products, additionalItem]
    const totalOfDifferentItems = action.payload.products.length
    const totalItems = (5 * QUANTITY_OF_EACH_ITEM) + QUANTITY_OF_ADDITIONAL_ITEM
    const { itemsQuantity: itemsQuantityAfter, items: itemsAfter } = cartReducer(initialState, action)
    expect(itemsQuantityAfter).toBe(totalItems)
    expect(itemsAfter.length).toEqual(totalOfDifferentItems)
  })

  test('Should return the right price', () => {
    const PRICE_OF_EACH_ITEM = 3
    const QUANTITY_OF_EACH_ITEM = 2
    const PRICE_OF_ADDITIONAL_ITEM = 8
    const QUANTITY_OF_ADDITIONAL_ITEM = 7
    const action: AddProductsCartAction = {
      type: 'ADD_PRODUCTS_CART',
      payload: {
        products: []
      }
    }
    const { totalPrice: totalPriceBefore, items: itemsBefore } = cartReducer(initialState, action)
    expect(totalPriceBefore).toBe(0)
    const products = mockProducts(5, QUANTITY_OF_EACH_ITEM, PRICE_OF_EACH_ITEM)
    const additionalItem = mockSingleProduct('test', QUANTITY_OF_ADDITIONAL_ITEM, PRICE_OF_ADDITIONAL_ITEM)
    action.payload.products = [...products, additionalItem]
    const totalPrice = (5 * QUANTITY_OF_EACH_ITEM * PRICE_OF_EACH_ITEM) + (QUANTITY_OF_ADDITIONAL_ITEM * PRICE_OF_ADDITIONAL_ITEM)
    const { totalPrice: totalPriceAfter, items: itemsAfter } = cartReducer(initialState, action)
    expect(totalPriceAfter).toBe(totalPrice)
    expect(itemsAfter).toEqual(action.payload.products)
  })


})