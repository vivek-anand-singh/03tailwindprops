import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 m-4'>Tailwind Test</h1>
    <Card channel="chai"/>

    <Card />
    </>
  )
}

export default App
