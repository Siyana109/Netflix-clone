import React, { useEffect } from 'react'
import Home from './components/pages/Home/Home'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from './components/pages/Login/Login'
import Player from './components/pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer } from 'react-toastify';

function App() {

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        console.log("Logged In")

        if (location.pathname === '/login') {
          navigate('/')
        }

      } else {
        console.log("Logged Out")
        if (location.pathname !== '/login') {
          navigate('/login')
        }
      }
    })

    return () => unsubscribe()

  }, [navigate, location.pathname])

  return (
    <div>
      <ToastContainer theme='dark'></ToastContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App