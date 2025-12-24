
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import ThemeProvider, { ThemeContext } from './components/utills/ThemeContext'
import { useContext } from 'react'


function App() {
 const {isDark} = useContext(ThemeContext)

  

  return (
    <>
      <ThemeProvider>
        <div className={isDark?"dark":""}>
          <Header />
          <Outlet />

        </div>
      </ThemeProvider>

    </>
  )
}

export default App
