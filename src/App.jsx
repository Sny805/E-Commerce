import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import ProductCart from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Header/>
          <ProductCart/>
      </div>
     
    </>
  )
}

export default App
