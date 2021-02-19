import SearchProducts from './'
import { fireEvent, render, cleanup, screen } from '@testing-library/react'
import { renderWithProviderWithInitialState } from '../../test/renderHelpers'
import { storeWithProductsInitialState, mockCatalog, mockProductsInitialState } from '../../test/storeHelpers'
import { store } from '../../../store'
import { cleanCart } from '../../../store/Cart/cart.actions'

const makeTotalItemsShouldBe = (quantity: number) => `${quantity} items`

describe('<SearchProducts />', () => {

  const drawerProductTestId = 'drawer-product'
  const searchProductItemsSectionTestId = 'search-product-items-section'
  const searchProductItemsQuantityTestId = 'search-product-items-quantity'

  test('Ensure SearchProduts doesn\'t show any item if the search input is empty', () => {
    const store = storeWithProductsInitialState(mockProductsInitialState(5))
    const renderWithProvider = renderWithProviderWithInitialState(store)
    const { getByTestId } = render(renderWithProvider(SearchProducts))
    const searchProductItemsQuantity = getByTestId(searchProductItemsQuantityTestId)
    const searchProductItemsSection = getByTestId(searchProductItemsSectionTestId)
    const drawerProducts = searchProductItemsSection.getElementsByClassName('drawer-product-container')
    expect(drawerProducts.length).toBe(0)
    expect(searchProductItemsQuantity.innerHTML).toBe(makeTotalItemsShouldBe(0))
  })
})