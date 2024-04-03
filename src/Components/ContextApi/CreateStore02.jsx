import { MyContext } from "./MyContext"
import React ,{useContext}from 'react'

const CreateStore02 = () => {
    const { count, setCount} = useContext(MyContext);

  return (
    <div>
    <h1>{count}</h1>
    <h1>CreateStore02</h1>
    <button onClick={() => setCount(count+1)}>
      Click me
    </button>
  </div>
  )
}

export default CreateStore02




