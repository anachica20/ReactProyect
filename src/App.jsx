import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Autenticacion from './views/Autentication/index'
import Register from './views/Autentication/register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Autenticacion />
      <Register />
    </>
  )
}

export default App
