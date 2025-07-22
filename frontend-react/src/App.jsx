import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'


function App() {

  return (
    <>
      <BrowserRouter>
      {/* place header in between BrowseRouter and Routes */}
        <Header/>
        <Routes>
          {/* / this path for  home page , in element give the home component , i named home component as main */}
          <Route path='/' element={<Main/>}/>
          {/* /register this path for  register page ,in element give the register component */}
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        {/* place Footer in between BrowseRouter and Routes */}
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
