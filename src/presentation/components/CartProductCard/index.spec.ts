import CartProductCard from './'
import { render } from '@testing-library/react'
import { renderWithProviderWithInitialState } from '../../test/renderHelpers'
import { storeWithCartInitialState, mockSingleProduct } from '../../test/storeHelpers'

describe('<CartProductCard />', () => {

  const valueTestId = 'counter-value'
  const increaseButtonTestId = 'counter-increase-button'
  const decreaseButtonTestId = 'counter-decrease-button'

  test('Ensure CartProductCard shows the right quantity', () => {
    const SKU = 'test'
    const QUANTITY = 1
    const products = [ mockSingleProduct(SKU, QUANTITY) ]
    const store = storeWithCartInitialState([ ...products ])
    const renderWithInitialState = renderWithProviderWithInitialState(store)
    const { getByTestId } = render(
      renderWithInitialState(
        CartProductCard, 
        { product: products[0] }
      )
    )
    const value = getByTestId(valueTestId)
    expect(value.innerHTML).toBe(String(QUANTITY))
  })
})