import React, { useState, useEffect, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectFilteredProducts } from '../../../store/Products/products.selectors'
import { addFilterProduct } from '../../../store/Products/products.actions'
import { Product } from '../../../domain/ProductModel'
import { InputSearch } from '../ui/inputs'
import SearchProductCard from '../SearchProductCard'

const CarSearchProductst = () => {

  const dispatch = useDispatch()
  const products: Product[] = useSelector(selectFilteredProducts)
  const [ productsToRender, setProductsToRender] = useState<Product[]>([])

  const [ inputValue, setInputValue ] = useState('')
  
  useEffect(() => {
    setProductsToRender([])
    dispatch(addFilterProduct(inputValue))
    setProductsToRender([...products])
  }, [inputValue])

  useEffect(() => {
    setProductsToRender([])
    setProductsToRender([...products])
  }, [products])

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
          productsToRender.length > 0 &&
          productsToRender.map((product, index) => <SearchProductCard timeToAppear={index} key={product.code_color} product={product}/>)
        }
      </section>
    </div>
  )
}

export default CarSearchProductst