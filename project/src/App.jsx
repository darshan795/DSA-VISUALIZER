import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import BinarySearch from './components/BinarySearch/BinarySearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BinarySearch/>
    
    </>
  )
}

export default App
