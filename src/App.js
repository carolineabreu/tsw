import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthContextComponent } from "./contexts/authContext";
import Us from "./pages/AboutUs/Us";
import { CountryInfo } from "./pages/CountryInfo/CountryInfo";
import { CountryList } from "./pages/CountryList/CountryList";
import { CreateCountry } from "./pages/CreateCountry";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { EditReview } from "./pages/Review/EditReview";
import { ReviewDetail } from "./pages/Review/ReviewDetail";
import { ReviewsPage } from "./pages/Review/ReviewsPage";
import { Signup } from "./pages/Signup";


function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />

          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/review/edit/:id" element={<EditReview />} />
          <Route path="/review/:id" element={<ReviewDetail />} />

          <Route path="/about-us" element={<Us />} />

          <Route
            path="/countries"
            element={<CountryList />}
          />
          <Route
            path="/countries/:id"
            element={<CountryInfo />}
          />
          <Route path="/country/create" element={<CreateCountry />} />
        </Routes>
        <Toaster />
      </AuthContextComponent>
    </div>
  );
}

export default App;
