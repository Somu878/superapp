import { useState } from 'react'
import Registration from './pages/Registration'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registration/>
    </>
  )
}

export default App
