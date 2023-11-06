import React from 'react'
import Footer from './component/footer/Footer.jsx'
import Products from './component/products/Products.jsx'
import Home from './component/home/Home.jsx'
import PageNotfound from './component/PageNotFound/PageNotFound.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './component/navbar/Navbar.jsx'
import Restaurant from './component/restaurant/Restaurant.jsx'
import Pizza from './component/restaurant/Pizza.jsx'
import Onion from './component/restaurant/Onion.jsx'
import Salad from './component/restaurant/Salad.jsx'

export default function App(){
  return (
    <>
   <BrowserRouter>
     <Navbar />
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/products' element={<Products />} />
     <Route path='/restaurant' element={<Restaurant />} />
     <Route path='/home' element={<Home />} />
     <Route path='/pizza' element={<Pizza />} />
     <Route path='/onion' element={<Onion />} />
     <Route path='/salad' element={<Salad />} />
     <Route path='*' element={<PageNotfound />} />
   </Routes> 
      <Footer />
  </BrowserRouter>
    </>
  )
}
