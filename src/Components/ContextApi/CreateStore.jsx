import { MyContext } from "./MyContext"
import React ,{useContext}from 'react'

const CreateStore = () => {
    const { count, setCount} = useContext(MyContext);

  return (
    <div>

    <h1>{count}</h1>
    <h1>CreateStore</h1>
    <button onClick={() => setCount(count+1)}>
      Click me
    </button>
  </div>  )
}

export default CreateStore