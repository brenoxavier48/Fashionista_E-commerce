import React from 'react'
import { Product } from '../../../domain/ProductModel'
import { useHistory, Link } from 'react-router-dom'
import {  } from 'react-router'

import { useSelector, useDispatch } from 'react-redux'
import { selectAllProducts } from '../../../store/Products/products.selectors'
import { addCurrentProduct } from '../../../store/Products/products.actions'
import ProductCard from '../ProductCard'


const ProductCatalog = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const products: Product[] = useSelector(selectAllProducts)

  return (
    <section className="products-catalog__container">
      {
        products
        && products.length > 0
        && (
          <>
            <div className="products-catalog__container__header">
              <p className="products-catalog__container__header__count">{`${products.length} items`}</p>
            </div>
            <div className="products-catalog__container__products">
              {
                products.map( product => (
                  <ProductCard 
                    key={product.code_color}
                    product={product}
                    handleClick={() => {
                      dispatch(addCurrentProduct(product))
                      history.push('/SingleProductView')
                    }}
                  ></ProductCard>
                ))
              }
            </div>
          </>
        )
      }
      
    </section>
  )
}

export default ProductCatalog