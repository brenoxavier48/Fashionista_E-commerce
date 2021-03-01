import React, { useState, useEffect, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilteredProducts } from '../../../infra/store/Products/products.selectors'
import { addFilterProduct } from '../../../infra/store/Products/products.actions'
import { Product } from '../../../domain/ProductModel'
import { InputSearch } from '../ui/inputs'
import SearchProductCard from '../SearchProductCard'

type Props = {
  closeDrawer?: () => void
}

const SearchProducts = ({ closeDrawer }: Props) => {

  const dispatch = useDispatch()
  const products: Product[] = useSelector(selectFilteredProducts)

  const [ inputValue, setInputValue ] = useState('')
  
  useEffect(() => {
    dispatch(addFilterProduct(inputValue))
  }, [inputValue, dispatch])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  return (
    <div 
      className='search-container'
    >
      <InputSearch
        onChange={handleChange}
        value={inputValue}
        aria-label="Pesquisar item"
        data-testid="search-product-input"
      ></InputSearch>
      <section 
        className="search-container__products"
        aria-label="Items"
        data-testid="search-product-items-section"
      >
        <p 
          className="search-container__products__quantity"
          aria-label="Quantidade de itens"
          data-testid="search-product-items-quantity"
        >
          {`${products.length} items`}
        </p>
        {
          products.length > 0 &&
          products.map((product, index) => (
            <div 
              key={product.code_color}  
              className="search-container__products__article"
            >
              <SearchProductCard 
                timeToAppear={index} 
                product={product}
                closeDrawer={closeDrawer || (() => {})}
              />
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default SearchProducts