import React, { useState, useEffect } from 'react'
import ProductImage from '../ProductImage'
import Counter from '../Counter'

type Props = {
  type: "Product" | "ProductCart",
  image: string,
  name: string,
  size?: string,
  quantity?: number,
  actual_price: string,
  installments: string,
  isRemoved?: boolean,
  timeToAppear?: number,
  handleClick?: () => void,
  handleRemoveItem?: () => void,
  heandleIncrease?: () => void,
  heandleDecrease?: () => void,
}

const DrawerProductCard = ({ 
  type, 
  image,
  name,
  size,
  quantity,
  actual_price,
  installments,
  isRemoved,
  timeToAppear, 
  handleClick,
  handleRemoveItem, 
  heandleIncrease,
  heandleDecrease }: Props) => {

  const [ isRendered, setIsRendered ] = useState<boolean>(false)

  useEffect(() => {
    if (typeof timeToAppear === 'number') {
      const result = (200 + ((50 + (15 * timeToAppear)) * timeToAppear))
      const timeOut = result  < 1200 ? result :  1200
      const setTimeoutId = setTimeout(() => {
        setIsRendered(true)
      }, timeOut)

      return () => clearTimeout(setTimeoutId)
    }
  })

  return (
    <article 
      className={`drawer-product-container 
        ${ isRendered ? 'drawer-product-container--rendered' : '' }
        ${ isRemoved ? 'drawer-product-container--removed' : '' }`
      }
      onClick={ handleClick || (() => {}) }
      data-testid="drawer-product"
    >
      <div className="drawer-product-container__image">
        <ProductImage
          className="drawer-product-container__image__img"
          src={image}
          alt={name}
        />
        { type === 'ProductCart' && (
            <span
              onClick={handleRemoveItem}
              aria-label="Remover item"
              data-testid="drawer-product-cart-remove-item"
            >Remover item</span>
        )}
      </div>
      <div className="drawer-product-container__info">
        <p 
          className="drawer-product-container__info__name"
          aria-label="Nome do produto"
        >
          {name}
        </p>
        { type === 'ProductCart' && (
          <>
            <p 
              className="drawer-product-container__info__size"
              aria-label="Tamanho do produto"
            >
              {`Tam: ${size}`}
            </p>
            <Counter
              whatToCount={`quantidade do produto ${name}`}
              value={ quantity || 0 }
              minValue={1}
              increase={ heandleIncrease || (() => {}) }
              decrease={ heandleDecrease || (() => {}) }
            />
          </> 
        )}
      </div>
      <div className="drawer-product-container__price-info">
        <p 
          className="drawer-product-container__price-info__price"
          aria-label="Preço do produto"
        >
          {actual_price}
        </p>
        <p 
          className="drawer-product-container__price-info__installments"
          aria-label="Parcelas possíveis para o preço do produto"
        >
          {installments}
        </p>
      </div>
    </article>
  )
}

export default DrawerProductCard