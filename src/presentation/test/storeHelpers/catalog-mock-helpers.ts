import { Product } from '../../../domain/ProductModel'
import { ProductsState } from '../../../infra/store/Products/protocols'

export const mockSingleProductCatalog = (code_color: string): Product => ({
  name: `test-${code_color}`,
  style: 'test',
  code_color,
  color_slug: 'test',
  color: 'test',
  on_sale: false,
  actual_price: `R$ 01,00`,
  regular_price: `R$ 01,00`,
  installments: 'test',
  discount_percentage: 'test',
  image: 'test',
  sizes: [],
})

export const mockCatalog = (quantity: number): Product[] => {
  let items: Product[] = []
  for (let i = 0; i < quantity; i++) {
    items.push(mockSingleProductCatalog(String(i)))
  }
  return items
}

export const mockProductsInitialState = (initialQuantity: number): ProductsState => {
  let items = mockCatalog(initialQuantity)
  return ({
    currentProduct: <Product>{},
    filter: '',
    catalog: items
  })
}
