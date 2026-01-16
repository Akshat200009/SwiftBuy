import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Shop from './Pages/Shop'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <ToastContainer />
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Shop' element={<Shop/>} />
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App