import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
function App() {
  return (
    <> 
      <div>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App