import Cart from './'
import { fireEvent, render, cleanup, screen } from '@testing-library/react'
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

  afterEach(() => {
    storeTest.dispatch(cleanCart())
  })

  test('Ensure Cart shows the right quantity of products', () => {
    const QUANTITY = 4
    const products = mockProducts(QUANTITY)
    storeTest = storeWithCartInitialState([ ...products ])
    const renderWithInitialState = renderWithProviderWithInitialState(storeTest)
    const { getAllByTestId } = render(renderWithInitialState(Cart))
    const drawerProducts = getAllByTestId(drawerProductTestId)
    expect(drawerProducts.length).toBe(QUANTITY)
  })

  test('Ensure Cart product increase quantity correctly when press increase button', () => {
    const SKU = 'test'
    const QUANTITY = 1
    const product = mockSingleProduct(SKU, QUANTITY)
    storeTest= storeWithCartInitialState([product])
    const renderWithInitialState = renderWithProviderWithInitialState(storeTest)
    const { getByTestId } = render(renderWithInitialState(Cart))
    const increaseButton = getByTestId(increaseButtonTestId)
    fireEvent.click(increaseButton)
    const value = getByTestId(valueTestId)
    const currentValue = String(QUANTITY + 1)
    const currentTotalPrice = 
    expect(value.innerHTML).toBe(currentValue)
  })

  test('Ensure Cart product decrease quantity correctly', () => {
    const SKU = 'test'
    const QUANTITY = 2
    const product = mockSingleProduct(SKU, QUANTITY)
    storeTest= storeWithCartInitialState([product])
    const renderWithInitialState = renderWithProviderWithInitialState(storeTest)
    const { getByTestId } = render(renderWithInitialState(Cart))
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
    const { getAllByTestId, getAllByText } = render(renderWithInitialState(Cart))
    const removeItem = getAllByTestId(removeItemTestId)
    fireEvent.click(getAllByText('Remover item')[0])
    setTimeout(() => {
      const drawerProducts = getAllByTestId(drawerProductTestId)
      const currentQuantityOfDistinctProducts = QUANTITY - 1
      expect(drawerProducts.length).toBe(currentQuantityOfDistinctProducts)
    }, 400)
  })
})