import React from "react";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/navbar';
import Home from './components/Home';
import ManageData from "./components/ManageData";


function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar/>
        <Routes>  
  
          <Route path="/" element={<Home/>}/>
          <Route path="/manage-data" element={<ManageData/>}/>
          <Route path="/edit/:IdData" element={<ManageData/>}/>
        </Routes>
    </GlobalProvider>
    </BrowserRouter>
    
  );
}

export default App;
