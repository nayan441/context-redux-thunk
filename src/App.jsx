import React, { useState, createContext } from 'react'
import CounterComponent from './Components/Redux/CounterComponent';
import Home from './pages/Home';
import {Provider} from 'react-redux'
import store from './redux/store.js'
// import store from './Components/Redux/state/store.js'
function App() {
  


  return (
    <div className="app">
      <Provider store={store}>
      {/* <CounterComponent/> */}

      <Home></Home>
      </Provider>
      
    </div>
  )
}
export default App;

// https://blog.logrocket.com/react-context-api-deep-dive-examples/