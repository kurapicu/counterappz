import React, { useState } from 'react'
import './App.css'

const App = () => {
  let [number,setNumber] = useState(0)

  const decrementCount = ()=>{
    if (number > o){
      setNumber((number -= 1));
    }
    console.log(number);
  }

  const incrementCount = ()=>{
    if ( number < 50){
      setNumber((number += 1));
    }
    console.log(number);
  }
  return (
    <div className='holder'>
      <h3>{number}</h3>
      <div className="btn-hold">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  )
}

export default App