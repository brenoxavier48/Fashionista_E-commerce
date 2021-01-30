import React, { useState } from 'react'
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

  if (typeof timeToAppear === 'number') {
    const result = (200 + ((50 + (15 * timeToAppear)) * timeToAppear))
    const timeOut = result  < 1200 ? result :  1200
    setTimeout(() => {
      setIsRendered(true)
    }, timeOut)
  }

  return (
    <article 
      className={`drawer-product-container 
        ${ isRendered ? 'drawer-product-container--rendered' : '' }
        ${ isRemoved ? 'drawer-product-container--removed' : '' }`
      }
      onClick={ handleClick || (() => {}) }
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
            >Remover item</span>
        )}
      </div>
      <div className="drawer-product-container__info">
        <p className="drawer-product-container__info__name">
          {name}
        </p>
        { type === 'ProductCart' && (
          <>
            <p className="drawer-product-container__info__size">
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
        <p className="drawer-product-container__price-info__price">
          {actual_price}
        </p>
        <p className="drawer-product-container__price-info__installments">
          {installments}
        </p>
      </div>
    </article>
  )
}

export default DrawerProductCard