import Header from './'
import { fireEvent, render } from '@testing-library/react'

describe('<Header/>', () => {

  const searchButtonTestId = 'header-search-button'
  const cartButtonTestId = 'header-cart-button'

  test('Should call handleClickSearch function correctly', () => {
    const VALUE = 1
    const handleClickSearch = jest.fn()
    const handleClickShoppingCart = jest.fn()
    const { getByTestId } = render(Header({ handleClickSearch, handleClickShoppingCart }))
    const searchButton = getByTestId(searchButtonTestId)  
    fireEvent.click(searchButton)
    expect(handleClickSearch).toBeCalled()
    expect(handleClickShoppingCart).not.toBeCalled()
  })
})