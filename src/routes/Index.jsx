import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import ContactPage from '../pages/ContactPage'
import CollectionPage from '../pages/CollectionPage'
import StoreLocationPage from '../pages/StoreLocationPage'
import AppNavbar from '../layout/AppNavbar'
import SearchPage from '../pages/SearchPage'
import SingleProductView from '../pages/SingleProductView'
import CartPage from '../pages/CartPage'

const Index = () => {
  return (
    <React.Fragment>
        <BrowserRouter>
        <AppNavbar/>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/:data' element={<SingleProductView/>}/>
                <Route path='/:data/:data' element={<SingleProductView/>}/>
                <Route path='/:data/:data/:data' element={<SingleProductView/>}/>
                <Route path='/:data/:data/:data/:data' element={<SingleProductView/>}/>
                <Route path='contact' element={<ContactPage/>}/>
                <Route path='collection' element={<CollectionPage/>}/>
                <Route path='collection/:data' element={<SingleProductView/>}/>
                <Route path='collection/:data/:data' element={<SingleProductView/>}/>
                <Route path='collection/:data/:data/:data' element={<SingleProductView/>}/>
                <Route path='collection/:data/:data/:data/:data' element={<SingleProductView/>}/>
                <Route path='location' element={<StoreLocationPage/>}/>
                <Route path='search' element={<SearchPage/>}/>
                <Route path='search/:data' element={<SingleProductView/>}/>
                <Route path='search/:data/:data' element={<SingleProductView/>}/>
                <Route path='search/:data/:data/:data' element={<SingleProductView/>}/>
                <Route path='search/:data/:data/:data/:data' element={<SingleProductView/>}/>
                <Route path='cart' element={<CartPage/>}/>
            </Routes>
        </BrowserRouter>    
    </React.Fragment>
  )
}

export default Index