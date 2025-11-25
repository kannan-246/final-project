import React from 'react'
import { BrowserRouter, Form, Route, Routes } from "react-router-dom"
import Contextprovider from './context/Contextprovider'
import MyForm from './pages/Form'
import MyProduct from './pages/Product'
import User from './pages/User'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Contextprovider>
      <Routes>
          <Route path='/' element={ < MyForm />}/>
          <Route path='/product' element={<MyProduct/>}/>
          <Route path='/user' element={<User/>}/>
      </Routes>
    </Contextprovider>
    </BrowserRouter>
    </>
  )
}

export default App