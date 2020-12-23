import React, { MouseEvent } from 'react'
import { CountButton } from '../ui/buttons'

type Props = {
  value: number,
  decrease(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void,
  increase(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void
}

const Counter = ({value, decrease, increase}: Props) => {
  return (
    <div className="counter__container">
      <CountButton 
        decrease 
        onClick={decrease}
        disabled={value <= 0}
      />
      <p className="counter__container__value">{value}</p>
      <CountButton onClick={increase}/>
    </div>
  )
}

export default Counter