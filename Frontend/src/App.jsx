import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import NewArraivels from './pages/NewArraivels'
import Contact from './pages/Contact'
import Dynamic from './pages/Dynamic'
import Contextprovider from './context/Contextprovider'
import Register from './pages/Register'
import Login from './pages/Login'
import Protect from './pages/Protect'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Contextprovider>
        <Routes>

          {/* Public pages */}
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />

          {/* Protected pages */}
          <Route path='/home' element={<Protect><Home /></Protect>} />
          <Route path='/about' element={<Protect><About /></Protect>} />
          <Route path='/shop' element={<Protect><Shop /></Protect>} />
          <Route path='/contact' element={<Protect><Contact /></Protect>} />
          {/* <Route path='/dynamic/:id' element={<Protect><Dynamic /></Protect>} /> */}

        </Routes>
      </Contextprovider>
    </BrowserRouter>
</>
  )
}

export default App
