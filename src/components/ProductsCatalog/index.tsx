import React from 'react'
import { Product } from '../../domain/ProductModel'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllProducts } from '../../store/Products/products.selectors'
import ProductCard from '../ProductCard'


const ProductCatalog = () => {

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
                    product={product}
                    handleClick={() => {
                      
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