import { 
  ADD_PRODUCTS_CART, 
  UPDATE_QUANTITY_PRODUCT_CART, 
  REMOVE_PRODUCT_CART, 
  AddProductsCartAction, 
  UpdateQuantityProductCartAction,
  RemoveProductCartAction,
  UpdateQuantityProductCartPayload,
  ProductCart 
} from './protocols'

export const addProductsCart = (products: ProductCart[]): AddProductsCartAction => ({
  type: ADD_PRODUCTS_CART,
  payload: { 
    products 
  }
})

export const updateQuantityProductCart = (updateObject: UpdateQuantityProductCartPayload): UpdateQuantityProductCartAction => ({
  type: UPDATE_QUANTITY_PRODUCT_CART,
  payload: updateObject
})


export const removeProductCart = (sku: string): RemoveProductCartAction => ({
  type: REMOVE_PRODUCT_CART,
  payload: { 
    sku 
  }
})