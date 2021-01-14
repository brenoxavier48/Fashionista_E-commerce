import React, { useState, useEffect, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilteredProducts } from '../../../store/Products/products.selectors'
import { addFilterProduct } from '../../../store/Products/products.actions'
import { Product } from '../../../domain/ProductModel'
import { InputSearch } from '../ui/inputs'

const CarSearchProductst = () => {

  const dispatch = useDispatch()
  const products: Product[] = useSelector(selectFilteredProducts)

  const [ inputValue, setInputValue ] = useState('')
  
  useEffect(() => {
    dispatch(addFilterProduct(inputValue))
  }, [inputValue])

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
          products.map((product, index) => <p>{product.name}</p>)
          // products.map((product, index) => <searchProductCard timeToAppear={index} key={product.sku} product={product}/>)
        }
      </section>
    </div>
  )
}

export default CarSearchProductst