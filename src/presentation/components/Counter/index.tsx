import React, { MouseEvent } from 'react'
import { CountButton } from '../ui/buttons'

type Props = {
  value: number,
  minValue?: number,
  maxValue?: number,
  decrease(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void,
  increase(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void
}

const Counter = ({
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
      />
      <p className="counter__container__value">{value}</p>
      <CountButton 
        onClick={increase}
        disabled={ typeof maxValue === 'number' && value >= maxValue }
      />
    </div>
  )
}

export default Counter