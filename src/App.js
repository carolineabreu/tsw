import './App.css';
import Navbar  from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import CountryList from "./Pages/CountryList";
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
     {/* <Route path="country-list" element={<CountryList countries={countries}  />} /> */}
     <Route path="/sign-up" element={<SignUp />} />
     </Routes>
    </div>
  );

}

export default App;
