import React from 'react'
import { useState, useEffect } from 'react'
import "./App.css"

const test = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("state on side effect",count)
      return() => {
        console.log("i am being cleaned", count % 50)
      };
    },[ count]);
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count+1)}>increase</button>
      <button onClick={() => setCount(count-1)}>decrease</button>
    </div>
  )
}

export default test
