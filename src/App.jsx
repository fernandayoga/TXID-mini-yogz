import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/Router'

function App() {
 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
