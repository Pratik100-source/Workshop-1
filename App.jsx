// import { BrowserRouter, Routes, Route } from "react-router-dom"

// import Login from './components/Login&Signup/login'
// import Signup from './components/Login&Signup/signup'

import React, { useState } from 'react';
import Home from './components/home/home'
export default function App() {

  const [results, setResults] = useState([]);
  return (
    // <div>
    // <BrowserRouter>
    // <Routes>
     
    // <Route index element={<Signup/>}/>
    // <Route path="/signup" element = {<Signup/>}/>
    // <Route path="/login" element = {<Login/>}/>

    // </Routes>
      
    // </BrowserRouter>
  
    // </div>

   
    // <Home setResults={setResults} results={results}/>
    <Home setResults={setResults} results={results} />
  );
}
