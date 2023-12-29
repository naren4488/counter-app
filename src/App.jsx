import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (e) => {
    if(e.target.value === 'inc'){
      setCount((prevCount) => prevCount+1)
    }
    else{
      setCount((prevCount) => prevCount-1)
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button value='inc' onClick={(e) => handleClick(e)}>Increment</button>
      <button value='dec' onClick={(e) => handleClick(e)}>Decrement</button>
    </>
  )
}

export default App
