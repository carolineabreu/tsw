import { Routes, Route } from "react-router-dom";
import { Comment } from "./pages/Comments/index";
import { EditPage } from "./pages/Comments/edit";
import { CountryList } from "./pages/CountryList";
import countries from "./data";
import { CountryInfo } from "./pages/CountryInfo";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
