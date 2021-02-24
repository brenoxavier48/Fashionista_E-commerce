import Header from './'
import { fireEvent, render } from '@testing-library/react'
import { renderWithProvider, renderWithProviderWithInitialState } from '../../test/renderHelpers'
import { storeWithCartInitialState, mockProducts } from '../../test/storeHelpers'



describe('<Header/>', () => {

  const homeButtonTestId = 'header-home-button'
  const searchButtonTestId = 'header-search-button'
  const cartButtonTestId = 'header-cart-button'
  const itemsQuantityTestId = 'header-cart-items-quantity'

  test('Should call handleClickHome function correctly', () => {
    const handleClickHome = jest.fn()
    const handleClickSearch = jest.fn()
    const handleClickShoppingCart = jest.fn()
    const { getByTestId } = render(
      renderWithProvider(
        Header, 
        { handleClickSearch, handleClickShoppingCart, handleClickHome }
      )
    )
    const homeButton = getByTestId(homeButtonTestId)  
    fireEvent.click(homeButton)
    expect(handleClickHome).toBeCalled()
    expect(handleClickSearch).not.toBeCalled()
    expect(handleClickShoppingCart).not.toBeCalled()
  })

  test('Should call handleClickSearch function correctly', () => {
    const handleClickHome = jest.fn()
    const handleClickSearch = jest.fn()
    const handleClickShoppingCart = jest.fn()
    const { getByTestId } = render(
      renderWithProvider(
        Header, 
        { handleClickSearch, handleClickShoppingCart, handleClickHome }
      )
    )
    const searchButton = getByTestId(searchButtonTestId)  
    fireEvent.click(searchButton)
    expect(handleClickHome).not.toBeCalled()
    expect(handleClickSearch).toBeCalled()
    expect(handleClickShoppingCart).not.toBeCalled()
  })

  test('Should call handleClickShoppingCart function correctly', () => {
    const handleClickHome = jest.fn()
    const handleClickSearch = jest.fn()
    const handleClickShoppingCart = jest.fn()
    const { getByTestId } = render(
      renderWithProvider(
        Header, 
        { handleClickSearch, handleClickShoppingCart, handleClickHome }
      )
    )
    const cartButton = getByTestId(cartButtonTestId)  
    fireEvent.click(cartButton)
    expect(handleClickHome).not.toBeCalled()
    expect(handleClickSearch).not.toBeCalled()
    expect(handleClickShoppingCart).toBeCalled()
  })

  test('Shouldn\'t shows the quantity of items if quantity is 0', () => {
    const handleClickHome = jest.fn()
    const handleClickSearch = jest.fn()
    const handleClickShoppingCart = jest.fn()
    const ITEMS_QUANTITY = 0
    const products = mockProducts(ITEMS_QUANTITY)
    const store = storeWithCartInitialState(products)
    const { getByTestId, getAllByTestId } = render(
      renderWithProviderWithInitialState(store)(
        Header, 
        { handleClickSearch, handleClickShoppingCart, handleClickHome }
      )
    )
    const cartButton = getByTestId(cartButtonTestId) 
    const itemsQuantityCount = cartButton.getElementsByClassName('icon-button__shoppingCart__count')
    expect(itemsQuantityCount.length).toBe(0)
  })

  test('Should shows the right quantity of items', () => {
    const handleClickHome = jest.fn()
    const handleClickSearch = jest.fn()
    const handleClickShoppingCart = jest.fn()
    const ITEMS_QUANTITY = 5
    const products = mockProducts(ITEMS_QUANTITY)
    const store = storeWithCartInitialState(products)
    const { getByTestId } = render(
      renderWithProviderWithInitialState(store)(
        Header, 
        { handleClickSearch, handleClickShoppingCart, handleClickHome }
      )
    )
    const itemsQuantity = getByTestId(itemsQuantityTestId)  
    expect(itemsQuantity.innerHTML).toBe(String(ITEMS_QUANTITY))
  })
})