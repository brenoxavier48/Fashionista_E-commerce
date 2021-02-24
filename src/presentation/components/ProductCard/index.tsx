import React, { useState, useEffect } from 'react'
import { Product } from '../../../domain/ProductModel'
import ProductImage from '../ProductImage'

type Props = {
  product: Product,
  handleClick: () => void,
  timeToAppear?: number
}

const ProductCard = ({ product, handleClick, timeToAppear }: Props) => {

  const [ isRendered, setIsRendered ] = useState<boolean>(false)

  useEffect(() => {
    if (typeof timeToAppear === 'number') {
      const result = ((5 * timeToAppear) * timeToAppear)
      const timeOut = result  < 1200 ? result :  1200
  
      const setTimeOutId = setTimeout(() => {
        setIsRendered(true)
      }, timeOut)

      return () => clearTimeout(setTimeOutId)
    }
  }, [timeToAppear])

  return (
    <article 
      className={`product-card-container
        ${ isRendered ? 'product-card-container--rendered' : '' }`
      }
      onClick={handleClick}
    >
      {
        product.discount_percentage 
        && (
          <span 
            className="product-card-container__discount"
          >
            {`-${product.discount_percentage}`}
          </span>
        )
      }
      <ProductImage
        className="product-card-container__img"
        src={product.image}
        alt={product.name}
      ></ProductImage>
      <div className="product-card-container__info">
        <p className="product-card-container__info__name">
          {product.name}
        </p>
        <p className="product-card-container__info__price">
          {product.actual_price}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
