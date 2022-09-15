import { Route, Routes } from "react-router-dom";
import countries from "./data";
import { CountryInfo } from "./pages/CountryInfo";
import { CountryList } from "./pages/CountryList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/country-list"
          element={<CountryList countries={countries} />}
        />
        <Route
          path="/:id"
          element={<CountryInfo countries={countries} />}
        />
        <Route path="/" element={<Comment />} />
        <Route path="/form" element={<Form />} />
        <Route path="/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
