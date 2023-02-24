import React, { useState } from 'react'

function App() {
  const [element, setElement]=useState("")
  return (
    <div>
      <div>Name:{element}</div>
        <input onChange={
          (e)=>{
              console.log(e)
              setElement(
                e.target.value
              )
          }
        } />
    </div>
  )
}

export default App