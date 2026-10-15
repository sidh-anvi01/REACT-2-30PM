import React from 'react'
import useCounter from '../hooks/useCounter'
const CounterScreen = () => {
    const {count,increament,decreament,reset}=useCounter()
  return (
    <div>
      <h1>this is sscreen for counter </h1>
      <h1>{count}</h1>


<button onClick={increament}>ince</button>
<button onClick={decreament}>decr</button>
<button onClick={reset}>reset</button>

    </div>
  )
}

export default CounterScreen
