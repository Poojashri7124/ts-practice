import { useState } from 'react'
import Button from './Button'

function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <p className="counter-value">{count}</p>
      <div className="row">
        <Button label="Decrease" variant="secondary" onClick={() => setCount(count - 1)} />
        <Button label="Increase" onClick={() => setCount(count + 1)} />
        <Button label="Reset" variant="secondary" onClick={() => setCount(0)} />
      </div>
    </div>
  )
}

export default Counter