import Cart from './'
import { fireEvent, render } from '@testing-library/react'
import { renderWithProvider, renderWithProviderWithInitialState } from '../../test/renderHelpers'
import { storeWithCartInitialState, mockProducts, mockSingleProduct } from '../../test/storeHelpers'

describe('<Cart />', () => {

  const valueTestId = 'counter-value'
  const increaseButtonTestId = 'counter-increase-button'
  const decreaseButtonTestId = 'counter-decrease-button'
  const drawerProductTestId = 'drawer-product'

  test('Ensure Cart shows the right quantity of products', () => {
    const QUANTITY = 4
    const products = mockProducts(QUANTITY)
    const store = storeWithCartInitialState([ ...products ])
    const renderWithInitialState = renderWithProviderWithInitialState(store)
    const { getAllByTestId } = render(renderWithInitialState(Cart, { product: products[0] }))
    const drawerProducts = getAllByTestId(drawerProductTestId)
    expect(drawerProducts.length).toBe(QUANTITY)
  })
})