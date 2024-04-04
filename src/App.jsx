import React, { useState, createContext } from 'react'
import CounterComponent from './Components/Redux/CounterComponent';
import Home from './pages/Home/Home';
function App() {
  


  return (
    <div className="app">
      <CounterComponent/>
    </div>
  )
}
export default App;

// https://blog.logrocket.com/react-context-api-deep-dive-examples/