import React, { MouseEvent } from 'react'
import { CountButton } from '../ui/buttons'

type Props = {
  whatToCount: string,
  value: number,
  minValue?: number,
  maxValue?: number,
  decrease(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void,
  increase(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void
}

const Counter = ({
  whatToCount,
  value,
  minValue,
  maxValue,
  decrease, 
  increase }: Props) => {
  
  
  if(typeof minValue === 'number' && typeof maxValue === 'number' && maxValue < minValue) {
    throw 'maxValue need to be bigger then minValue'
  }
  
  return (
    <div className="counter__container">
      <CountButton 
        decrease 
        onClick={decrease}
        disabled={ typeof minValue === 'number' && value <= minValue }
        aria-label={`Decrementar ${whatToCount}`}
        data-testid="counter-decrease-button"
      />
      <span 
        className="counter__container__value"
        aria-label={`Valor atual de ${whatToCount}`}
        data-testid="counter-value"

      >
        {
          (typeof minValue === 'number' && value < minValue)
          ? minValue
          : (typeof maxValue === 'number' && value > maxValue)
          ? maxValue
          : value
        }      
      </span>
      <CountButton 
        onClick={increase}
        disabled={ typeof maxValue === 'number' && value >= maxValue }
        aria-label={`Incrementar ${whatToCount}`}
        data-testid="counter-increase-button"
      />
    </div>
  )
}

export default Counter