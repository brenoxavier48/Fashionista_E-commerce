import Header from './'
import { fireEvent, render } from '@testing-library/react'
import { renderWithProvider, renderWithProviderWithInitialState } from '../../test/renderHelpers'
import { storeWithCartInitialState, mockProducts } from '../../test/storeHelpers'



describe('<Header/>', () => {

  const searchButtonTestId = 'header-search-button'
  const cartButtonTestId = 'header-cart-button'
  const itemsQuantityTestId = 'header-cart-items-quantity'

  test('Should call handleClickSearch function correctly', () => {
    const handleClickSearch = jest.fn()
    const handleClickShoppingCart = jest.fn()
    const { getByTestId } = render(
      renderWithProvider(
        Header, 
        { handleClickSearch, handleClickShoppingCart }
      )
    )
    const searchButton = getByTestId(searchButtonTestId)  
    fireEvent.click(searchButton)
    expect(handleClickSearch).toBeCalled()
    expect(handleClickShoppingCart).not.toBeCalled()
  })

  test('Should call handleClickShoppingCart function correctly', () => {
    const handleClickSearch = jest.fn()
    const handleClickShoppingCart = jest.fn()
    const { getByTestId } = render(
      renderWithProvider(
        Header, 
        { handleClickSearch, handleClickShoppingCart }
      )
    )
    const cartButton = getByTestId(cartButtonTestId)  
    fireEvent.click(cartButton)
    expect(handleClickSearch).not.toBeCalled()
    expect(handleClickShoppingCart).toBeCalled()
  })

  test('Shouldn\'t shows the quantity of items if quantity is 0', () => {
    const handleClickSearch = jest.fn()
    const handleClickShoppingCart = jest.fn()
    const ITEMS_QUANTITY = 0
    const products = mockProducts(ITEMS_QUANTITY)
    const store = storeWithCartInitialState(products)
    const { getByTestId, getAllByTestId } = render(
      renderWithProviderWithInitialState(store)(
        Header, 
        { handleClickSearch, handleClickShoppingCart }
      )
    )
    const cartButton = getByTestId(cartButtonTestId) 
    const itemsQuantityCount = cartButton.getElementsByClassName('icon-button__shoppingCart__count')
    expect(itemsQuantityCount.length).toBe(0)
  })

  test('Should shows the right quantity of items', () => {
    const handleClickSearch = jest.fn()
    const handleClickShoppingCart = jest.fn()
    const ITEMS_QUANTITY = 5
    const products = mockProducts(ITEMS_QUANTITY)
    const store = storeWithCartInitialState(products)
    const { getByTestId } = render(
      renderWithProviderWithInitialState(store)(
        Header, 
        { handleClickSearch, handleClickShoppingCart }
      )
    )
    const itemsQuantity = getByTestId(itemsQuantityTestId)  
    expect(itemsQuantity.innerHTML).toBe(String(ITEMS_QUANTITY))
  })
})