import React, { useEffect, useState } from 'react'
import './index.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
import { Header,Footer } from './components'

const App = () => {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .catch((error)=>console.log(error))
      .finally(() => { setLoading(false) })
  }, [])

  return !loading ? (
    <div className='text-2xl text-slate-800 bg-slate-300 flex flex-wrap content-between'>
      <div className='w-full black'>
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App