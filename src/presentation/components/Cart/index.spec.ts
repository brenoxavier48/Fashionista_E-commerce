import Cart from './'
import { fireEvent, render, act } from '@testing-library/react'
import { renderWithProviderWithInitialState } from '../../test/renderHelpers'
import { storeWithCartInitialState, mockProducts, mockSingleProduct } from '../../test/storeHelpers'
import { store } from '../../../store'
import { cleanCart } from '../../../store/Cart/cart.actions'

const makeTotalPriceShouldBe = (totalPrice: number) => `Subtotal - R$ ${totalPrice.toFixed(2).replace('.', ',')}`

describe('<Cart />', () => {

  const valueTestId = 'counter-value'
  const increaseButtonTestId = 'counter-increase-button'
  const decreaseButtonTestId = 'counter-decrease-button'
  const removeItemTestId = 'drawer-product-cart-remove-item'
  const drawerProductTestId = 'drawer-product'
  const cartTotalPriceTestId = 'cart-total-price'
  let storeTest: typeof store

  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    storeTest.dispatch(cleanCart())
  })

  test('Ensure Cart shows the right quantity of products', () => {
    const QUANTITY = 4
    const products = mockProducts(QUANTITY)
    storeTest = storeWithCartInitialState([ ...products ])
    const renderWithInitialState = renderWithProviderWithInitialState(storeTest)
    const { getAllByTestId } = render(
      renderWithInitialState(Cart)
    )
    const drawerProducts = getAllByTestId(drawerProductTestId)
    expect(drawerProducts.length).toBe(QUANTITY)
  })

  test('Ensure Cart product increase quantity correctly when press increase button', () => {
    const SKU = 'test'
    const QUANTITY = 1
    const product = mockSingleProduct(SKU, QUANTITY)
    storeTest= storeWithCartInitialState([product])
    const renderWithInitialState = renderWithProviderWithInitialState(storeTest)
    const { getByTestId } = render(
      renderWithInitialState(Cart)
    )
    const increaseButton = getByTestId(increaseButtonTestId)
    fireEvent.click(increaseButton)
    const value = getByTestId(valueTestId)
    const currentValue = String(QUANTITY + 1)
    expect(value.innerHTML).toBe(currentValue)
  })

  test('Ensure Cart product decrease quantity correctly', () => {
    const SKU = 'test'
    const QUANTITY = 2
    const product = mockSingleProduct(SKU, QUANTITY)
    storeTest= storeWithCartInitialState([product])
    const renderWithInitialState = renderWithProviderWithInitialState(storeTest)
    const { getByTestId } = render(
      renderWithInitialState(Cart)
    )
    const increaseButton = getByTestId(decreaseButtonTestId)
    fireEvent.click(increaseButton)
    const value = getByTestId(valueTestId)
    const currentValue = String(QUANTITY - 1)
    expect(value.innerHTML).toBe(currentValue)
  })

  test('Ensure Cart product remove a item correctly', () => {
    const QUANTITY = 4
    const products = mockProducts(QUANTITY)
    storeTest = storeWithCartInitialState([ ...products ])
    const renderWithInitialState = renderWithProviderWithInitialState(storeTest)
    const { getAllByTestId } = render(
      renderWithInitialState(Cart)
    )
    const removeItem = getAllByTestId(removeItemTestId)
    fireEvent.click(removeItem[0])
    act(() => {
      jest.advanceTimersByTime(400)
    })
    const drawerProducts = getAllByTestId(drawerProductTestId)
    const currentQuantityOfDistinctProducts = QUANTITY - 1
    expect(drawerProducts.length).toBe(currentQuantityOfDistinctProducts)
  })

  test('Ensure Cart shows the right total price ', () => {
    const QUANTITY = 4
    const QUANTITY_OF_EACH_PRODUCT = 3
    const PRICE_OF_EACH_PRODUCT = 2
    const products = mockProducts(QUANTITY, QUANTITY_OF_EACH_PRODUCT, PRICE_OF_EACH_PRODUCT)
    storeTest = storeWithCartInitialState([ ...products ])
    const renderWithInitialState = renderWithProviderWithInitialState(storeTest)
    const { getByTestId } = render(
      renderWithInitialState(Cart)
    )
    const totalPrice = QUANTITY * QUANTITY_OF_EACH_PRODUCT * PRICE_OF_EACH_PRODUCT
    const cartTotalPrice = getByTestId(cartTotalPriceTestId)
    expect(cartTotalPrice.innerHTML).toBe(makeTotalPriceShouldBe(totalPrice))
  })
})