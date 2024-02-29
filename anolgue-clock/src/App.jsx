import React, { useState, useEffect } from 'react'
import './App.css'
import AnlogueClock from './AnolgueClock';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AnlogueClock />
    </div>
  )
}

export default App
