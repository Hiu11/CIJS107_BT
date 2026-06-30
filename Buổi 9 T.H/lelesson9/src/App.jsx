import { useState } from 'react'
import './App.css'
import LoginPage from "./screens/Login/index.jsx"
import { Routes } from 'react-router'



function App() {

  return (
    <>
      <div className="app w-screen min h-screen">
        <Routes>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='my-profile' element={<Profile/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
