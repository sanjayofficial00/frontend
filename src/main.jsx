import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Works from './pages/Works.jsx'
import Blogs from './pages/Blogs.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>} />
      <Route path='home' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='works' element={<Works/>} />
      <Route path='blogs' element={<Blogs/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
