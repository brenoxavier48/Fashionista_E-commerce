import React from 'react'
import { Product } from '../../../domain/ProductModel'
import ProductImage from '../ProductImage'

type Props = {
  product: Product,
  handleClick: () => void
}

const ProductCard = ({ product, handleClick }: Props) => {
  return (
    <article 
      className="product-card-container"
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
