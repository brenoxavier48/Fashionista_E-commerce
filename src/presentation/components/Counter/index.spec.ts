import Counter from './index'
import { fireEvent, render } from '@testing-library/react'

describe('<Counter/>', () => {

  const valueTestId = 'counter-value'
  const increaseButtonTestId = 'counter-increase-button'
  const decreaseButtonTestId = 'counter-decrease-button'

  test('Should show the right value', () => {
    const VALUE = 1
    const { getByTestId } = render(Counter({whatToCount:"test" ,value: VALUE, increase:()=>{}, decrease:()=>{}})) 

    const { innerHTML } = getByTestId(valueTestId)
    expect(innerHTML).toBe(String(VALUE))
  })

  test('Should call increase function correctly', () => {
    const VALUE = 1
    const increase = jest.fn()
    const decrease = jest.fn()
    const { getByTestId } = render(Counter({whatToCount:"test" ,value: VALUE, increase, decrease}))
    const increaseButton = getByTestId(increaseButtonTestId)  
    fireEvent.click(increaseButton)
    expect(increase).toBeCalled()
    expect(decrease).not.toBeCalled()
  })

  test('Should call decrease function correctly', () => {
    const VALUE = 1
    const increase = jest.fn()
    const decrease = jest.fn()
    const { getByTestId } = render(Counter({whatToCount:"test" ,value: VALUE, increase, decrease}))
    const decreaseButton = getByTestId(decreaseButtonTestId)  
    fireEvent.click(decreaseButton)
    expect(increase).not.toBeCalled()
    expect(decrease).toBeCalled()
  })

  test('Should disable increase button if achieve maximum value', () => {
    const VALUE = 2
    const MAX_VALUE = 2
    const increase = jest.fn()
    const { getByTestId } = render(Counter({whatToCount:"test" ,value: VALUE, increase, decrease:()=>{}, maxValue: MAX_VALUE})) 
    const increaseButton = getByTestId(increaseButtonTestId)  
    fireEvent.click(increaseButton)
    expect(increase).not.toBeCalled()
  })

  test('Should disable decrease button if achieve minimum value', () => {
   
  })

  test('Should throw if minValue provided is bigger then maxValue provided', () => {})

})