import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Product } from '../../domain/ProductModel'
import { ProductCart } from '../../store/Cart/protocols'
import { selectCurrentProduct } from '../../store/Products/products.selectors'
import { addProductCart } from '../../store/Cart/cart.actions'
import ProductImage from '../ProductImage'
import { SizeButton, MainButton } from '../ui/buttons'

const SingleProductView = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const product: Product = useSelector(selectCurrentProduct)
  const [ itemsSelected, setItemsSelected ] = useState<boolean[]>(
    new Array(product.sizes.length).fill(false)
  )
  
  const makeCartProducts = (): ProductCart[] => {
    let products: ProductCart[] = [] 
    itemsSelected.forEach((element, index) => {
      if (element) {
        const productCart: ProductCart = Object.assign({
          name: product.name,
          actual_price: product.actual_price,
          installments: product.installments,
          image: product.image,
          size: product.sizes[index].size,
          sku: product.sizes[index].sku,
          quantity: 1,
        })
        products.push(productCart)
      }
    })
    return products
  } 

  const dispatchToCart = (): void => {
    const products: ProductCart[] = makeCartProducts()
    dispatch(addProductCart(products))
  }
  
  const handleClick = () => {
    dispatchToCart()
    history.push('/')
  }

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
          <div>
            {
              product.sizes.map(({size, available, sku}, index) => (
                <SizeButton
                  key={sku}
                  size={size}
                  available={available}
                  selected={itemsSelected[index]}
                  onClick={() => {setItemsSelected(current => {
                    const newState = [...current]
                    newState[index] = !current[index]
                    return newState
                  })}}
                ></SizeButton>
              ))
            }
          </div>
        </div>
        <div className="product-page__container__details__button">
          <MainButton
            label="Adicionar à Sacola"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  )
}

export default SingleProductView