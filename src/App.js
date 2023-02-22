import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import countries from "./data";
import Us from "./pages/AboutUs/Us";
import { Comment } from "./pages/Comment/Comment";
import { CountryInfo } from "./pages/CountryInfo/CountryInfo";
import { CountryList } from "./pages/CountryList/CountryList";
import Home from "./pages/Home/Home";
import { Signup } from "./pages/Signup";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="/about-us" element={<Us />} />

        <Route
          path="/country-list"
          element={<CountryList countries={countries} />}
        />
        <Route
          path="/country-list/:id"
          element={<CountryInfo countries={countries} />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
