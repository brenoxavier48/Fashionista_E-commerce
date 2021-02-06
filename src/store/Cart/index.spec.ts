import { 
  CartState, 
  ProductCart, 
  AddProductsCartAction,
  RemoveProductCartAction,
  UpdateQuantityProductCartAction
} from './protocols'
import { getTotalPriceAndQuantity } from './helpers'
import cartReducer from './cart.reducer'
import { 
  mockProducts, 
  mockSingleProduct, 
  mockInitialState 
} from '../../presentation/test/storeHelpers'


describe('Cart helpers', () => {
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

describe('Cart reducer', () => {

  let initialState: CartState
  let addAction: AddProductsCartAction 
  let removeAction: RemoveProductCartAction 
  let updateQuantityAction: UpdateQuantityProductCartAction 

  beforeEach(() => {
    initialState = mockInitialState(0)
    addAction = {
      type: 'ADD_PRODUCTS_CART',
      payload: {
        products: []
      }
    }
    removeAction  = {
      type: 'REMOVE_PRODUCT_CART',
      payload: {
        sku: ''
      }
    }
    updateQuantityAction = {
      type: 'UPDATE_QUANTITY_PRODUCT_CART',
      payload: {
        sku: '',
        quantity: 1
      }
    }
  })

  describe('Add products test cases', () => {
    test('Should return a empty items array, 0 for the itemsQuantity and 0 for the totalPrice if there are no items', () => {
      const { itemsQuantity, totalPrice, items } = cartReducer(initialState, addAction)
      expect(itemsQuantity).toBe(0)
      expect(totalPrice).toBe(0)
      expect(items).toEqual([])
    })
  
    test('Should return the right quantity after add products', () => {
      const QUANTITY_OF_EACH_ITEM = 2
      const QUANTITY_OF_ADDITIONAL_ITEM = 7
      const state = cartReducer(initialState, addAction)
      expect(state.itemsQuantity).toBe(0)
      expect(state.items).toEqual([])
      const products = mockProducts(5, QUANTITY_OF_EACH_ITEM)
      const additionalItem = mockSingleProduct('test', QUANTITY_OF_ADDITIONAL_ITEM)
      addAction.payload.products = [...products, { ...additionalItem }]
      const totalOfDifferentItems = addAction.payload.products.length
      const totalItems = (5 * QUANTITY_OF_EACH_ITEM) + QUANTITY_OF_ADDITIONAL_ITEM
      const { itemsQuantity: itemsQuantityAfter, items: itemsAfter } = cartReducer(state, addAction)
      expect(itemsQuantityAfter).toBe(totalItems)
      expect(itemsAfter.length).toEqual(totalOfDifferentItems)
    })

    test('Should return the right quantity after add products with sku wich is already in cart', () => {
      const SKU_ALREDY_IN_CART = 'repeated-sku'
      const QUANTITY_OF_EACH_ITEM = 2
      const QUANTITY_OF_ADDITIONAL_ITEM = 3
      const SECOND_QUANTITY_OF_ADDITIONAL_ITEM = 7
      const products = mockProducts(5, QUANTITY_OF_EACH_ITEM)
      const additionalItem = mockSingleProduct(SKU_ALREDY_IN_CART, QUANTITY_OF_ADDITIONAL_ITEM)
      addAction.payload.products = [...products, { ...additionalItem }]
      const totalOfDifferentItems = addAction.payload.products.length
      const totalItems = (5 * QUANTITY_OF_EACH_ITEM) + QUANTITY_OF_ADDITIONAL_ITEM
      
      const state = cartReducer(initialState, addAction)
      const { itemsQuantity: itemsQuantityBefore, items: itemsBefore } = state
      expect(itemsQuantityBefore).toBe(totalItems)
      expect(itemsBefore.length).toEqual(totalOfDifferentItems)

      additionalItem.quantity = SECOND_QUANTITY_OF_ADDITIONAL_ITEM
      addAction.payload.products = [{ ...additionalItem }]
      const { itemsQuantity: itemsQuantityAfter, items: itemsAfter } = cartReducer(state, addAction)
      const totalItemsAfter = itemsQuantityBefore + SECOND_QUANTITY_OF_ADDITIONAL_ITEM
      expect(itemsAfter.length).toEqual(totalOfDifferentItems)
      expect(itemsQuantityAfter).toBe(totalItemsAfter)
    })
  
    test('Should return the right price after add products', () => {
      const PRICE_OF_EACH_ITEM = 3
      const QUANTITY_OF_EACH_ITEM = 2
      const PRICE_OF_ADDITIONAL_ITEM = 8
      const QUANTITY_OF_ADDITIONAL_ITEM = 7
      const state = cartReducer(initialState, addAction)
      expect(state.totalPrice).toBe(0)
      const products = mockProducts(5, QUANTITY_OF_EACH_ITEM, PRICE_OF_EACH_ITEM)
      const additionalItem = mockSingleProduct('test', QUANTITY_OF_ADDITIONAL_ITEM, PRICE_OF_ADDITIONAL_ITEM)
      addAction.payload.products = [...products, { ...additionalItem }]
      const totalPrice = (5 * QUANTITY_OF_EACH_ITEM * PRICE_OF_EACH_ITEM) + (QUANTITY_OF_ADDITIONAL_ITEM * PRICE_OF_ADDITIONAL_ITEM)
      const { totalPrice: totalPriceAfter, items: itemsAfter } = cartReducer(state, addAction)
      expect(totalPriceAfter).toBe(totalPrice)
      expect(itemsAfter).toEqual(addAction.payload.products)
    })

    test('Should return the right price after add products with sku wich is already in cart', () => {
      const SKU_ALREDY_IN_CART = 'repeated-sku'
      const PRICE_OF_EACH_ITEM = 3
      const QUANTITY_OF_EACH_ITEM = 2
      const PRICE_OF_ADDITIONAL_ITEM = 8
      const QUANTITY_OF_ADDITIONAL_ITEM = 7
      const SECOND_QUANTITY_OF_ADDITIONAL_ITEM = 2
      const products = mockProducts(5, QUANTITY_OF_EACH_ITEM, PRICE_OF_EACH_ITEM)
      const additionalItem = mockSingleProduct(SKU_ALREDY_IN_CART, QUANTITY_OF_ADDITIONAL_ITEM, PRICE_OF_ADDITIONAL_ITEM)
      addAction.payload.products = [...products, { ...additionalItem }]
      const totalPriceExpectedBefore = (5 * QUANTITY_OF_EACH_ITEM * PRICE_OF_EACH_ITEM) + (QUANTITY_OF_ADDITIONAL_ITEM * PRICE_OF_ADDITIONAL_ITEM)
      
      const state = cartReducer(initialState, addAction)
      const { totalPrice: totalPriceBefore } = state
      expect(totalPriceBefore).toBe(totalPriceExpectedBefore)

      additionalItem.quantity = SECOND_QUANTITY_OF_ADDITIONAL_ITEM
      addAction.payload.products = [{ ...additionalItem }]
      const { totalPrice: totalPriceAfter } = cartReducer(state, addAction)
      const totalPriceExpectedAfter = totalPriceExpectedBefore + (SECOND_QUANTITY_OF_ADDITIONAL_ITEM * PRICE_OF_ADDITIONAL_ITEM)
      expect(totalPriceAfter).toBe(totalPriceExpectedAfter)
    })
  })

  describe('Remove products test cases', () => {
    test('Should remove an item correctly', () => {
      const SKU_TO_REMOVE = 'test-remove'
      const ITEMS_QUANTITY = 5
      const products = mockProducts(ITEMS_QUANTITY)
      products[0].sku = SKU_TO_REMOVE
      addAction.payload.products = products
      removeAction.payload.sku = SKU_TO_REMOVE
      const state = cartReducer(initialState, addAction)
      const { items }  = cartReducer(state, removeAction)
      const hasSkuRemoved = items.some(product => product.sku === SKU_TO_REMOVE)
      expect(items.length).toBe(ITEMS_QUANTITY - 1)
      expect(hasSkuRemoved).toBeFalsy()
    })

    test('Should return the right quantity after remove an item', () => {
      const QUANTITY_OF_PRODUCT_TO_REMOVE = 5
      const SKU_TO_REMOVE = 'test-remove'
      const ITEMS_QUANTITY = 5
      const QUANTITY_OF_EACH_ITEM = 3
      const products = mockProducts(ITEMS_QUANTITY, QUANTITY_OF_EACH_ITEM)
      const productToRemove = mockSingleProduct(SKU_TO_REMOVE, QUANTITY_OF_PRODUCT_TO_REMOVE)
      addAction.payload.products = [...products, productToRemove]
      removeAction.payload.sku = SKU_TO_REMOVE
      const state = cartReducer(initialState, addAction)
      const { itemsQuantity }  = cartReducer(state, removeAction)
      const itemsQuantityExpected = state.itemsQuantity - QUANTITY_OF_PRODUCT_TO_REMOVE
      expect(itemsQuantity).toBe(itemsQuantityExpected)
    })

    test('Should return the right price after remove an item', () => {
      const QUANTITY_OF_PRODUCT_TO_REMOVE = 5
      const PRICE_OF_PRODUCT_TO_REMOVE = 3
      const SKU_TO_REMOVE = 'test-remove'
      const ITEMS_QUANTITY = 5
      const QUANTITY_OF_EACH_ITEM = 3
      const PRICE_OF_EACH_ITEM = 3
      const products = mockProducts(ITEMS_QUANTITY, QUANTITY_OF_EACH_ITEM, PRICE_OF_EACH_ITEM)
      const productToRemove = mockSingleProduct(SKU_TO_REMOVE, QUANTITY_OF_PRODUCT_TO_REMOVE, PRICE_OF_PRODUCT_TO_REMOVE)
      addAction.payload.products = [...products, productToRemove]
      removeAction.payload.sku = SKU_TO_REMOVE
      const state = cartReducer(initialState, addAction)
      const { totalPrice }  = cartReducer(state, removeAction)
      const totalPriceExpected = state.totalPrice - (QUANTITY_OF_PRODUCT_TO_REMOVE * PRICE_OF_PRODUCT_TO_REMOVE)
      expect(totalPrice).toBe(totalPriceExpected)
    })
  })

  describe('Update products quantity test cases', () => {
    test('Should update an item quantity correctly', () => {
      const updateTestCase = (updateQuantity: -1 | 1) => {
        const UPDATE_QUANTITY = updateQuantity
        const SKU_TO_UPDATE = 'test-update'
        const ITEMS_QUANTITY = 5
        const QUANTITY_OF_EACH_ITEM = 3
        const products = mockProducts(ITEMS_QUANTITY, QUANTITY_OF_EACH_ITEM)
        products[0].sku = SKU_TO_UPDATE
        addAction.payload.products = products
        updateQuantityAction.payload.sku = SKU_TO_UPDATE
        updateQuantityAction.payload.quantity = UPDATE_QUANTITY
        const state = cartReducer(initialState, addAction)
        const { items }  = cartReducer(state, updateQuantityAction)
        const productUpdated = items.find(product => product.sku === SKU_TO_UPDATE)
        const quantityExpected = QUANTITY_OF_EACH_ITEM + UPDATE_QUANTITY
        return {
          productUpdated,
          quantityExpected
        }
      }
      const { productUpdated: productUpdatedLessOne, quantityExpected: quantityExpectedLessOne } = updateTestCase(-1)
      const { productUpdated: productUpdatedMoreOne, quantityExpected: quantityExpectedMoreOne } = updateTestCase(+1)
      expect(productUpdatedLessOne?.quantity).toBe(quantityExpectedLessOne)
      expect(productUpdatedMoreOne?.quantity).toBe(quantityExpectedMoreOne)
    })

    test('Should return the right total quantity after update an item', () => {
      const updateTestCase = (updateQuantity: -1 | 1) => {
        const UPDATE_QUANTITY = updateQuantity
        const SKU_TO_UPDATE = 'test-update'
        const ITEMS_QUANTITY = 5
        const QUANTITY_OF_EACH_ITEM = 3
        const products = mockProducts(ITEMS_QUANTITY, QUANTITY_OF_EACH_ITEM)
        products[0].sku = SKU_TO_UPDATE
        addAction.payload.products = products
        updateQuantityAction.payload.sku = SKU_TO_UPDATE
        updateQuantityAction.payload.quantity = UPDATE_QUANTITY
        const state = cartReducer(initialState, addAction)
        const { itemsQuantity }  = cartReducer(state, updateQuantityAction)
        const quantityExpected = (QUANTITY_OF_EACH_ITEM * ITEMS_QUANTITY) + UPDATE_QUANTITY
        return {
          itemsQuantity,
          quantityExpected
        }
      }
      const { itemsQuantity: itemsQuantityLessOne, quantityExpected: quantityExpectedLessOne } = updateTestCase(-1)
      const { itemsQuantity: itemsQuantityMoreOne, quantityExpected: quantityExpectedMoreOne } = updateTestCase(+1)
      expect(itemsQuantityLessOne).toBe(quantityExpectedLessOne)
      expect(itemsQuantityMoreOne).toBe(quantityExpectedMoreOne)
    })

    test('Should return the right total price after update an item', () => {
      const updateTestCase = (updateQuantity: -1 | 1) => {
        const UPDATE_QUANTITY = updateQuantity
        const SKU_TO_UPDATE = 'test-update'
        const ITEMS_QUANTITY = 5
        const QUANTITY_OF_EACH_ITEM = 3
        const PRICE_OF_EACH_ITEM = 4
        const products = mockProducts(ITEMS_QUANTITY, QUANTITY_OF_EACH_ITEM, PRICE_OF_EACH_ITEM)
        products[0].sku = SKU_TO_UPDATE
        addAction.payload.products = products
        updateQuantityAction.payload.sku = SKU_TO_UPDATE
        updateQuantityAction.payload.quantity = UPDATE_QUANTITY
        const state = cartReducer(initialState, addAction)
        const { totalPrice }  = cartReducer(state, updateQuantityAction)
        const totalPriceExpected = (QUANTITY_OF_EACH_ITEM * ITEMS_QUANTITY * PRICE_OF_EACH_ITEM) + (UPDATE_QUANTITY * PRICE_OF_EACH_ITEM)
        return {
          totalPrice,
          totalPriceExpected
        }
      }
      const { totalPrice: totalPriceLessOne, totalPriceExpected: totalPriceExpectedLessOne } = updateTestCase(-1)
      const { totalPrice: totalPriceMoreOne, totalPriceExpected: totalPriceExpectedMoreOne } = updateTestCase(+1)
      expect(totalPriceLessOne).toBe(totalPriceExpectedLessOne)
      expect(totalPriceMoreOne).toBe(totalPriceExpectedMoreOne)
    })

  })
})
