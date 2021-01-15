import React, { useState, useEffect, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilteredProducts } from '../../../store/Products/products.selectors'
import { addFilterProduct } from '../../../store/Products/products.actions'
import { Product } from '../../../domain/ProductModel'
import { InputSearch } from '../ui/inputs'
import SearchProductCard from '../SearchProductCard'

const CarSearchProductst = () => {

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
    <div className='search-container'>
      <InputSearch
        onChange={handleChange}
        value={inputValue}
      ></InputSearch>
      <section className="search-container__products">
        {
          products.length > 0 &&
          products.map((product, index) => <SearchProductCard timeToAppear={index} key={product.code_color} product={product}/>)
        }
      </section>
    </div>
  )
}

export default CarSearchProductst