import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { EditPage } from "./pages/Comments/edit";
import { CountryList } from "./pages/CountryList";
import countries from "./data";
import { CountryInfo } from "./pages/CountryInfo";
import { SignUp } from "./pages/SignUp";
import {Comment} from "./pages/Comments/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments" element={<Comment/>} />
        <Route path="/:id" element={<EditPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/country-list"
          element={<CountryList countries={countries} />}
        />
        <Route
          path="/country-list/:id"
          element={<CountryInfo countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
