import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import './App.css'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div className='w-full h-full bg-[#0F0F0F] text-white'>
      <Header/>
      <Outlet/>
      <Footer/> 
    </div>
  )
}

export default App