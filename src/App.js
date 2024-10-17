import React from 'react'
import MainNavbar from './Pages/Navbar';
import Singalpage from './Pages/Singalpage';
import FeedbackForm from './Pages/Formofqtify';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>

      <Route path="/" element={ <MainNavbar/>} />
      <Route path="/Singalpage" element={ <Singalpage/>} />
      <Route path="/Formpage" element={ <FeedbackForm/>} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
