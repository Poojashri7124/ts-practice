import { useState } from 'react'
import type React from 'react'
import Button from './Button'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  increment,
  decrement,
  incrementBy,
  reset,
  selectCount,
} from '../features/counter/counterSlice'

function ReduxCounter() {
  const count = useAppSelector(selectCount) // number
  const dispatch = useAppDispatch()
  const [amount, setAmount] = useState<string>('5')

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAmount(e.target.value)
  }

  function handleAddAmount() {
    const number = Number(amount)
    if (amount.trim() === '' || Number.isNaN(number)) return
    dispatch(incrementBy(number)) // payload must be a number
  }

  return (
    <div>
      <p className="counter-value">{count}</p>
      <div className="row">
        <Button label="Decrease" variant="secondary" onClick={() => dispatch(decrement())} />
        <Button label="Increase" onClick={() => dispatch(increment())} />
        <Button label="Reset" variant="secondary" onClick={() => dispatch(reset())} />
      </div>
      <div className="row redux-row">
        <input
          className="input"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          aria-label="Amount"
        />
        <Button label="Add amount" onClick={handleAddAmount} />
      </div>
    </div>
  )
}

export default ReduxCounter