import React, { ImgHTMLAttributes } from 'react'

const ProductImage = ({ src, alt, ...otherProps }: ImgHTMLAttributes<HTMLImageElement>) => (
  <>
    {
      src 
      ? (
        <img 
          {...otherProps}
          src={src}
          alt={alt}
        ></img>
      )
      : (
        <div {...otherProps}>
          <p>Image Not Found</p>
        </div>
      )
    }
  </>
)

export default ProductImage
