import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cover from './assets/img/mcover02.png';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello World</h1>
    <h4>This is the worlds first Fan Website of the series:</h4>
    <h2>Miraculous: Tales of Ladybug & Cat Noir</h2>
    <img src={cover} alt="coverimg" />
    </>
  )
}

export default App