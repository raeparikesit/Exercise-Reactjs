import React from "react";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Viewdata from "./components/Viewdata";
import Formdata from "./components/Formdata";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar/>
        <div className="flex">
        <Sidebar/>
        <Routes> 
        <Route path="/" element={<Home/>}/> 
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/dashboard/list-job-vacancy" element={<Viewdata/>}/>
          <Route path="/dashboard/list-job-vacancy/form" element={<Formdata/>}/>
          <Route path="/dashboard/list-job-vacancy/edit/:ID_GAMES" element={<Formdata/>}/>
        </Routes>
        </div>
        <Footer/>
    </GlobalProvider>
    </BrowserRouter>
    
  );
}

export default App;
