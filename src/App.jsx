import { useState, createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyContext } from './Components/MyContext'
import CreateStore from './Components/CreateStore'
import CreateStore02 from './Components/CreateStore02'

function App() {
  const [count, setCount] = useState(7)

  return (
    <>
      <MyContext.Provider  value={{count, setCount}}>
        <CreateStore/>
        <CreateStore02/>
      </MyContext.Provider>
    </>
  )
}

export default App
