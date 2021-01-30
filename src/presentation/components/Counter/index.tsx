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

  return (
    <div className="counter__container">
      <CountButton 
        decrease 
        onClick={decrease}
        disabled={ typeof minValue === 'number' && value <= minValue }
        aria-label={`Decrementar ${whatToCount}`}
      />
      <span 
        className="counter__container__value"
        aria-label={`Valor atual de ${whatToCount}`}
      >
        {value}      
      </span>
      <CountButton 
        onClick={increase}
        disabled={ typeof maxValue === 'number' && value >= maxValue }
        aria-label={`Incrementar ${whatToCount}`}
      />
    </div>
  )
}

export default Counter