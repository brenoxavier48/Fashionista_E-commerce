import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Product } from '../../domain/ProductModel'
import { selectCurrentProduct } from '../../store/Products/products.selectors'
import ProductImage from '../ProductImage'
import { SizeButton, MainButton } from '../ui/buttons'

const SingleProductView = () => {
  const product: Product = useSelector(selectCurrentProduct)
  
  return (
    <div className="product-page__container">
      <ProductImage
        className="product-page__container__img"
        src={product.image}
        alt={product.name}
      ></ProductImage>
      <div className="product-page__container__details">
        <p className="product-page__container__details__product-name">
          {product.name}
        </p>
        <div className="product-page__container__details__product-price">
          <p className="product-page__container__details__product-price__price">
            {product.actual_price}
          </p>
          <p className="product-page__container__details__product-price__installments">
            {`em até ${product.installments}`}
          </p>
        </div>
        <div className="product-page__container__details__sizes">
          <p>Escolha o tamanho</p>
          {
            product.sizes.map(({size, available}) => (
              <SizeButton
                size={size}
                available={available}
              ></SizeButton>
            ))
          }
        </div>
        <MainButton
          label="Adicionar à Sacola"
        />
      </div>
    </div>
  )
}

export default SingleProductView