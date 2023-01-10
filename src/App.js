import "./App.css";
import 'antd/dist/antd.min.css';
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { EditPage } from "./pages/Comments/edit";
import { CountryList } from "./pages/CountryList/CountryList";
import countries from "./data";
import { CountryInfo } from "./pages/CountryInfo/CountryInfo";
import { SignUp } from "./pages/SignUp";
import { Comment } from "./pages/Comments/index";
import Us from "./pages/AboutUs/Us";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="/:id" element={<EditPage />} />
        <Route path="/sign-up" element={<SignUp />} />
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
    </div>
  );
}

export default App;
