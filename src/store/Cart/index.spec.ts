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
import { getTotalPriceAndQuantity, moneyNotationToNumber } from './utils'
import cartReducer from './cart.reducer'

const makeProductCartMock = (sku: string): ProductCart => ({
  name: `test-${sku}`,
  quantity: 1,
  actual_price: 'R$ 1,00',
  installments: 'test',
  image: 'test',
  size: 'test',
  sku
})

const makeInitialStateMock = (initialQuantity: number): CartState => {
  let items: ProductCart[]
  for (let i = 0; i < initialQuantity; i++) {
    items.push(makeProductCartMock(String(i)))
  }
  const { itemsQuantity, totalPrice } = getTotalPriceAndQuantity(items)
  return ({
    itemsQuantity,
    totalPrice,
    items
  })
}

describe('Cart reducer test cases', () => {

})