import { 
 ProductsState,
 AddCatalogAction,
 AddCurrentProductAction,
 AddFilterAction
} from './protocols'
import { Product, OptionSize } from '../../domain/ProductModel'
import productsReducer from './products.reducer'

const mockSingleProduct = (code_color: string): Product => ({
  name: `test-${code_color}`,
  style: 'test',
  code_color,
  color_slug: 'test',
  color: 'test',
  on_sale: false,
  regular_price: 'test',
  actual_price: 'test',
  discount_percentage: 'test', 
  installments: 'test',
  image: 'test',
  sizes: []
})

const mockProducts = (quantity: number): Product[] => {
  let items: Product[] = []
  for (let i = 0; i < quantity; i++) {
    items.push(mockSingleProduct(String(i)))
  }
  return items
}

const mockInitialState = (initialQuantity: number): ProductsState => {
  let catalog = mockProducts(initialQuantity)
  return ({  
    filter: '',
    catalog,
    currentProduct: mockSingleProduct('empty')
  })
}

describe('Products reducer', () => {

  let initialState: ProductsState
  let addCatalogAction: AddCatalogAction 
  let AddCurrentProductAction: AddCurrentProductAction 
  let addFilterAction: AddFilterAction 

  beforeEach(() => {
    initialState = mockInitialState(0)
    addCatalogAction = {
      type: 'ADD_CATALOG',
      payload: {
        catalog: []
      }
    }
    AddCurrentProductAction  = {
      type: 'ADD_CURRENT_PRODUCT',
      payload: {
        product: Object.create({})
      }
    }
    addFilterAction = {
      type: 'ADD_FILTER_PRODUCT',
      payload: {
        filter: ''
      }
    }
  })

  describe('Add products test cases', () => {
    test('Should add products to catalog correctly', () => {
      const state = productsReducer(initialState, addCatalogAction)
      expect(state.catalog).toEqual([])
      const products = mockProducts(5)
      addCatalogAction.payload.catalog = products
      const { catalog } = productsReducer(state, addCatalogAction)
      expect(catalog).not.toEqual([])
      expect(catalog).toEqual(products)
    })
  })
})