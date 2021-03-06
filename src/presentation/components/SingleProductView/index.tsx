import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Product } from '../../../domain/ProductModel'
import { ProductCart } from '../../../domain/ProductModel'
import { selectCurrentProduct } from '../../../infra/store/Products/products.selectors'
import { addProductsCart } from '../../../infra/store/Cart/cart.actions'
import ModalSuccess from '../ModalSuccess'
import ProductImage from '../ProductImage'
import { SizeButton, MainButton } from '../ui/buttons'

const SingleProductView = () => {
  
  const dispatch = useDispatch()

  const product: Product = useSelector(selectCurrentProduct)

  const [ isSuccess, setIsSuccess ] = useState(false)
  const [ itemsSelected, setItemsSelected ] = useState<boolean[]>(
    new Array(product.sizes.length).fill(false)
  )
  const [ alertUser, setAlertUser ] = useState<boolean>(false) 
  
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

  const dispatchProductsToCart = (): void => {
    const products: ProductCart[] = makeCartProducts()
    dispatch(addProductsCart(products))
  }

  const showSuccessMessage = () => {
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
    }, 2200)
  }

  const refreshItemsSelected = () => {
    setItemsSelected(current => current.map(() => false))
  }

  const handleClickMainButton = () => {
    const isSomeOptionSelected = itemsSelected.some(element => element === true)
    if (isSomeOptionSelected) {
      dispatchProductsToCart()
      refreshItemsSelected()
      showSuccessMessage()
    } else {
      setAlertUser(true)
    }
  }

  const handleClickSizeButtons = (index: number) => {
    setAlertUser(false)
    setItemsSelected(current => {
      const mapCallback = (element: boolean, indexItemsSelected: number) => {
        return indexItemsSelected === index && element === false
      }
      const newState = current.map(mapCallback)
      return newState
    })
  }

  const handleClickCloseButton = () => setIsSuccess(false)

  return (
    <div className="product-page__container">
      {
        isSuccess
        && (
          <ModalSuccess 
            message="Item adicionado com sucesso"
            handleClickCloseButton={handleClickCloseButton}
            timeToRemove={1800}
          /> 
        )
      }
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
          <p className={`${ alertUser ? '--alert' : ''}`}>Escolha o tamanho</p>
          <div>
            {
              product.sizes.map(({size, available, sku}, index) => (
                <SizeButton
                  key={sku}
                  size={size}
                  available={available}
                  selected={itemsSelected[index]}
                  onClick={() => handleClickSizeButtons(index)}
                ></SizeButton>
              ))
            }
          </div>
        </div>
        <div className="product-page__container__details__button">
          <MainButton
            label="Adicionar à Sacola"
            onClick={handleClickMainButton}
          />
        </div>
      </div>
    </div>
  )
}

export default SingleProductView