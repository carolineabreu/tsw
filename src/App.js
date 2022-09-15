import React from 'react';
import './App.css';
import Navbar  from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import CountryInfo from "./Pages/CountryInfo";
import SignUp from "./Pages/Sig Up/SignUp";
import Home from "./Pages/Home/Home";
// import SearchBar from "@mui/material/SearchBar";
// import List from "./Components/List"

function App( ) {
  return (
    <div className="App">
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/CountryInfo" element={<CountryInfo />} />
     <Route path="/SignUp" element={<SignUp />} />
     </Routes>
    </div>
  );
}

export default App;
