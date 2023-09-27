import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import SignUp from './components/SignUp'
const Layout = () => {
  return (
    <>
         
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<SignUp />}/>
          <Route path='/home' element={<App />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Layout