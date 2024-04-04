import React, { useState, createContext } from 'react'
import Dashboard from './Components/ContextApiExample/Dashboard';
import { UserProvider } from './Components/ContextApiExample/MyContext';
function App() {
  


  return (
    <div className="app">
      <p> Component     App</p>
      <h1>Welcome</h1>
      <UserProvider>
      <Dashboard  />
      </UserProvider>
    </div>
  )
}
export default App;

// https://blog.logrocket.com/react-context-api-deep-dive-examples/