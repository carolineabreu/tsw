import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home  from "./pages/Home/Home";
import "./components/Cards"
import CountryInfo from "./pages/CountryInfo";
import SignUp from "./pages/Sig Up/SignUp";


function App( ) {
  return (
    <div className="App">
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/CountryInfo" element={<CountryInfo />} />
     <Route path="/Sign-Up" element={<SignUp />} />
     </Routes>
    </div>
  );
}

export default App;
