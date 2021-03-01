import SearchProducts from './'
import { fireEvent, render } from '@testing-library/react'
import { renderWithProviderWithInitialState } from '../../test/renderHelpers'
import { storeWithProductsInitialState, mockSingleProductCatalog, mockProductsInitialState } from '../../test/storeHelpers'
import { store } from '../../../infra/store'
import { cleanStateProducts, addCatalog } from '../../../infra/store/Products/products.actions'

const makeTotalItemsShouldBe = (quantity: number) => `${quantity} items`

describe('<SearchProducts />', () => {

  const drawerProductTestId = 'drawer-product'
  const searchProductItemsSectionTestId = 'search-product-items-section'
  const searchProductItemsQuantityTestId = 'search-product-items-quantity'
  const searchProductInputTestId = 'search-product-input'
  let storeTest: typeof store

  afterEach(() => {
    storeTest.dispatch(cleanStateProducts())
  })

  test('Ensure SearchProduts doesn\'t show any item if the search input is empty', () => {
    storeTest = storeWithProductsInitialState(mockProductsInitialState(5))
    const renderWithProvider = renderWithProviderWithInitialState(storeTest)
    const { getByTestId } = render(renderWithProvider(SearchProducts))
    const searchProductItemsQuantity = getByTestId(searchProductItemsQuantityTestId)
    const searchProductItemsSection = getByTestId(searchProductItemsSectionTestId)
    const drawerProducts = searchProductItemsSection.getElementsByClassName('drawer-product-container')
    expect(drawerProducts.length).toBe(0)
    expect(searchProductItemsQuantity.innerHTML).toBe(makeTotalItemsShouldBe(0))
  })  

  test('Ensure SearchProduts shows the right quantity of items after input a value at search', () => {
    const VALUE_SEARCH = 'Vestido'
    const CODECOLOR_01 = `${VALUE_SEARCH} branco`
    const CODECOLOR_02 = `${VALUE_SEARCH} vermelho`
    const firstAdditionalItem = mockSingleProductCatalog(CODECOLOR_01)
    const secondAdditionalItem = mockSingleProductCatalog(CODECOLOR_02)
    storeTest = storeWithProductsInitialState(mockProductsInitialState(5))
    storeTest.dispatch(addCatalog([ firstAdditionalItem, secondAdditionalItem]))
    const renderWithProvider = renderWithProviderWithInitialState(storeTest)
    const { getByTestId, getAllByTestId } = render(renderWithProvider(SearchProducts))
    const searchProductInput = getByTestId(searchProductInputTestId)
    fireEvent.change(searchProductInput, {
      target: { 
        value: VALUE_SEARCH 
      }
    }) 

    let searchProductItemsQuantity = getByTestId(searchProductItemsQuantityTestId)
    let drawerProducts = getAllByTestId(drawerProductTestId)
    expect(drawerProducts.length).toBe(2)
    expect(searchProductItemsQuantity.innerHTML).toBe(makeTotalItemsShouldBe(2))

    fireEvent.change(searchProductInput, {
      target: { 
        value: CODECOLOR_01 
      }
    }) 
    searchProductItemsQuantity = getByTestId(searchProductItemsQuantityTestId)
    drawerProducts = getAllByTestId(drawerProductTestId)
    expect(drawerProducts.length).toBe(1)
    expect(searchProductItemsQuantity.innerHTML).toBe(makeTotalItemsShouldBe(1))
  }) 

  
})