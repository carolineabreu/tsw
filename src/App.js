<<<<<<< HEAD
import './App.css';
import Navbar  from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import CountryList from "./Pages/CountryList";
import SignUp from "./Pages/Sig Up/SignUp";
import Home from "./Pages/Home/Home";
// import SearchBar from "@mui/material/SearchBar";
// import List from "./Components/List"
=======
import { Routes, Route } from "react-router-dom";
import { Comment } from "./pages/Comments/index";
import { EditPage } from "./pages/Comments/edit";
import { CountryList } from "./pages/CountryList";
import countries from "./data";
import { CountryInfo } from "./pages/CountryInfo";
>>>>>>> main

function App( ) {
  return (
    <div className="App">
<<<<<<< HEAD
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
     {/* <Route path="country-list" element={<CountryList countries={countries}  />} /> */}
     <Route path="/sign-up" element={<SignUp />} />
     </Routes>
=======
      <Routes>
        <Route path="/" element={<Comment />} />
        <Route path="/:id" element={<EditPage />} />
        <Route
          path="/country-list"
          element={<CountryList countries={countries} />}
        />
        <Route
          path="/country-list/:id"
          element={<CountryInfo countries={countries} />}
        />
      </Routes>
>>>>>>> main
    </div>
  );

}

export default App;
