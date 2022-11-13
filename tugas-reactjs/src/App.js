import React from "react";
import Tugas7 from './tugas7/tugas7';
import Tugas8 from './tugas8/tugas8';
import Tugas9 from './tugas9/tugas9';
import Tugas10 from './tugas10/tugas10';
import Tugas11 from './tugas11/tugas11';
import Tugas12 from './tugas12/tugas12';
import Tugas13 from './tugas13/tugas13';
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/navbar';
import Tugas15List from "./tugas15/Tugas15List";
import Tugas15Form from "./tugas15/Tugas15Form";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar/>
        <Routes>  
          {/*
          <Tugas8 name="Muhammad Hafizh Akmal" batch="39" email="hafizhakmal20@gmail.com"/>
          <Tugas9/>   
          <Tugas10/> 
          <Tugas11/>
          <Tugas12/>*/}
          
          <Route path="/" element={<Tugas7/>}/>
          <Route path="/tugas15" element={<Tugas15List/>}/>
          <Route path="/create" element={<Tugas15Form/>}/>
          <Route path="/edit/:IdData" element={<Tugas15Form/>}/>
        </Routes>
    </GlobalProvider>
    </BrowserRouter>
    
  );
}

export default App;
